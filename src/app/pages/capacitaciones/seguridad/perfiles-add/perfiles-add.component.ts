import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/shared/services/alert.service';
import { TYPE_ALERT } from 'src/app/shared/services/config';

@Component({
  selector: 'app-perfiles-add',
  templateUrl: './perfiles-add.component.html',
  styleUrls: ['./perfiles-add.component.scss'],
})
export class PerfilesAddComponent implements OnInit {
  constructor(private alert: AlertService, private route: Router) {}

  ngOnInit(): void {}

  guardarPerfil() {
    this.alert
      .questionAlertConfirm(
        '¿Está seguro que desea registrar el perfil?',
        '',
        'Si, Registrar',
        TYPE_ALERT.QUESTION
      )
      .then((result) => {
        console.log(result)
        if (result.value) {
          this.route
          .navigateByUrl('/capacitaciones/seguridad/perfiles')
          .then((r) => r);
        } else {
          this.route
          .navigateByUrl('/capacitaciones/seguridad/perfiles')
          .then((r) => r);
        }
      });
  }

  cancelar() {
    this.route
    .navigateByUrl('/capacitaciones/seguridad/perfiles')
    .then((r) => r);
  }
}
