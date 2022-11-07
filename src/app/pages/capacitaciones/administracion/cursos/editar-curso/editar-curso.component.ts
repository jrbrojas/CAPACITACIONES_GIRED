import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-editar-curso',
  templateUrl: './editar-curso.component.html',
  styleUrls: ['./editar-curso.component.scss']
})
export class EditarCursoComponent implements OnInit {

  constructor(
    private modalService : NgbModal
  ) { }

  ngOnInit(): void {
  }

  closeModal(){
    this.modalService.dismissAll()
  }

}
