import { Component, OnInit } from '@angular/core';
import { AlertService } from '../../../../shared/services/alert.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TYPE_ALERT } from '../../../../shared/services/config';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cambiar-password',
  templateUrl: './cambiar-password.component.html',
  styleUrls: ['./cambiar-password.component.scss']
})
export class CambiarPasswordComponent implements OnInit {

  vcPasswordActual: string = "";
  vcPasswordNuevo: string = "";
  vcPasswordNuevoValidar: string = "";

  constructor(
    private alert: AlertService
    ) { }

  ngOnInit(): void {
    this.onLimpiar();
  }

  onValida(): boolean {
    return (this.vcPasswordNuevo != this.vcPasswordNuevoValidar);
  }

  onValidaVacio(): boolean {
    return (this.vcPasswordNuevo.length == 0 || this.vcPasswordNuevoValidar.length == 0 || this.vcPasswordActual.length == 0);
  }

  onSave() {
    this.alert
    .questionAlertConfirm(
      '¿Está seguro que desea cambiar la contraseña?',
      '',
      'Si, cambiar',
      TYPE_ALERT.QUESTION
    )
    .then((result) => {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Contraseña cambiada correctamente',
        showConfirmButton: false,
        timer: 1500
      })
      this.onLimpiar();
    });
  }

  onLimpiar() {
    this.vcPasswordNuevo = "";
    this.vcPasswordNuevoValidar = "";
    this.vcPasswordActual = "";
  }
}
