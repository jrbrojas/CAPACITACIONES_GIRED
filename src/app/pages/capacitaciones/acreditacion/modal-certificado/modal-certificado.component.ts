import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertService } from 'src/app/shared/services/alert.service';
import { TYPE_ALERT } from 'src/app/shared/services/config';

@Component({
  selector: 'app-modal-certificado',
  templateUrl: './modal-certificado.component.html',
  styleUrls: ['./modal-certificado.component.scss']
})
export class ModalCertificadoComponent implements OnInit {

  constructor(private alertService: AlertService, private modalService : NgbModal) { }

  ngOnInit(): void {
  }

  emitirCertificado() {
    this.alertService.questionAlertConfirm(
      '¿Estas seguro de emitir el certificado?',
      '',
      'Si, Generar',
      TYPE_ALERT.QUESTION
    ).then(
      (result) => {
        if (result.value) {
          this.alertService.toastSuccess('Certificado emitido Correctamente');
          window.open('assets/images/CERTIFICADO.pdf', '_blank')
          this.closeModal();
        } else {

        }
      }
    );
  }

  closeModal(){
    this.modalService.dismissAll()
  }

}
