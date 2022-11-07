import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { TYPE_ALERT } from '../../../../../shared/services/config';
import { AlertService } from '../../../../../shared/services/alert.service';

@Component({
  selector: 'app-crear-curso',
  templateUrl: './crear-curso.component.html',
  styleUrls: ['./crear-curso.component.scss']
})
export class CrearCursoComponent implements OnInit {

  constructor(
    private alert: AlertService,
    private ModalService : NgbModal
  ) { }

  ngOnInit(): void {
  }

  closeModal(){
    this.ModalService.dismissAll()
  }
  
  guardar() {
    
    this.alert
      .questionAlertConfirm(
        '¿Está seguro que desea registrar el curso?',
        '',
        'Si, Registrar',
        TYPE_ALERT.QUESTION
      )
      .then((result) => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Guardado correctamente',
          showConfirmButton: false,
          timer: 1500
        })
        this.closeModal();
      });
  }

}
