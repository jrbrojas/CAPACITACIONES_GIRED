import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertService } from 'src/app/shared/services/alert.service';
import { TYPE_ALERT } from 'src/app/shared/services/config';

@Component({
  selector: 'app-crear-categoria',
  templateUrl: './crear-categoria.component.html',
  styleUrls: ['./crear-categoria.component.scss']
})
export class CrearCategoriaComponent implements OnInit {

  constructor(
    private modalService : NgbModal,
    private alertService: AlertService,
  ) { }

  ngOnInit(): void {
  }

  closeModal(){
    this.modalService.dismissAll()
  }

  save() {
    this.alertService.questionAlertConfirm(
      '¿Est&aacute;s seguro de crear la categoria?',
      '',
      'S&iacute;, Grear',
      TYPE_ALERT.QUESTION
    ).then(
      (result) => {
        if (result.value) {
          this.alertService.toastSuccess('Categoria creada Correctamente');
          this.closeModal();
        } else {

        }
      }
    );
  }
}
