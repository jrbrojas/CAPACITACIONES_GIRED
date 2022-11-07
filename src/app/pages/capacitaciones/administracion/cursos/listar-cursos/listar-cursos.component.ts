import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertService } from 'src/app/shared/services/alert.service';
import { TYPE_ALERT } from 'src/app/shared/services/config';
import { CrearCursoComponent } from '../crear-curso/crear-curso.component';
import { EditarCursoComponent } from '../editar-curso/editar-curso.component';

export interface Curso {
  nombre : string;  
  nivel : string;
  descripcion : string;
  codigo : string;
}

@Component({
  selector: 'app-listar-cursos',
  templateUrl: './listar-cursos.component.html',
  styleUrls: ['./listar-cursos.component.scss']
})
export class ListarCursosComponent implements OnInit {


  public arrCursos : Array<Curso> = [];

  constructor(
    private modalService : NgbModal,
    private alertService : AlertService
  ) { }

  ngOnInit(): void {
    this.arrCursos.push(
      {        
        nivel: 'Básico',
        nombre : 'Curso Básico del Sistema de Comando de Incidentes',
        descripcion : 'Este curso es para reforzar el liderazgos frente a peligros de incendios forestales',
        codigo : 'D-311',
      },
      {        
        nivel: 'Básico',
        nombre : 'Primera Respuesta a Incidentes con Materiales Peligrosos',
        descripcion : 'Este curso es para reforzar el liderazgos frente a peligros de incendios forestales',
        codigo : 'P-101',
      },
      {        
        nivel: 'Intermedio',
        nombre : 'Rescate con Cuerdas',
        descripcion : 'Este curso es para reforzar el liderazgos frente a peligros de incendios forestales',
        codigo : 'FI-110',
      },
      {        
        nivel: 'Intermedio',
        nombre : 'Curso de Primeros Auxilios y Atención PreHospitalaria',
        descripcion : 'Este curso es para reforzar el liderazgos frente a peligros de incendios forestales',
        codigo : 'FI-210',
      },
      {        
        nivel: 'Básico',
        nombre : 'Curso de rescate es estructuras colapsadas en el Nivel Liviano  ',
        descripcion : 'Este curso es para reforzar el liderazgos frente a peligros de incendios forestales',
        codigo : 'L-180',
      },
      {        
        nivel: 'Básico',
        nombre : 'Curso de rescate en espacios confinados',
        descripcion : 'Este curso es para reforzar el liderazgos frente a peligros de incendios forestales',
        codigo : 'L-280',
      },
      {        
        nivel: 'Básico',
        nombre : 'Curso de Instructores',
        descripcion : 'Este curso es para reforzar el liderazgos frente a peligros de incendios forestales',
        codigo : 'M-410',
      },
      {        
        nivel: 'Básico',
        nombre : 'Curso de búsqueda canina',
        descripcion : 'Este curso es para reforzar el liderazgos frente a peligros de incendios forestales',
        codigo : 'M-410',
      },
      
    )
  }

  registrarCurso(){
    this.modalService.open(CrearCursoComponent, {
      
      size: 'xl',
      ariaLabelledBy: 'modal',
      centered: true,
      windowClass: 'modal',
      backdrop: 'static'
    });
  }

  eliminarCurso(){
    this.alertService.questionAlertConfirm(
      '¿Está seguro que desea eliminar el curso?',
      '',
      'Si, Eliminar',
      TYPE_ALERT.QUESTION
    ).then(
      (result) => {
        if (result.value) {
       
        } else {
  
        }
      }
    );
  }
  

  editarVerCurso(){
    this.modalService.open(EditarCursoComponent, {
      size : 'xl',
      ariaLabelledBy : 'modal',
      centered : true,
      windowClass : 'modal',
      backdrop : 'static'
    })
  }

}
