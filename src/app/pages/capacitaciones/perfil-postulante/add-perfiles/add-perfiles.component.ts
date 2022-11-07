import { Component, Inject, Input, OnInit } from '@angular/core';
import { AnyForUntypedForms, FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertService } from 'src/app/shared/services/alert.service';
import { TYPE_ALERT } from 'src/app/shared/services/config';
import Swal from 'sweetalert2';
import { AddPerfilesExperienciaComponent } from '../add-perfiles-experiencia/add-perfiles-experiencia.component';

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
  selector: 'app-add-perfiles',
  templateUrl: './add-perfiles.component.html',
  styleUrls: ['./add-perfiles.component.scss']
})
export class AddPerfilesComponent implements OnInit {

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

  idUsuario: number = 0;
  fichaPerfil : FichaPerfil = new FichaPerfil();
  public form: FormGroup
  isChecked: boolean = false;
  public list1: any;
  public l1: boolean = false;
  public l2: boolean = false;
  public l3: boolean = false;
  public list2: any;
  public list3: any;

  listaFamilia: any[] = [
    {
      textNombre: '',
      txtApellidos: '',
      txtDuracion: '',
      textFunciones: '',
      intEdad: 0
    }
  ];

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


  biEsperiencia: boolean = false;

  selectEstadosCivil: any;
  selectGeneros: any;
  selectDepartamentos: any;
  selectProvincias: any;
  selectDistritos: any;
  selectTipoFamiliar: any;
  selectTipoEspecializacion: any;
  selectTipoFormacion: any;
  selectCursos: any;
  selectPais: any;
  selectAreasEstudio: any;
  selectEstados: any;
  selectActividadesEmpresa: any;
  selectNivelesExperiencia: any;
  selectAreasPuesto: any;
  selectSubAreasPuesto: any;
  selectAptitudFisica: any;
  selectNivelExperienciaPeligro : any;
  selectNumero : any;
  selectLTP: any;

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private modalService : NgbModal,
    public dialog: MatDialog,
    private fb: FormBuilder,
    private alert: AlertService
  ) {
    this.idUsuario = data.idUsuario;
    this.form = this.fb.group({
      tarea: [''],
      isCheck: [''],

      dni: [''],
      apellidos: [''],
      nombres: [''],
      fechaNacimiento: [''],
      estadoCivil: [''],
      genero: [''],
      correoElectronico: [''],
      telefono: [''],
      celular: [''],
      direccion: [''],
      departamento: [''],
      provincia: [''],
      distrito: [''],
      tipoFamiliar: [''],
      familiarNombre: [''],
      familiarApellidos: [''],
      familiarEdad: [''],
      tipoEspecializacion: [''],
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

    this.getListadoSelects();
  }

  ngOnInit(): void {
    if(this.idUsuario && this.idUsuario > 0 ){
      this.mostrarDatos();
    }

  }

  mostrarDatos(){
    this.addSkillFormacion();

    this.form.patchValue({
      dni: '12345678',
      apellidos: 'Olivera Perez',
      nombres: 'Manuel',
      fechaNacimiento: '2022-10-18',
      estadoCivil: this.selectEstadosCivil[0],
      genero: this.selectGeneros[0],
      correoElectronico: 'oliveraperezmanual@correo.com',
      telefono: '45678915',
      celular: '98574585',
      direccion: 'av calle los tecnologicos',
      departamento: this.selectDepartamentos[0],
      provincia: this.selectProvincias[0],
      distrito: this.selectDistritos[0],
      tipoFamiliar: this.selectTipoFamiliar[0],
      familiarNombre: 'Mario',
      familiarApellidos: 'Olvera Sanchez',
      familiarEdad: 17,
      tipoEspecializacion: this.selectTipoEspecializacion[0],
      tipoFormacion: this.selectTipoFormacion[0],
      curso: this.selectCursos[0],
      pais: this.selectPais[0],
      areaEstudio: this.selectAreasEstudio[0],
      institucion: 'COEN',
      estado: this.selectEstados[0],
      fechaInicio: '2021-10-15',
      fechaFin: '2021-10-30',
      aptitudFisica: this.selectAptitudFisica[0]
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

  getListadoSelects(){
    this.selectEstadosCivil = [
      {
        id: 1,
        nombre: 'Soltero(a)'
      },
      {
        id: 2,
        nombre: 'Casado(a)'
      },
      {
        id: 3,
        nombre: 'Divorciado(a)'
      }
    ];
    this.selectGeneros = [
      {
        id: 1,
        nombre: 'Masculino'
      },
      {
        id: 2,
        nombre: 'Femenino'
      }
    ];

    this.selectDepartamentos = [
      {
        id: 1,
        nombre: 'Lima'
      },
      {
        id: 2,
        nombre: 'Arequipa'
      }
    ]

    this.selectProvincias = [{
        id: 1,
        nombre: 'Lima'
      },
      {
        id: 2,
        nombre: 'Arequipa'
      }
    ]

    this.selectDistritos = [{
        id: 1,
        nombre: 'Lima'
      },
      {
        id: 2,
        nombre: 'Los Olivos'
      }
    ]

    this.selectTipoFamiliar = [
      {
        id: 1,
        nombre: 'Hijo (a)'
      },
      {
        id: 2,
        nombre: 'Conyuge'
      }
    ];

    this.selectTipoEspecializacion = [
      {
        id: 1,
        nombre: 'USAR'
      }
    ];

    this.selectTipoFormacion = [
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


    this.selectCursos = [
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

    this.selectPais = [
      {
        id: 1,
        nombre: 'España'
      },
      {
        id: 2,
        nombre: 'Perú'
      }
    ]

    this.selectAreasEstudio = [
      {
        id: 1,
        nombre: 'Apago de incendios'
      },
      {
        id: 2,
        nombre: 'Desactivacion de explosivos'
      }
    ]

    this.selectEstados = [
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

    this.selectActividadesEmpresa = [
      {
        id: 1,
        nombre: 'Servicios Generales'
      },
      {
        id: 2,
        nombre: 'Gestión de Riegos de Desastres'
      }
    ]

    this.selectNivelesExperiencia = [
      {
        id: 1,
        nombre: 'Nivel 1'
      },
      {
        id: 2,
        nombre: 'Nivel 2'
      }
    ]

    this.selectAreasPuesto = [
      {
        id: 1,
        nombre: 'Área 1'
      },
      {
        id: 2,
        nombre: 'Área 2'
      }
    ]

    this.selectSubAreasPuesto = [
      {
        id: 1,
        nombre: 'Subárea 1'
      },
      {
        id: 2,
        nombre: 'Subárea 2'
      }
    ]
    this.selectNivelExperienciaPeligro = [
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
    this.selectNumero = [
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
    this.selectAptitudFisica = [
      {
        id: 1,
        nombre: 'Arduo'
      },
      {
        id: 2,
        nombre: 'Moderado'
      },
      {
        id: 3,
        nombre: 'Ligero'
      }
    ]

    this.selectLTP = [
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
      }
    ]
  }

  closeModal(){
    //this.modalService.dismissAll()
    this.dialogRef.close();
  }

  addSkillFormacion(){
    this.fichaPerfil.InfoFormacion.push({
      numId : 0,
      txtTipoFormacion : '',
      detalleFormacion : ''
    })
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

  saveModal() {
    this.alert
      .questionAlertConfirm(
        '¿Está seguro que desea registrar?',
        '',
        'Si, Registrar',
        TYPE_ALERT.QUESTION
      )
      .then((result) => {
        if (result.value) {
          this.closeModal()
        } else {
          //this.closeModal()
        }
      });
  }

  guardarExperiencia() {
    this.biEsperiencia = !this.biEsperiencia;
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Guardado correctamente',
      showConfirmButton: false,
      timer: 1500
    })
  }

  onAddExperiencia() {
    //this.biEsperiencia = true;
    /*const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });*/
    const modalRef = this.modalService.open(AddPerfilesExperienciaComponent, {
      size: 'xl',
      ariaLabelledBy: 'modal',
      centered: true,
      windowClass: 'modal',
      backdrop: 'static'
    })

  }

}



@Component({
  selector: 'add-perfiles-exp.component',
  templateUrl: 'add-perfiles-exp.component.html',
})
export class DialogOverviewExampleDialog {
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
