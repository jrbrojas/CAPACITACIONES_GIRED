import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';

export interface Curso {
  nombre : string;
  acronimo : string;
  completed : boolean;
  color : ThemePalette;
}


export interface LineaTematica {
  nombre : string;
  completed : boolean;
  color : ThemePalette;
  cursos? : Array<Curso>
}

@Component({
  selector: 'app-editar-posicion',
  templateUrl: './editar-posicion.component.html',
  styleUrls: ['./editar-posicion.component.scss']
})
export class EditarPosicionComponent implements OnInit {

  public allComplete : boolean = false;

  idCategria: number = 2;
  idCalificado: number = 1;
  idExpriencia: number = 1;
  idLTP: number = 1;
  
  arrExperienciaSelect: any [] = [
    {
      id: 1,
      nombre: 'Alta'
    },
    {
      id: 2,
      nombre: 'Media'
    },
    {
      id: 3,
      nombre: 'Baja'
    }
  ];

  arrLTPSelect: any [] = [
    {
      id: 1,
      nombre: 'LTP 1'
    },
    {
      id: 2,
      nombre: 'LTP 2'
    },
    {
      id: 3,
      nombre: 'LTP 3'
    },
    {
      id: 4,
      nombre: 'LTP 4'
    },
    {
      id: 5,
      nombre: 'LTP 5'
    },
    {
      id: 6,
      nombre: 'LTP 6'
    }
  ];

  arrCategoria: any [] = [
      {
        id: 1,
        nombre: 'Gestión'
      },
      {
        id: 2,
        nombre: 'Búsqueda y Rescate '
      },
      {
        id: 3,
        nombre: 'Médica'
      },
      {
        id: 4,
        nombre: 'Loística'
      }
  ]

  arrCalificado: any[] = [
    {
      id: 1,
      idCategoria: 1,
      nombre: 'Lider de Equipo',
      codigo: 'CIT3'
    }, {
      id: 2,
      idCategoria: 1,
      nombre: 'Lider del equipo designado',
      codigo: 'CIT4'
    }, {
      id: 3,
      idCategoria: 1,
      nombre: 'Oficial de Planificación',
      codigo: 'CIT5'
    }, {
      id: 4,
      idCategoria: 1,
      nombre: 'Oficial de Seguridad',
      codigo: 'OFEN'
    }, {
      id: 5,
      idCategoria: 1,
      nombre: 'Lider de Tripulación',
      codigo: 'OFSE'
    }, {
      id: 6,
      idCategoria: 1,
      nombre: 'Equipo de Búsqueda y Rescate (Incluyendo Perros)',
      codigo: 'OFIP'
    }, {
      id: 7,
      idCategoria: 2,
      nombre: 'Especialista Médico y/o Médico/Paramedico/Enfermera.',
      codigo: 'JSOP'
    }, {
      id: 8,
      idCategoria: 2,
      nombre: 'Gestor del Equipo de logística',
      codigo: 'SUDI'
    }, {
      id: 9,
      idCategoria: 2,
      nombre: 'Responsable del Logística',
      codigo: 'JEFB'
    }
  ]

  arrCursos: any[] = [
    {
      nombre: 'SCI-100'
    },
    {
      nombre: 'L-180'
    },
    {
      nombre: 'CR-130'
    },
    {
      nombre: 'S-130'
    }
  ]
  
  arrAdicional: any[] = [
    {
      nombre: 'Adicional 1'
    }
  ]

  arrEsperiencia: any[] = [
    {
      nombre: 'Esperiencia 1'
    }
  ]

  arrLTP: any[] = [
    {
      nombre: 'LTP 1'
    }
  ]

  lineaTematica : LineaTematica = {
    nombre : 'Supresion',
    completed : false,
    color : 'primary',
    cursos : [
      {
        acronimo : 'S-130',
        nombre : 'Factores Humanos en el servicio de incendios forestales',
        completed : false,
        color : 'primary'
      },
      {
        acronimo : 'S-131',
        nombre : 'Combatiente forestal',
        completed : false,
        color : 'primary' 
      },
      {
        acronimo : 'S-190',
        nombre : ' Introducción al Comportamiento de Fuego',
        completed : false,
        color : 'primary'
      },
      {
        acronimo : 'S-200',
        nombre : 'Comandante de Incidente de Ataque Inicial – CI Tipo 4',
        completed : false,
        color : 'primary'
      }
    ]
  }

  constructor(
    private modalService : NgbModal
  ) { }

  ngOnInit(): void {
    this.idCategria = 2;
  }

  cursoAdd() {
    this.arrCursos.push({nombre: ''});
  }

  experienciaAdd() {
    this.arrEsperiencia.push({nombre: ''});
  }

  ltpAdd() {
    this.arrLTP.push({nombre: ''});
  }

  adicionalAdd() {
    this.arrAdicional.push({nombre: ''});
  }

  closeModal(){
    this.modalService.dismissAll()
  }

  updateAllComplete(){
    this.allComplete = this.lineaTematica.cursos != null && this.lineaTematica.cursos.every(t => t.completed)
  }

  someComplete() : boolean {
    if(this.lineaTematica.cursos == null){
      return false
    }
    return this.lineaTematica.cursos.filter(t => t.completed).length > 0 && !this.allComplete
  }


  setAll(completed : boolean){
    this.allComplete = completed;
    
    if(this.lineaTematica.cursos == null){
      return;
    }

    this.lineaTematica.cursos.forEach(t => (t.completed = completed))
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
