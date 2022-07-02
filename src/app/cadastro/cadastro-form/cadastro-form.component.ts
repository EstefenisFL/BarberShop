import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-cadastro-form',
  templateUrl: './cadastro-form.component.html',
  styleUrls: ['./cadastro-form.component.css']
})
export class CadastroFormComponent implements OnInit {
  public cadastroForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {
    this.cadastroForm = this.fb.group({
      Name: ['', [Validators.required]],
      Email: ['', [Validators.required]],
      DataNascimento: ['', [Validators.required]],
      Sexo: ['', [Validators.required]],
      Password: ['', [Validators.required]],
    })
  }
  ngOnInit(): void {
  }

}
