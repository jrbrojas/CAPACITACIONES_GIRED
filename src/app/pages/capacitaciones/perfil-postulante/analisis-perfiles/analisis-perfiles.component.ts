import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddPerfilesComponent } from '../add-perfiles/add-perfiles.component';

export interface administrado {
  dni : string;
  apellidosNombres: string;
  asignacion : string;
  departamento: string;
  provincia: string;
  distrito: string;
  nivelExperiencia: string;
  estado : string;
}

@Component({
  selector: 'app-analisis-perfiles',
  templateUrl: './analisis-perfiles.component.html',
  styleUrls: ['./analisis-perfiles.component.scss']
})
export class AnalisisPerfilesComponent implements OnInit {

  public boolOp = true
  public arrAdministrados : administrado[] = []

  arrCursos: any [] = [
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

  ]

  arrAsignacion: any[] = [
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

  constructor(
    private modalService : NgbModal,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.arrAdministrados.push({
      dni : '74239485',
      apellidosNombres : 'Olivera Perez Manuel',
      asignacion : 'Lider de equipo',
      departamento: 'Lima',
      provincia: 'Lima',
      distrito: 'Lince',
      nivelExperiencia: 'Media',
      estado : 'Activo'
    },
    {
      dni : '12345678',
      apellidosNombres : 'Caballero Ramos Lucas',
      asignacion : 'Lider de equipo designado',
      departamento: 'Junin',
      provincia: 'Satipo',
      distrito: 'Pangoa',
      nivelExperiencia: 'Alta',
      estado : 'Activo'
    },
    {
      dni : '74239485',
      apellidosNombres : 'Paredes Sanchez María',
      asignacion : 'Official de planificacion',
      departamento: 'Lima',
      provincia: 'Lima',
      distrito: 'San Isidro',
      nivelExperiencia: 'Baja',
      estado : 'Activo'
    })
  }

  verPerfil(){
    console.log('xd')
    const modalRef = this.dialog.open(AddPerfilesComponent, {
      minHeight: '90%',
      data: {idUsuario: 1},
    })

    modalRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });

  }

  limpiarFecha(){

  }
  filtrar(){
    this.boolOp = false;
  }

}
