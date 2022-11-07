import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { StyleReference } from 'pdfmake/interfaces';
import { AlertService } from 'src/app/shared/services/alert.service';
import { TYPE_ALERT } from '../../../../shared/services/config';
import { AcreditacionDetailsComponent } from '../acreditacion-details/acreditacion-details.component';
import { AcreditacionNevoComponent } from '../acreditacion-nuevo/acreditacion-nuevo.component';

@Component({
  selector: 'app-acreditacion-list',
  templateUrl: './acreditacion-list.component.html',
  styleUrls: ['./acreditacion-list.component.scss']
})
export class AcreditacionListComponent implements OnInit {
  public value : string = ""
  public solicitudUser: any[];
  constructor(public alertService : AlertService, public router : Router,
    public modalservice : NgbModal) { }

  ngOnInit(): void {
    this.solicitudUser = [
      { "id": 1, "codSolicitud": "001", "pasicion": "Comandante de Incidente Tipo 3", "nombresApellidos": "David Gamarra", "fechaSolicitud": "01-10-2022", "estado": 4, "observacion": null },
      { "id": 2, "codSolicitud": "002", "pasicion": "Comandante de Incidente Tipo 2", "nombresApellidos": "Lucho Saavedra", "fechaSolicitud": "10-10-2022", "estado": 2, "observacion": "Aprobado" },
      { "id": 3, "codSolicitud": "003", "pasicion": "Miembro de Brigada Helitransportada", "nombresApellidos": "Ada Diaz", "fechaSolicitud": "05-10-2022", "estado": 4, "observacion": null},
      { "id": 4, "codSolicitud": "004", "pasicion": "Comandante de Incidente Tipo 5", "nombresApellidos": "Alex Davida", "fechaSolicitud": "05-11-2022", "estado": 1, "observacion": null},
      { "id": 5, "codSolicitud": "005", "pasicion": "Oficial de Enlace", "nombresApellidos": "Daniel Gomez", "fechaSolicitud": "12-10-2022", "estado": 2, "observacion": null},
      { "id": 6, "codSolicitud": "006", "pasicion": "Comandante de Incidente Tipo 3", "nombresApellidos": "Lolo Valladolid", "fechaSolicitud": "05-10-2022", "estado": 4, "observacion": null},
      { "id": 7, "codSolicitud": "007", "pasicion": "Oficial de Información Pública", "nombresApellidos": "Sonia Mendez", "fechaSolicitud": "05-10-2021", "estado": 1, "observacion": null},
    ]
  }

  create(){
    const modalref = this.modalservice.open(AcreditacionNevoComponent, {
      size: 'xl',
      ariaLabelledBy: 'modal',
      centered: true,
      windowClass: 'modal',
      backdrop: 'static'
    });   
    modalref.result.then((res) => {
      //this.ListCodeOfEmergencies();
    }, (reason) => {
      //this.ListCodeOfEmergencies();
    })
  }

  detailSolicitudUsuario(){
    const modalref = this.modalservice.open(AcreditacionDetailsComponent, {
      size: 'xl',
      ariaLabelledBy: 'modal',
      centered: true,
      windowClass: 'modal',
      backdrop: 'static'
    });   
    modalref.result.then((res) => {
      //this.ListCodeOfEmergencies();
    }, (reason) => {
      //this.ListCodeOfEmergencies();
    })
    //this.router.navigate(['/capacitaciones/acreditacion/details']).then(() => { });
  }

  eliminarSolicitur(id: any) {
    this.alertService.questionAlertConfirm(
      '¿Est&aacute;s seguro de eliminar el registro creaci&oacute;n?',
      '',
      'S&iacute;, Aprobar',
      TYPE_ALERT.QUESTION
    ).then(
      (result) => {
        if (result.value) {
          let lista = []
          this.solicitudUser.map((x:any)=>{
            if(x.id != id){
              lista.push(x)             
            }
          })
          this.solicitudUser = lista
          this.alertService.toastSuccess('Registro de  Usuario eliminado Correctamente');
        } 
      }
    );
  }

  AprobarSolicitud(id: number) {
    console.log("id",this.solicitudUser);
    
    this.alertService.questionAlertConfirm(
      '¿Est&aacute;s seguro de aprobar el registro de creaci&oacute;n de usuario?',
      '',
      'S&iacute;, Aprobar',
      TYPE_ALERT.QUESTION
    ).then(
      (result) => {
        if (result.value) {
          this.solicitudUser.map((x:any)=>{
            if(x.id == id){
              x.estado = 2
              console.log(x);
              
            }
          })
          this.alertService.toastSuccess('Registro de Aprobado Correctamente');
        } 
      }
    );
  }

  EnviarSolicitud(id: number) {
    console.log("id",this.solicitudUser);
    
    this.alertService.questionAlertConfirm(
      '¿Est&aacute;s seguro de aprobar el registro de creaci&oacute;n de usuario?',
      '',
      'S&iacute;, Aprobar',
      TYPE_ALERT.QUESTION
    ).then(
      (result) => {
        if (result.value) {
          this.solicitudUser.map((x:any)=>{
            if(x.id == id){
              x.estado = 1
              console.log(x);
              
            }
          })
          this.alertService.toastSuccess('Registro de Aprobado Correctamente');
        } 
      }
    );
  }

}
