import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/shared/services/alert.service';
import { TYPE_ALERT } from 'src/app/shared/services/config';

@Component({
  selector: 'app-libro-tareas-posicion-details',
  templateUrl: './libro-tareas-posicion-details.component.html',
  styleUrls: ['./libro-tareas-posicion-details.component.scss']
})
export class LibroTareasPosicionDetailsComponent implements OnInit {

  cantidades: any[] = [
    {
      nombre: "Organizar equipos",
      descripccion: "DTarea que determina como organizar equipos ante una emergencia"
    },
    {
      nombre: "Elaborar plan de emergencia",
      descripccion: "Tarea que determina como realizar un plan ante una emergencia"
    },
    {
      nombre: "Elaborar procedimiento de atención de un incendio",
      descripccion: "Tarea que determina como realizar un procedimiento para atender un incendio"
    }
  ];
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
      '¿Está seguro que desea actualizar?',
      '',
      'Si, Actualizar',
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
  close(){
    this.route.navigate(['/capacitaciones/libro-tareas-posición']);
  }

  cancelarPermiso(){
    this.route.navigate(['/capacitaciones/libro-tareas-posición']).then(() => { });
  }

  add(){
    this.cantidades.push(
      {
        nombre: '',
        descripccion : ''
      }
    );
    
  }

}
