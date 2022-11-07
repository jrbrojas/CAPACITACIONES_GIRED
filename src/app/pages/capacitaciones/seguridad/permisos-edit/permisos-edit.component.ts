import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertService } from 'src/app/shared/services/alert.service';
import { TYPE_ALERT } from 'src/app/shared/services/config';

@Component({
  selector: 'app-permisos-edit',
  templateUrl: './permisos-edit.component.html',
  styleUrls: ['./permisos-edit.component.scss']
})
export class PermisosEditComponent implements OnInit {
  public valor: any = {
      id: 1,
      nombre: "Editar",
      descripcion: "Permite editar campos"
    
  }

  constructor(
    private alert : AlertService,
    private route : Router,
  ) { }

  ngOnInit(): void {
  }

  guardarPermiso(){
    this.alert.questionAlertConfirm(
      '¿Está seguro que desea editar el permiso?',
      '',
      'Si, Editar',
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
