import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-idioma',
  templateUrl: './add-idioma.component.html',
  styleUrls: ['./add-idioma.component.scss']
})
export class AddIdiomaComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  closeModal() {
    this.modalService.dismissAll()
  }

  guardar() {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Guardado correctamente',
      showConfirmButton: false,
      timer: 1500
    })
    this.closeModal();
  }

}
