import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-datosbasicos',
  templateUrl: './add-datosbasicos.component.html',
  styleUrls: ['./add-datosbasicos.component.scss']
})
export class AddDatosbasicosComponent implements OnInit {
  
  arrCurso: any [] = [{
    id: 1,
    asignacion : 'Lider de Equipo',
  },
  {
    id: 1,
    asignacion : 'Lider de Equipo (Designado)',
  },
  {
    id: 1,
    asignacion : 'Oficial de Planificacion',
  },
  {
    id: 1,
    asignacion : 'Oficial de Seguridad',
  },
  {
    id: 1,
    asignacion : 'Lider de Tripulación',
  },
  {
    id: 1,
    asignacion : 'Equipio de Busqueda y Rescato (incluyendo perros)',
  },
  {
    id: 1,
    asignacion : 'Especializta Médico y/o Médico/Paramédico/Enfermera',
  },
  {
    id: 1,
    asignacion : 'Gestor del Equipo de Logística',
  },
  {
    id: 1,
    asignacion : 'Responsable de Logística',
  },
  {
    id: 1,
    asignacion : 'Lider de Equipo',
  },
  {
    id: 1,
    asignacion : 'Lider Adjunto',
  },
  {
    id: 1,
    asignacion : 'Oficial de Planificación',
  },
  {
    id: 1,
    asignacion : 'Oficial de Enlace',
  },
  {
    id: 1,
    asignacion : 'Ingeniero Estructural',
  },
  {
    id: 1,
    asignacion : 'Oficial de Seguridad',
  },
  {
    id: 1,
    asignacion : 'Oficial de Coordinación',
  },
  {
    id: 1,
    asignacion : 'Especializta de Búsqueda Técnica',
  },
  {
    id: 1,
    asignacion : 'Adiestrador de Perros',
  },
  {
    id: 1,
    asignacion : 'Especialista en MATPEL',
  },
  {
    id: 1,
    asignacion : 'Lider de Equipo de Rescate',
  },
  {
    id: 1,
    asignacion : 'Técnico de Rescate',
  },
  {
    id: 1,
    asignacion : 'Especialista en Aparejos Pesados',
  },
  {
    id: 1,
    asignacion : 'Especialista Médico y/o Médico/Paramédico/Enfermera',
  },
  {
    id: 1,
    asignacion : 'Lider de Equipo de Logística',
  },
  {
    id: 1,
    asignacion : 'Especialista en Transporte',
  },
  {
    id: 1,
    asignacion : 'Especialista en Logística',
  },
  {
    id: 1,
    asignacion : 'Administrador de Base',
  },
  {
    id: 1,
    asignacion : 'Especialista en Comunicación',
  }]

  listaFamilia: any[] = [
    {
      textNombre: '',
      txtApellidos: '',
      txtDuracion: '',
      textFunciones: '',
      intEdad: 0
    }
  ];
  
  constructor(
    private modalService : NgbModal
  ) { }

  ngOnInit(): void {
  }

  closeModal(){
    this.modalService.dismissAll()
  }

  addListaFamilia() {
    this.listaFamilia.push(
      {
        textNombre: '',
        txtApellidos: '',
        intEdad: 0
      }
    );
  }
}
