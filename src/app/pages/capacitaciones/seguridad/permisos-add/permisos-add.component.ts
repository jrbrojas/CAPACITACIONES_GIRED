import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertService } from 'src/app/shared/services/alert.service';
import { TYPE_ALERT } from 'src/app/shared/services/config';

@Component({
  selector: 'app-permisos-add',
  templateUrl: './permisos-add.component.html',
  styleUrls: ['./permisos-add.component.scss']
})
export class PermisosAddComponent implements OnInit {

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
      '¿Está seguro que desea registrar el permiso?',
      '',
      'Si, Registrar',
      TYPE_ALERT.QUESTION
    ).then(
      (result) => {
        if (result.value) {
          this.route.navigate(['/capacitaciones/seguridad/permisos']).then(r => r)
        } else {
  
        }
      }
    );
  }
  close(){
    this.route.navigate(['/capacitaciones/seguridad/permisos']);
  }

  cancelarPermiso(){
    this.route.navigate(['/capacitaciones/seguridad/permisos']).then(() => { });
  }
}
