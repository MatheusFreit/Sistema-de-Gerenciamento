import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FuncionarioService } from 'src/app/services/funcionario.service';
import { Funcionario } from 'src/app/models/funcionario';


@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent implements OnInit {
 
  Funcionario?: Funcionario;
  id!:number;

  constructor(private funcionarioService : FuncionarioService, private route: ActivatedRoute, private router: Router){

  }
  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
     this.funcionarioService.Getfuncioario(this.id).subscribe((data) => {
      const dados = data.dados;
      dados.datadeCriacao = new Date(dados.datadeCriacao!).toLocaleDateString('pt-BR');
      dados.datadeAlteracao = new Date( dados.datadeAlteracao!).toLocaleDateString('pt-BR');

      this.Funcionario = data.dados;

    })

  }
  InativaFuncionario(){
    console.log('Inativando funcionário com ID:', this.id, typeof(this.id));
    
    this.funcionarioService.InativaFuncionario(this.id).subscribe((data)=>{
     
      this.router.navigate([''])
    })

   
  }

}
