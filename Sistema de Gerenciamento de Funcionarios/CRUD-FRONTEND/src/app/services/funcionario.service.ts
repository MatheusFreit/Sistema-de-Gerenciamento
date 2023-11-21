import {Injectable} from '@angular/core';
import {environment} from 'src/environments/environment.development';
import {HttpClient} from "@angular/common/http"


import { Observable } from 'rxjs';
import { Response } from '../models/Reposnse';
import { Funcionario } from '../models/funcionario';
import { id } from 'date-fns/locale';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  private apiUrl = `${environment.ApiUrl}/Funcionario`


  constructor(private http: HttpClient) { }

  //Atualiza a lista de funcionario
  GetFuncionarios() : Observable<Response<Funcionario[]>>{
  return this.http.get<Response<Funcionario[]>>(this.apiUrl);
  }
  //Vai criar criar

  CreateFuncionario(funcionario: Funcionario): Observable<Response<Funcionario[]>>{
    return this.http.post<Response<Funcionario[]>>(`${this.apiUrl}`,funcionario);
  }

  Getfuncioario(id: number) : Observable<Response<Funcionario>>{
    return this.http.get<Response<Funcionario>>(`${this.apiUrl}/${id}`);
    }

  EditarFuncionario(funcionario: Funcionario): Observable<Response<Funcionario[]>>{
      return this.http.put<Response<Funcionario[]>>(`${this.apiUrl}`,funcionario);
    } 
  InativaFuncionario(id: number): Observable<Response<Funcionario[]>>{
    return this.http.put<Response<Funcionario[]>>(`${this.apiUrl}/InativaFuncionario?id=${id}`,null);
  }

  ExcluirFuncionario(id: number): Observable<Response<Funcionario[]>>
  {
    return this.http.delete<Response<Funcionario[]>>(`${this.apiUrl}?id=${id}`,);
  }


    //`${this.apiUrl}`
}
