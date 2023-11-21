import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ExcluirComponent } from 'src/app/components/excluir/excluir.component';
import { Funcionario } from 'src/app/models/funcionario';
import { FuncionarioService } from 'src/app/services/funcionario.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  funcionarios: Funcionario [] = [];
  funcionariosGeral:Funcionario [] = [];

  colunas = ['Situacao', 'Nome', 'Sobrenome', 'Departamento', 'Ações', 'Excluir'];


  constructor(private funcionarioService: FuncionarioService, public dialog: MatDialog ){
  } 

  ngOnInit(): void {
    this.funcionarioService.GetFuncionarios().subscribe(data => {
      const dados = data.dados;

      dados.map((item) => {
        if (item.datadeCriacao) {
          item.datadeCriacao = new Date(item.datadeCriacao!).toLocaleDateString('pt-BR');
        } 
        if (item.datadeAlteracao) {
          item.datadeAlteracao = new Date(item.datadeAlteracao!).toLocaleDateString('pt-BR');
        }
      })
      console.log(dados)
      this.funcionarios = data.dados;
      this.funcionariosGeral = data.dados;
      
    });
  }
  
  search(event : Event){

    const target = event.target as HTMLInputElement;
    const value = target.value.toLowerCase(); 

    if (this.funcionariosGeral && Array.isArray(this.funcionariosGeral)) {
      this.funcionarios = this.funcionariosGeral.filter(funcionarios => {
        // Verifica se 'funcionarios' é um objeto válido e possui a propriedade 'nome'
        return funcionarios && funcionarios.name && funcionarios.name.toLowerCase().includes(value);
      });
    }


  }

openDialog(id:number){
  this.dialog.open(ExcluirComponent, {
    width: '450px',
    height: '450px',
    data: {
      id: id,
    }
    });

}


  
}
