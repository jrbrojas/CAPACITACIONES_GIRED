import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/shared/services/alert.service';
import { TYPE_ALERT } from 'src/app/shared/services/config';

@Component({
  selector: 'app-usuarios-list',
  templateUrl: './usuarios-list.component.html',
  styleUrls: ['./usuarios-list.component.scss']
})
export class UsuariosListComponent implements OnInit {

  constructor(
    public router : Router,
    private alert : AlertService
  ) { }

  usuarios: any = [
    {
      id: 1,
      usuario: 'JRojas',
      nombre: 'Jose Rojas',
      perfil: 'Administrador del Sistema',
      estado: 'habilitado'
    },
    {
      id: 2,
      usuario: 'PGarci123',
      nombre: 'Pedro Garcia',
      perfil: 'Supervisor',
      estado: 'habilitado'
    },
    {
      id: 3,
      usuario: 'MarianaGP',
      nombre: 'Mariana Garcia',
      perfil: 'Administrador USAR',
      estado: 'habilitado'
    },
    {
      id: 4,
      usuario: 'RodrigoC',
      nombre: 'Rodrigo Cardenas',
      perfil: 'Administrado',
      estado: 'habilitado'
    }
  ]

  ngOnInit(): void {
  }

  add(){
    this.router.navigate(['/capacitaciones/seguridad/usuarios-add']).then(() => { });
  }

  edit(id: number){
    this.router.navigate(['/capacitaciones/seguridad/usuarios-edit/', id]).then(() => { });;
  }

  eliminarUsuario(){
    this.alert.questionAlertConfirm(
      '¿Está seguro que desea eliminar el usuario?',
      '',
      'Si, Eliminar',
      TYPE_ALERT.QUESTION
    ).then(
      (result) => {
        if (result.value) {
          this.alert.toastSuccess(`Usuario eliminado`);
        } else {

        }
      }
    );
  }

}
