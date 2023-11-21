import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Funcionario } from 'src/app/models/funcionario';
import { FuncionarioService } from 'src/app/services/funcionario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent {
  btnAcao:string = "Editar!";
  btnTitulo:string = "Editar Funcionário"
  Funcionario!: Funcionario;



  constructor(private funcionarioService : FuncionarioService, private route: ActivatedRoute, private router: Router){

  }
  ngOnInit(){
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.funcionarioService.Getfuncioario(id).subscribe((data) => {
      this.Funcionario = data.dados;
      
    })
  }
  
  editarFuncionario(funcionario: Funcionario){
this.funcionarioService.EditarFuncionario(funcionario).subscribe((data) => {
  this.router.navigate(['/'])

})}



 
}
