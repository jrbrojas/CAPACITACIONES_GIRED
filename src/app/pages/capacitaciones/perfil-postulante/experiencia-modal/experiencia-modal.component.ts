import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-experiencia-modal',
  templateUrl: './experiencia-modal.component.html',
  styleUrls: ['./experiencia-modal.component.scss']
})
export class ExperienciaModalComponent implements OnInit {

  constructor(private modalService : NgbModal) { }

  ngOnInit(): void {
  }

  closeModal(){
    this.modalService.dismissAll()
  }

  

}
