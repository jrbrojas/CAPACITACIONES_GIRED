import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { FormGroup, FormBuilder } from '@angular/forms';

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
  selector: 'app-add-formacionacademica',
  templateUrl: './add-formacionacademica.component.html',
  styleUrls: ['./add-formacionacademica.component.scss']
})
export class AddFormacionacademicaComponent implements OnInit {

  selectTipoFormacion = [
    {
      id: 1,
      nombre: 'Superior Tecnico'
    },
    {
      id: 2,
      nombre: 'Universitario'
    },
    {
      id: 3,
      nombre: 'Posgrado'
    },
    {
      id: 4,
      nombre: 'Curso'
    },
    {
      id: 5,
      nombre: 'Cursos USAR'
    },
    {
      id: 4,
      nombre: 'Master'
    },
    {
      id: 5,
      nombre: 'Doctorado'
    }
  ];


  selectCursos = [
    {
      id: 1,
      nombre: 'Curso Básico del Sistema de Comando de Incidentes',
    },
    {
      id: 2,
      nombre: 'Primera Respuesta a Incidentes con Materiales Peligrosos',
    },
    {
      id: 3,
      nombre: 'Rescate con Cuerdas',
    },
    {
      id: 4,
      nombre: 'Curso de Primeros Auxilios y Atención PreHospitalaria',
    },
    {
      id: 5,
      nombre: 'Curso de rescate es estructuras colapsadas en el Nivel Liviano  ',
    },
    {
      id: 6,
      nombre: 'Curso de rescate en espacios confinados',
    },
    {
      id: 7,
      nombre: 'Curso de Instructores',
    },
    {
      id: 8,
      nombre: 'Curso de búsqueda canina',
    },
  ];

  selectPais = [
    {
      id: 1,
      nombre: 'España'
    },
    {
      id: 2,
      nombre: 'Perú'
    }
  ]

  selectAreasEstudio = [
    {
      id: 1,
      nombre: 'Apago de incendios'
    },
    {
      id: 2,
      nombre: 'Desactivacion de explosivos'
    }
  ]

  selectEstados = [
    {
      id: 1,
      nombre: 'Completo'
    },
    {
      id: 2,
      nombre: 'En curso'
    },
    {
      id: 3,
      nombre: 'Trunco'
    }
  ]

  public form: FormGroup;
  fichaPerfil : FichaPerfil = new FichaPerfil();

  constructor(
    private modalService : NgbModal,
    private fb: FormBuilder
  ) { 
    this.form = this.fb.group({
      tipoFormacion: [''],
      curso: [''],
      pais: [''],
      areaEstudio: [''],
      institucion: [''],
      estado: [''],
      fechaInicio: [''],
      fechaFin: [''],
      aptitudFisica: [''],
    })
  }

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
