import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertService } from 'src/app/shared/services/alert.service';
import { TYPE_ALERT } from 'src/app/shared/services/config';
import { CrearCategoriaComponent } from '../crear-categoria/crear-categoria.component';
import { EditarCategoriaComponent } from '../editar-categoria/editar-categoria.component';

export interface Categoria {
  acronimo: string;
  nombre: string;
  nivel: string;
  descripcion: string;
}

@Component({
  selector: 'app-listar-categoria',
  templateUrl: './listar-categoria.component.html',
  styleUrls: ['./listar-categoria.component.scss']
})
export class ListarCategoriaComponent implements OnInit {

  public arrCategorias: Array<Categoria> = []

  constructor(
    private modalService: NgbModal,
    private alertService: AlertService
  ) { }

  ngOnInit(): void {
    this.arrCategorias.push(
      {
        acronimo: 'C001',
        nombre: 'Gestión',
        nivel : 'Liviano',
        descripcion: 'Descripcion de Gestión'
      },
      {
        acronimo: 'C002',
        nombre: 'Búsqueda y Rescate',
        nivel : 'Liviano',
        descripcion: 'Descripcion de Búsqueda y Rescate'
      },
      {
        acronimo: 'C003',
        nombre: 'Médica',
        nivel : 'Liviano',
        descripcion: 'Descripcion de Médica'
      },
      {
        acronimo: 'C004',
        nombre: 'Logística',
        nivel : 'Liviano',
        descripcion: 'Descripcion de Logística'
      },
      {
        acronimo: 'C005',
        nombre: 'Gestión',
        nivel : 'Mediano',
        descripcion: 'Descripcion de Gestión'
      },
      {
        acronimo: 'C006',
        nombre: 'Búsqueda',
        nivel : 'Mediano',
        descripcion: 'Descripcion de Búsqueda '
      },
      {
        acronimo: 'C007',
        nombre: 'Rescate',
        nivel : 'Mediano',
        descripcion: 'Descripcion de Rescate'
      },
      {
        acronimo: 'C008',
        nombre: 'Médica',
        nivel : 'Mediano',
        descripcion: 'Descripcion de Médica'
      },
      {
        acronimo: 'C009',
        nombre: 'Logística',
        nivel : 'Mediano',
        descripcion: 'Descripcion de Logística'
      },
    )
  }

  registrarCategoria() {
    this.modalService.open(CrearCategoriaComponent, {
      size: 'xl',
      ariaLabelledBy: 'modal',
      centered: true,
      windowClass: 'modal',
      backdrop: 'static'
    })
  }

  verEditarCategoria() {
    this.modalService.open(EditarCategoriaComponent, {
      size: 'xl',
      ariaLabelledBy: 'modal',
      centered: true,
      windowClass: 'modal',
      backdrop: 'static'
    })
  }

  eliminarCategoria() {
    this.alertService.questionAlertConfirm(
      '¿Está seguro que desea eliminar la categoria?',
      '',
      'Si, Eliminar',
      TYPE_ALERT.QUESTION
    ).then(
      (result) => {
        if (result.value) {
          this.alertService.toastSuccess('Categoria Eliminado Correctamente');
        } else {

        }
      }
    );
  }

}
