import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component.copy';
import { HomeComponent } from './home2/home.component';
import { SobreComponent } from './sobre/sobre.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { AgendamentoComponent } from './agendamento/agendamento.component';
import { ServicosComponent } from './servicos/servicos.component';
import { SharedComponent } from './shared/shared.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatNativeDateModule } from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CadastroFormComponent } from './cadastro/cadastro-form/cadastro-form.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SobreComponent,
    CadastroComponent,
    LoginComponent,
    AgendamentoComponent,
    ServicosComponent,
    SharedComponent,
    CadastroFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDatepickerModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    MatNativeDateModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    MatDatepickerModule,
    MatNativeDateModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
