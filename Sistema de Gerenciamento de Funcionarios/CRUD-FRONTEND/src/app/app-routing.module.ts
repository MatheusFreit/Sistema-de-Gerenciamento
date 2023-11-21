import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { HomeComponent } from './pages/home/home.component';
import { EditarComponent } from './pages/editar/editar.component';
import { DetalhesComponent } from './pages/detalhes/detalhes.component';
import { ExcluirComponent } from './components/excluir/excluir.component';

const routes: Routes = [
  
    {path: '' , component: HomeComponent},
    {path: "cadastrar" , component: CadastroComponent},
    {path: "Editar/:id" , component: EditarComponent},
    {path: "Detalhes/:id" , component: DetalhesComponent},
    {path: "Excluir/:id" , component: ExcluirComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
