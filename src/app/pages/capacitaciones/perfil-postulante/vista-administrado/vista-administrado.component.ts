import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Curso } from '../../administracion/cursos/listar-cursos/listar-cursos.component';
import { AddDatosbasicosComponent } from '../add-datosbasicos/add-datosbasicos.component';
import { AddEspecializacionComponent } from '../add-especializacion/add-especializacion.component';
import { AddExperiencialaboralComponent } from '../add-experiencialaboral/add-experiencialaboral.component';
import { AddFormacionacademicaComponent } from '../add-formacionacademica/add-formacionacademica.component';
import { AddIdiomaComponent } from '../add-idioma/add-idioma.component';
import { ExperienciaModalComponent } from '../experiencia-modal/experiencia-modal.component';

export interface DataEducation {
  profesion: string;
  pais: string;
  nivelEducativo: string;
  areaEstudio: string;
  institucion: string;
  estado: string;
  grado: string;
  fechaInicio: string;
  fechaFin: string;
}

export interface DataExperiencia {
  lugar: string;
  siglas: string;
  cargo: string;
  fechaIn: string;
  fechaFin: string;
  estado: string;
  condicion: string;
  motivo: string;
}

export interface Especializacion {
  nombreEspec: string;
  codigoCertificado: string;
  fechaCertificado: string;
  grado: string;
  fechaInicio: string,
  fechaFin :string
  tiempoGRD : string;
  cantidadComisiones : string
}

export interface Cursos {
  nombreEspec: string;
  codigoCertificado: string;
  grado: string;
  fechaInicio: string,
  fechaFin :string
}

export interface Conocimientos {
  nombreConocimiento : string;
}

export interface DataExperiencia {
  lugar: string;
  siglas: string;
  cargo: string;
  fechaIn: string;
  fechaFin: string;
  estado: string;
  condicion: string;
  motivo: string;
}

export interface SubprocesoResMayorExp {
  nombreSubproceso : string;
}

export interface NivelExpFrentePeligros {
  nombreExp : string;
  nivel : string;
}

export interface Idiomas {
  nombreExp : string;
  nivel : string;
}

@Component({
  selector: 'app-vista-administrado',
  templateUrl: './vista-administrado.component.html',
  styleUrls: ['./vista-administrado.component.scss']
})
export class VistaAdministradoComponent implements OnInit {

  isChecked: boolean = false;
  public list1: any;
  public l1: boolean = false;
  public l2: boolean = false;
  public l3: boolean = false;
  public list2: any;
  public list3: any;
  
  
  inNivelExperienciaSi1: number = 0;
  inNivelExperienciaSi2: number = 0;
  inNivelExperienciaSi3: number = 0;
  inNivelExperienciaSi4: number = 0;
  inNivelExperienciaSi5: number = 0;
  inNivelExperienciaSi6: number = 0;
  inNivelExperienciaSi7: number = 0;
  inNivelExperienciaSi8: number = 0;
  inNivelExperienciaSi9: number = 0;
  inNivelExperienciaSi10: number = 0;

  selectNivelExperienciaPeligro = [
    {
      id: 0,
      nombre: 'Seleccionar opcion'
    },
    {
      id: 1,
      nombre: 'Si'
    },
    {
      id: 2,
      nombre: 'No'
    }
  ]
  selectNumero = [
    {
      id: 1,
      nombre: '1'
    },
    {
      id: 2,
      nombre: '2'
    },
    {
      id: 3,
      nombre: '3'
    },
    {
      id: 4,
      nombre: '4'
    },
    {
      id: 5,
      nombre: '5'
    },
    {
      id: 6,
      nombre: '6'
    },
    {
      id: 7,
      nombre: '7'
    },
    {
      id: 8,
      nombre: '8'
    },
    {
      id: 9,
      nombre: '9'
    },
    {
      id: 10,
      nombre: '10'
    },
    {
      id: 11,
      nombre: '11'
    },
    {
      id: 12,
      nombre: '12'
    },
    {
      id: 13,
      nombre: '13'
    },
    {
      id: 14,
      nombre: '14'
    },
    {
      id: 15,
      nombre: '15'
    },
    {
      id: 16,
      nombre: '16'
    },
    {
      id: 17,
      nombre: '17'
    },
    {
      id: 18,
      nombre: '18'
    },
    {
      id: 19,
      nombre: '19'
    },
    {
      id: 20,
      nombre: '20'
    },
  ]
  public data1: any = [
    {
      id: 1,
      nombre: "Organizar equipos",
      descripcion: "Tarea que determina como organizar equipos ante una emergencia",
      cumplio: false
    },
    {
      id: 2,
      nombre: "Elaborar plan de emergencia",
      descripcion: "Tarea que determina como realizar un plan ante una emergencia",
      cumplio: false
    },
    {
      id: 3,
      nombre: "Elaborar procedimiento de atención de un incendio",
      descripcion: "Tarea que determina como realizar un procedimiento para atender un incendio",
      cumplio: false
    },
    {
      id: 4,
      nombre: "Elaborar plan de emergencia",
      descripcion: "Tarea que determina como realizar un plan ante una emergencia",
      cumplio: false
    },
    {
      id: 5,
      nombre: "Elaborar procedimiento de atención de un incendio",
      descripcion: "Tarea que determina como realizar un procedimiento para atender un incendio",
      cumplio: false
    },
  ]

  public data2: any = [
    {
      id: 1,
      nombre: "Elaborar plan de emergencia",
      descripcion: "Tarea que determina como realizar un plan ante una emergencia",
      cumplio: false
    },
    {
      id: 2,
      nombre: "Elaborar plan de emergencia",
      descripcion: "Tarea que determina como realizar un plan ante una emergencia",
      cumplio: false
    },
    {
      id: 3,
      nombre: "Elaborar procedimiento de atención de un incendio",
      descripcion: "Tarea que determina como realizar un procedimiento para atender un incendio",
      cumplio: false
    }
  ]

  public data3: any = [
    {
      id: 1,
      nombre: "Elaborar procedimiento de atención de un incendio",
      descripcion: "Tarea que determina como realizar un procedimiento para atender un incendio",
      cumplio: false
    },
    {
      id: 2,
      nombre: "Elaborar plan de emergencia",
      descripcion: "Tarea que determina como realizar un plan ante una emergencia",
      cumplio: false
    },
    {
      id: 3,
      nombre: "Elaborar procedimiento de atención de un incendio",
      descripcion: "Tarea que determina como realizar un procedimiento para atender un incendio",
      cumplio: false
    },
    {
      id: 4,
      nombre: "Elaborar plan de emergencia",
      descripcion: "Tarea que determina como realizar un plan ante una emergencia",
      cumplio: false
    }
  ]


  constructor(public modalService : NgbModal) { }

  dataEducation : DataEducation[] = []
  especializacion : Especializacion[] = []
  cursos : Cursos[] = []
  conocimientos : Conocimientos[] = []
  experiencia : DataExperiencia[] = []
  subProcesoResMayorExp : SubprocesoResMayorExp[] = []
  nivelExpFrentePeligros : NivelExpFrentePeligros[] = []
  idiomas : Idiomas[] = []

  ngOnInit(): void {
    this.dataEducation.push(
      {
        profesion: 'ADMINISTRACION DE EMPRESAS INTERNACIONALES',
        pais: 'PERU',
        nivelEducativo: 'UNIVERSITARIO',
        areaEstudio: 'NEGOCIOS',
        institucion: 'UNIVERSIDAD PRIVADA DEL OESTE',
        estado: 'TERMINADO',
        grado: 'TITULADO',
        fechaInicio: '10/03/2016',
        fechaFin: '25/07/2020'
      }
    )

    this.cursos.push(
      {
        nombreEspec: 'D-311 Despachador de Ataque Inicial',
        codigoCertificado: 'Compañía General de Bomberos del Perú',
        grado: 'COMPLETO',
        fechaInicio: '10/06/2011',
        fechaFin: '01/12/2013',
      },
      {
        nombreEspec: 'FI-110 Operaciones de Incendios Forestales y Protección de la Escena de Origen para Primeros Respondientes',
        codigoCertificado: 'Compañía General de Bomberos de Colombia',
        grado: 'COMPLETO',
        fechaInicio: '15/08/2015',
        fechaFin: '12/10/2017',
      },
      {
        nombreEspec: 'FI-210 Investigación de origen y causa de incendios forestales',
        codigoCertificado: 'Compañía General de Bomberos de Brasil',
        grado: 'COMPLETO',
        fechaInicio: '18/06/2019',
        fechaFin: '01/10/2021',
      }
    )

    this.especializacion.push(
      {
        nombreEspec: 'DIPLOMADO EN GESTIÓN DE RIESGO DE DESASTRES',
        codigoCertificado: 'INDECI',
        grado: 'DIPLOMADO - TITULADO',
        fechaInicio: '15/06/2016',
        fechaFin: '01/10/2021',
        fechaCertificado: '01/10/2021',
        tiempoGRD : 'Mas de 4 anios',
        cantidadComisiones : 'MUCHAS'
      }
    )

    this.experiencia.push(
      {
        lugar: "OFICINA GENERAL DE TECNOLOGÍAS DE LA INFORMACIÓN Y COMUNICACIONES",
        siglas: "OGTIC",
        cargo: "OFICINA GENERAL DE TECNOLOGÍAS DE LA INFORMACIÓN Y COMUNICACIONES - INDECI",
        fechaIn: "04/01/2021",
        fechaFin: "Actualmente trabaja aqui",
        estado: "Activo",
        condicion: "Cantidad de persona a su cargo: 10",
        motivo: "Maneja presupuesto Anual: No"
      },
      {
        lugar: "DIRECCIÓN DE PREPARACIÓN - INDECI",
        siglas: "DIPRE",
        cargo: "JEFE ",
        fechaIn: "22/08/2016",
        fechaFin: "31/12/2019 ",
        estado: "Inactivo",
        condicion: "Cantidad de persona a su cargo: 20",
        motivo: "Maneja presupuesto Anual: No"
      },
      {
        lugar: "DIRECCION DE RESPUESTA - INDECI",
        siglas: "DIPRE",
        cargo: "JEFE  ",
        fechaIn: "Nov 2021",
        fechaFin: "Feb 2022",
        estado: "Inactivo",
        condicion: "Cantidad de persona a su cargo: 20",
        motivo: "Maneja presupuesto Anual: Si",
      }
      
    )

    this.conocimientos.push(
      {
      nombreConocimiento : 'Especializacion o capacitacion en plan familiar'
      },
      {
      nombreConocimiento : 'Especializacion o capacitacion en alberges'})

    this.subProcesoResMayorExp.push(
      {nombreSubproceso : 'Busqueda y salvamento'},
      {nombreSubproceso : 'Logistica'},
      {nombreSubproceso : 'SCI'}
    )

    this.nivelExpFrentePeligros.push(
      { 
        nombreExp : 'Huaicos',
        nivel : 'Bajo'
      },
      {
        nombreExp : 'Sismos',
        nivel : 'Medio'
      }

      )

      this.idiomas.push(
        { 
          nombreExp : 'Español',
          nivel : 'Avanzado'
        },
        {
          nombreExp : 'Ingles',
          nivel : 'Intermedio'
        }
  
        )
  }


  viewEditDataBasic(){
    this.modalService.open(AddDatosbasicosComponent ,{
      size: 'xl',
      ariaLabelledBy: 'modal',
      centered: true,
      windowClass: 'modal',
      backdrop: 'static'
    })
  }

  viewEditEspecializacion(){
    this.modalService.open(AddEspecializacionComponent, {
      size: 'xl',
      ariaLabelledBy: 'modal',
      centered: true,
      windowClass: 'modal',
      backdrop: 'static'
    })
  }

  addIdioma(){
    this.modalService.open(AddIdiomaComponent, {
      size: 'xl',
      ariaLabelledBy: 'modal',
      centered: true,
      windowClass: 'modal',
      backdrop: 'static'
    })
  }

  addFormacion(){
    this.modalService.open(AddFormacionacademicaComponent, {
      size : 'xl',
      ariaLabelledBy : 'modal',
      centered : true,
      windowClass : 'modal',
      backdrop : 'static'
    })
  }

  addExperiencia(){
    this.modalService.open(AddExperiencialaboralComponent, {
      size: 'xl',
      ariaLabelledBy: 'modal',
      centered: true,
      windowClass: 'modal',
      backdrop: 'static'
    })
  }


  checked(event: any) {
    if (event.checked) {
      this.isChecked = true;
    } else {
      this.isChecked = false;
    }
  }


  changeEvent(event: any) {
    if (event.target.value == 1) {
      this.l1 = true;
      this.l2 = false;
      this.l3 = false;
      this.list1 = this.data1
    } else if (event.target.value == 2) {
      this.l2 = true;
      this.l3 = false;
      this.l1 = false;
      this.list2 = this.data2
    } else if (event.target.value == 3) {
      this.l3 = true;
      this.l2 = false;
      this.l1 = false;
      this.list3 = this.data3
    }
  }
}
