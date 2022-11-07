import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertService } from 'src/app/shared/services/alert.service';
import { TYPE_ALERT } from 'src/app/shared/services/config';

@Component({
  selector: 'app-editar-categoria',
  templateUrl: './editar-categoria.component.html',
  styleUrls: ['./editar-categoria.component.scss']
})
export class EditarCategoriaComponent implements OnInit {

  constructor(
    private modalService : NgbModal,
    private alertService: AlertService,
  ) { }

  ngOnInit(): void {
  }

  closeModal(){
    this.modalService.dismissAll()
  }

  updated() {
    this.alertService.questionAlertConfirm(
      '¿Est&aacute;s seguro de actualizar la categoria?',
      '',
      'S&iacute;, Actualizar',
      TYPE_ALERT.QUESTION
    ).then(
      (result) => {
        if (result.value) {
          this.alertService.toastSuccess('Categoria actualizado Correctamente');
          this.closeModal();
        } else {

        }
      }
    );
  }

}
