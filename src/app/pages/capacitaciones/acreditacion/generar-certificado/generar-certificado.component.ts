import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalCertificadoComponent } from '../modal-certificado/modal-certificado.component';

@Component({
  selector: 'app-generar-certificado',
  templateUrl: './generar-certificado.component.html',
  styleUrls: ['./generar-certificado.component.scss']
})
export class GenerarCertificadoComponent implements OnInit {

  constructor(private modalService : NgbModal) { }

  ngOnInit(): void {
  }

  generarCertificado() {
    this.modalService.open(ModalCertificadoComponent, {
      size: 'lg',
      ariaLabelledBy: 'modal',
      centered: true,
      windowClass: 'modal',
      backdrop: 'static'
    })
  }
}
