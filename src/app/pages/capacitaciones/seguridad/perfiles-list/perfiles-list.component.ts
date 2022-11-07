import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/shared/services/alert.service';
import { TYPE_ALERT } from 'src/app/shared/services/config';

@Component({
  selector: 'app-perfiles-list',
  templateUrl: './perfiles-list.component.html',
  styleUrls: ['./perfiles-list.component.scss']
})
export class PerfilesListComponent implements OnInit {

  public data: any = [
    /* {
      id: 1,
      perfil: "Administrador USAR",
      descripcion: "Este perfil cuenta con todos los accesos y permisos permitidos para administrar informacón del personal GIRED",
      permisos: "Crear, Editar, Eliminar, Ver",
      habilitado: "Si"
    },
    {
      id: 2,
      perfil: "Administrador Combatiente de Fuego",
      descripcion: "Este perfil cuenta con todos los accesos y permisos permitidos para administrar informacón del personal Combatientes del Fuego",
      permisos: "Crear, Editar, Eliminar, Ver",
      habilitado: "Si"
    }, */
    {
      id: 3,
      perfil: "Administrador USAR",
      descripcion: "Este perfil cuenta con todos los accesos y permisos permitidos para administrar informacón del personal USAR",
      permisos: "Crear, Editar, Eliminar, Ver",
      habilitado: "Si"
    },
    {
      id: 4,
      perfil: "Administrado",
      descripcion: "Este perfil cuenta con todos los accesos y permisos permitidos como administrado",
      permisos: "Crear, Editar, Eliminar, Ver",
      habilitado: "Si"
    },
    {
      id: 5,
      perfil: "Supervisor",
      descripcion: "Este perfil cuenta con todos los accesos y permisos permitidos para validar y aprobar la información en general",
      permisos: "Crear, Editar, Eliminar, Ver",
      habilitado: "Si"
    },
    {
      id: 6,
      perfil: "Administrador del Sistema",
      descripcion: "Este perfil es para administrar el sistema en general",
      permisos: "Crear, Editar, Eliminar, Ver",
      habilitado: "Si"
    }
  ]

  constructor(
    public router : Router,
    private alert : AlertService
  ) { }

  ngOnInit(): void {
  }

  createPermission(){
    this.router.navigate(['/capacitaciones/seguridad/perfiles-add']);
  }

  eliminarPerfil(){
    this.alert.questionAlertConfirm(
      '¿Está seguro que desea eliminar el perfil?',
      '',
      'Si, Eliminar',
      TYPE_ALERT.QUESTION
    ).then(
      (result) => {
        if (result.value) {
          this.router.navigate(['/capacitaciones/seguridad/perfiles']).then(r => r)
        } else {

        }
      }
    );
  }

  editar() {
    this.router.navigate(['/capacitaciones/seguridad/perfiles-editar']).then(r => r)
  }

}
