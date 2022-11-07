import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/shared/services/alert.service';
import { TYPE_ALERT } from 'src/app/shared/services/config';

@Component({
  selector: 'app-aptitud-fisica-add',
  templateUrl: './aptitud-fisica-add.component.html',
  styleUrls: ['./aptitud-fisica-add.component.scss']
})
export class AptitudFisicaAddComponent implements OnInit {

  public valor: any = [
    {
      id: 1,
      nombre: "Editar",
      descripccion: "Permite editar campos"
    }
  ]

  constructor(
    private alert : AlertService,
    private route : Router,
  ) { }

  ngOnInit(): void {
  }

  guardarPermiso(){
    this.alert.questionAlertConfirm(
      '¿Está seguro que desea registrar?',
      '',
      'Si, Registrar',
      TYPE_ALERT.QUESTION
    ).then(
      (result) => {
        if (result.value) {
          this.route.navigate(['/capacitaciones/aptitud-fisica']).then(r => r)
        } else {
  
        }
      }
    );
  }
  close(){
    this.route.navigate(['/capacitaciones/aptitud-fisica']);
  }

  cancelarPermiso(){
    this.route.navigate(['/capacitaciones/aptitud-fisica']).then(() => { });
  }

}
