import {  Component,  ChangeDetectionStrategy,  ViewChild,  TemplateRef,  OnInit,} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-agendamento',
  templateUrl: './agendamento.component.html',
  styleUrls: ['./agendamento.component.css']
})
export class AgendamentoComponent implements OnInit {
  myTime = new FormGroup({
    time: new FormControl()
  });


  constructor() { }

  ngOnInit(): void { }

}
