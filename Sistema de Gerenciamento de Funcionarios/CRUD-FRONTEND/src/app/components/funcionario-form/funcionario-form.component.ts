import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Funcionario } from 'src/app/models/funcionario';

@Component({
  selector: 'app-funcionario-form',
  templateUrl: './funcionario-form.component.html',
  styleUrls: ['./funcionario-form.component.css']
})
export class FuncionarioFormComponent implements OnInit{
  @Input() btnAcao!: string; 
  @Input() btnTitulo!: string; 
  @Input() dadosFuncionario: Funcionario| null= null;  

  @Output () onSumbit = new EventEmitter<Funcionario>();

  FuncionarioForm!: FormGroup; 

  constructor(){

  }

  ngOnInit(): void {
        
    this.FuncionarioForm = new FormGroup ({
        id:new FormControl(this.dadosFuncionario ? this.dadosFuncionario.id: 0),
        name: new FormControl(this.dadosFuncionario ? this.dadosFuncionario.name: "",[Validators.required]),
        sobrenome: new FormControl(this.dadosFuncionario ? this.dadosFuncionario.sobrenome:"",[Validators.required]),
        departamento: new FormControl(this.dadosFuncionario ? this.dadosFuncionario.departamento : '', [Validators.required]),
        
        turno: new FormControl(this.dadosFuncionario ? this.dadosFuncionario.turno: "",[Validators.required]),
        ativo: new FormControl(this.dadosFuncionario ? this.dadosFuncionario.ativo:true),
        dataDeCriação: new FormControl(new Date()),
        dataDeAlteração: new FormControl(new Date()),

      });
  }

  submit(){
    this.onSumbit.emit(this.FuncionarioForm.value)

    

  }
}
