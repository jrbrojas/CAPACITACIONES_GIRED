import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';

export class FichaPerfil {
  numId : number = 0
  InfoFormacion : Formacion[] = []
}

export class Formacion {
  numId : number = 0;
  txtTipoFormacion : string = ''
  detalleFormacion : string = ''
}

@Component({
  selector: 'app-add-experiencialaboral',
  templateUrl: './add-experiencialaboral.component.html',
  styleUrls: ['./add-experiencialaboral.component.scss']
})
export class AddExperiencialaboralComponent implements OnInit {

  fichaPerfil : FichaPerfil = new FichaPerfil();

  constructor(
    private modalService : NgbModal
  ) { }

  ngOnInit(): void {
  }

  closeModal(){
    this.modalService.dismissAll()
  }

  addSkillFormacion(){
    this.fichaPerfil.InfoFormacion.push({
      numId : 0,
      txtTipoFormacion : '',
      detalleFormacion : ''
    })
  }

  guardarExperiencia() {
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
