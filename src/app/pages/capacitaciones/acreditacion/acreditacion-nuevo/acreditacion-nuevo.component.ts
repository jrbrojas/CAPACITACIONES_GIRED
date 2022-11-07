import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-acreditacion-nuevo',
  templateUrl: './acreditacion-nuevo.component.html',
  styleUrls: []
})
export class AcreditacionNevoComponent implements OnInit {

  arrCalificado: any[] = [
    {
      id: 1,
      idCategoria: 1,
      nombre: 'Comandante de Incidente Tipo 3',
      codigo: 'CIT3',
      cursos: 'CR-130, S-131',
      adicional: 'S-211, S-212, S-219',
      experiencia: 3,
      aptitud: 'Leve',
      ltp: 3,
      califica: 'Si',
      estado : '1'
    }, {
      id: 2,
      idCategoria: 1,
      nombre: 'Comandante de Incidente Tipo 4',
      codigo: 'CIT4',
      cursos: 'CR-130, S-131',
      adicional: 'S-211, S-212, S-219',
      experiencia: 3,
      aptitud: 'Leve',
      ltp: 3,
      califica: 'Si',
      estado : '1'
    }, {
      id: 3,
      idCategoria: 1,
      nombre: 'Comandante de Incidente Tipo 5',
      codigo: 'CIT5',
      cursos: 'CR-130, S-131',
      adicional: 'S-211, S-212, S-219',
      experiencia: 3,
      aptitud: 'Leve',
      ltp: 3,
      califica: 'No',
      estado : '1'
    }, {
      id: 4,
      idCategoria: 1,
      nombre: 'Oficial de Enlace',
      codigo: 'OFEN',
      cursos: 'CR-130, S-131',
      adicional: 'S-211, S-212, S-219',
      experiencia: 3,
      aptitud: 'Leve',
      ltp: 3,
      califica: 'Si',
      estado : '1'
    }, {
      id: 5,
      idCategoria: 1,
      nombre: 'Oficial de Seguridad',
      codigo: 'OFSE',
      cursos: 'CR-130, S-131',
      adicional: 'S-211, S-212, S-219',
      experiencia: 3,
      aptitud: 'Leve',
      ltp: 3,
      califica: 'No',
      estado : '1'
    }, {
      id: 6,
      idCategoria: 1,
      nombre: 'Oficial de Información Pública',
      codigo: 'OFIP',
      cursos: 'CR-130, S-131',
      adicional: 'S-211, S-212, S-219',
      experiencia: 3,
      aptitud: 'Leve',
      ltp: 3,
      califica: 'Si',
      estado : '1'
    }, {
      id: 7,
      idCategoria: 2,
      nombre: 'Jefe de Sección de Operaciones',
      codigo: 'JSOP',
      cursos: 'CR-130, S-131',
      adicional: 'S-211, S-212, S-219',
      experiencia: 3,
      aptitud: 'Leve',
      ltp: 3,
      califica: 'Si',
      estado : '1'
    }, {
      id: 8,
      idCategoria: 2,
      nombre: 'Supervisor de División',
      codigo: 'SUDI',
      cursos: 'CR-130, S-131',
      adicional: 'S-211, S-212, S-219',
      experiencia: 3,
      aptitud: 'Leve',
      ltp: 3,
      califica: 'Si',
      estado : '1'
    }, {
      id: 9,
      idCategoria: 2,
      nombre: 'Jefe de Brigada',
      codigo: 'JEFB',
      cursos: 'CR-130, S-131',
      adicional: 'S-211, S-212, S-219',
      experiencia: 3,
      aptitud: 'Leve',
      ltp: 3,
      califica: 'No',
      estado : '1'
    }, {
      id: 10,
      idCategoria: 2,
      nombre: 'Jefe de Cuadrilla / Combatiente de Incendios Forestales Tipo 1', 
      codigo: 'JECU / CIF1',
      cursos: 'CR-130, S-131',
      adicional: 'S-211, S-212, S-219',
      experiencia: 3,
      aptitud: 'Leve',
      ltp: 3,
      califica: 'No',
      estado : '1'
    }, {
      id: 11,
      idCategoria: 2,
      nombre: 'Combatiente de Incendios Forestales Tipo 2',
      codigo: 'CIF2',
      cursos: 'CR-130, S-131',
      adicional: 'S-211, S-212, S-219',
      experiencia: 3,
      aptitud: 'Leve',
      ltp: 3,
      califica: 'No',
      estado : '1'
    }, {
      id: 12,
      idCategoria: 3,
      nombre: 'Encargado de Helibase',
      codigo: 'ENHE',
      cursos: 'CR-130, S-131',
      adicional: 'S-211, S-212, S-219',
      experiencia: 3,
      aptitud: 'Leve',
      ltp: 3,
      califica: 'Si',
      estado : '1'
    }, {
      id: 13,
      idCategoria: 3,
      nombre: 'Miembro de Brigada Helitransportada',
      codigo: 'MBHE',
      cursos: 'CR-130, S-131',
      adicional: 'S-211, S-212, S-219',
      experiencia: 3,
      aptitud: 'Leve',
      ltp: 3,
      califica: 'Si',
      estado : '1'
    }, {
      id: 14,
      idCategoria: 4,
      nombre: 'Jefe de Sección de Planificación',
      codigo: 'JSPL',
      cursos: 'CR-130, S-131',
      adicional: 'S-211, S-212, S-219',
      experiencia: 3,
      aptitud: 'Leve',
      ltp: 3,
      califica: 'Si',
      estado : '1'
    }, {
      id: 15,
      idCategoria: 5,
      nombre: 'Jefe de Sección de Logística',
      codigo: 'JSLO',
      cursos: 'CR-130, S-131',
      adicional: 'S-211, S-212, S-219',
      experiencia: 3,
      aptitud: 'Leve',
      ltp: 3,
      califica: 'No',
      estado : '1'
    }, {
      id: 16,
      idCategoria: 6,
      nombre: 'Despachador de ataque inicial',
      codigo: 'DEAI',
      cursos: 'CR-130, S-131',
      adicional: 'S-211, S-212, S-219',
      experiencia: 3,
      aptitud: 'Leve',
      ltp: 3,
      califica: 'No',
      estado : '1'
    }, {
      id: 17,
      idCategoria: 7,
      nombre: 'Miembro de Equipo de Prevención- Educación',
      codigo: 'MEPE',
      cursos: 'CR-130, S-131',
      adicional: 'S-211, S-212, S-219',
      experiencia: 3,
      aptitud: 'Leve',
      ltp: 3,
      califica: 'No',
      estado : '1'
    }, {
      id: 18,
      idCategoria: 8,
      nombre: 'Investigador de Incendios Forestales',
      codigo: 'INIF',
      cursos: 'CR-130, S-131',
      adicional: 'S-211, S-212, S-219',
      experiencia: 3,
      aptitud: 'Leve',
      ltp: 3,
      califica: 'No',
      estado : '1'
    }
  ]

  constructor(public activemodal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  closeModal() {
    this.activemodal.close();
  }

  add(nombre: string) {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Asignado correctamente a: ' + nombre,
      showConfirmButton: false,
      timer: 1500
    })
    this.closeModal();
  }

}
