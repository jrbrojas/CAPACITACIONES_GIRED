import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/shared/services/alert.service';
import { TYPE_ALERT } from 'src/app/shared/services/config';

@Component({
  selector: 'app-libro-tareas-posicion-add',
  templateUrl: './libro-tareas-posicion-add.component.html',
  styleUrls: ['./libro-tareas-posicion-add.component.scss']
})
export class LibroTareasPosicionAddComponent implements OnInit {

  cantidad = 1
  cantidades: any[] = [
    {
      nombre: `Tarea ${this.cantidad}`,
        descripccion: `Descripcion de ${this.cantidad}`
    },
  ];
  public valor: any = [
    {
      id: 1,
      nombre: "Editar",
      descripccion: "Permite editar campos"
    }
  ]

  constructor(
    private alert: AlertService,
    private route: Router,
  ) { }

  ngOnInit(): void {
  }

  guardarPermiso() {
    this.alert.questionAlertConfirm(
      '¿Está seguro que desea registrar?',
      '',
      'Si, Registrar',
      TYPE_ALERT.QUESTION
    ).then(
      (result) => {
        if (result.value) {
          this.route.navigate(['/capacitaciones/libro-tareas-posición']).then(r => r)
        } else {

        }
      }
    );
  }
  close() {
    this.route.navigate(['/capacitaciones/libro-tareas-posición']);
  }

  cancelarPermiso() {
    this.route.navigate(['/capacitaciones/libro-tareas-posición']).then(() => { });
  }

  add() {
    this.cantidad++
    this.cantidades.push(
      {
        nombre: `Tarea ${this.cantidad}`,
        descripccion: `Descripcion de ${this.cantidad}`
      }
    );

  }

}
