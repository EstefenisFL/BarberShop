import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgendamentoComponent } from './agendamento/agendamento.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ServicosComponent } from './servicos/servicos.component';
import { SobreComponent } from './sobre/sobre.component';

const routes: Routes = [
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'cadastro',
    component: CadastroComponent
  },
  {
    path:'agendamento',
    component: AgendamentoComponent
  },
  {
    path:'serviços',
    component: ServicosComponent
  },
  {
    path:'sobre',
    component: SobreComponent
  },
  {
    path:'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
