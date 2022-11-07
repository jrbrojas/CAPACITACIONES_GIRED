import { Component, Inject, Input, OnInit } from '@angular/core';
import { AnyForUntypedForms, FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertService } from 'src/app/shared/services/alert.service';
import { TYPE_ALERT } from 'src/app/shared/services/config';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-perfiles-experiencia',
  templateUrl: './add-perfiles-experiencia.component.html',
  styleUrls: ['./add-perfiles-experiencia.component.scss']
})
export class AddPerfilesExperienciaComponent implements OnInit {

  selectActividadesEmpresa: any;
  selectAreasPuesto: any;
  selectSubAreasPuesto: any;
  selectPais: any;

  constructor(
    private modalService : NgbModal,
    public dialog: MatDialog,
    private fb: FormBuilder,
    private alert: AlertService
  ) {
  }

  ngOnInit(): void {
  }

  mostrarDatos(){

    this.selectActividadesEmpresa = [
      {
        id: 1,
        nombre: 'Servicios Generales'
      },
      {
        id: 2,
        nombre: 'Gestión de Riegos de Desastres'
      }
    ]

    this.selectAreasPuesto = [
      {
        id: 1,
        nombre: 'Tecnologías de Infomación'
      },
      {
        id: 2,
        nombre: 'Gestión de Riesgo de Desastres '
      },
      {
        id: 3,
        nombre: 'Administración y Finanzas'
      },
      {
        id: 4,
        nombre: 'Logística'
      },
      {
        id: 5,
        nombre: 'Secretaría General'
      }
    ]

    this.selectSubAreasPuesto = [
      {
        id: 1,
        nombre: 'Tecnologías de Infomación'
      },
      {
        id: 2,
        nombre: 'Gestión de Riesgo de Desastres '
      },
      {
        id: 3,
        nombre: 'Administración y Finanzas'
      },
      {
        id: 4,
        nombre: 'Logística'
      },
      {
        id: 5,
        nombre: 'Secretaría General'
      }
    ]
    this.selectPais = [
      {
        id: 1,
        nombre: 'España'
      },
      {
        id: 2,
        nombre: 'Perú'
      }
    ]


  }

  closeModal(){
    this.modalService.dismissAll()
  }

  guardarExperiencia() {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Guardado correctamente',
      showConfirmButton: false,
      timer: 1500
    });
    this.closeModal();
  }

}
