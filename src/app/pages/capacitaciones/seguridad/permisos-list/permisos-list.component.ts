import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/shared/services/alert.service';
import { TYPE_ALERT } from 'src/app/shared/services/config';

@Component({
  selector: 'app-permisos-list',
  templateUrl: './permisos-list.component.html',
  styleUrls: ['./permisos-list.component.scss']
})
export class PermisosListComponent implements OnInit {

  public data : any = [
    {
      id: 1,
      nombre: "Editar",
      descripccion: "Permite editar campos"
    },
    {
      id: 2,
      nombre: "Crear",
      descripccion: "Permite crear campos"
    },
    {
      id: 3,
      nombre: "Eliminar",
      descripccion: "Permite eliminar campos"
    },
    {
      id: 4,
      nombre: "Ver",
      descripccion: "Permite ver campos"
    },
    {
      id: 5,
      nombre: "Comentar",
      descripccion: "Permite comentar campos"
    },
  ]

  constructor(
    private router : Router,
    private alert : AlertService
  ) { }

  ngOnInit(): void {
  }

  createPermission(){
    this.router.navigate(['/capacitaciones/seguridad/permisos-add']);
  }

  editPermission(){
    this.router.navigate(['/capacitaciones/seguridad/permisos-edit']);
  }

  eliminarPermisos(){
    this.alert.questionAlertConfirm(
      '¿Está seguro que desea eliminar el permiso?',
      '',
      'Si, Eliminar',
      TYPE_ALERT.QUESTION
    ).then(
      (result) => {
        if (result.value) {
          this.router.navigate(['/capacitaciones/seguridad/permisos']).then(r => r)
        } else {
  
        }
      }
    );
  }

}
