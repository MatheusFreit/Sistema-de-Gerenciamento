import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {  Router } from '@angular/router';
import { Funcionario } from 'src/app/models/funcionario';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-excluir',
  templateUrl: './excluir.component.html',
  styleUrls: ['./excluir.component.css']
})
export class ExcluirComponent implements OnInit {
  Funcionario!: Funcionario;
  inputdata: any;


  constructor(private funcionarioService : FuncionarioService, 
    @Inject(MAT_DIALOG_DATA) public data: any,
    private router: Router,
    private ref:MatDialogRef<ExcluirComponent>
    
    
    
    ){

  }
  ngOnInit(): void {
     this.inputdata = this.data;
      this.funcionarioService.Getfuncioario(this.inputdata.id).subscribe((data)=>{
        this.Funcionario = data.dados;
        console.log(this.inputdata.id)

     })
}

Excluir(){
this.funcionarioService.ExcluirFuncionario(this.inputdata.id).subscribe((data)=>
{
  this.ref.close();
  window.location.reload();
});

}

Voltar(){
  this.ref.close();
}

}
