import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Funcionario } from 'src/app/models/funcionario';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {

  btnAcao:string = "Cadastrar!";
  btnTitulo:string = "Cadastrar Funcionário"

constructor(private funcionarioService : FuncionarioService, private router: Router){

}


  createFuncionario(funcionario: Funcionario){
    this.funcionarioService.CreateFuncionario(funcionario).subscribe((data) => {
      console.log(data)
      this.router.navigate([''])
    });
    
  }



}
