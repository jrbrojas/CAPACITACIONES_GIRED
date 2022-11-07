import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/shared/services/alert.service';
import { TYPE_ALERT } from 'src/app/shared/services/config';

@Component({
  selector: 'app-libro-tareas-posicion',
  templateUrl: './libro-tareas-posicion.component.html',
  styleUrls: ['./libro-tareas-posicion.component.scss']
})
export class LibroTareasPosicionComponent implements OnInit {

  public data : any = [
    {
      id: 'LTP 1',
      nombre: "Organizar equipos",
      descripccion: "Tarea que determina como organizar equipos ante una emergencia"
    },
    {
      id: 'LTP 2',
      nombre: "Elaborar plan de emergencia",
      descripccion: "Tarea que determina como realizar un plan ante una emergencia"
    },
    {
      id: 'LTP 3',
      nombre: "Elaborar procedimiento de atención de un incendio",
      descripccion: "Tarea que determina como realizar un procedimiento para atender un incendio"
    },
  ]

  constructor(
    private router : Router,
    private alert : AlertService
  ) { }

  ngOnInit(): void {
  }

  createPermission(){
    this.router.navigate(['/capacitaciones/libro-tareas-posición-add']);
  }

  editPermission(){
    this.router.navigate(['/capacitaciones/libro-tareas-posición-details']);
  }

  eliminarPermisos(){
    this.alert.questionAlertConfirm(
      '¿Está seguro que desea eliminar?',
      '',
      'Si, Eliminar',
      TYPE_ALERT.QUESTION
    ).then(
      (result) => {
        if (result.value) {
          this.router.navigate(['/capacitaciones/libro-tareas-posición']).then(r => r)
        } else {
  
        }
      }
    );
  }

}
