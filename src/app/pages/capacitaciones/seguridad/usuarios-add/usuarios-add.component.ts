import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/shared/services/alert.service';
import { TYPE_ALERT } from 'src/app/shared/services/config';

@Component({
  selector: 'app-usuarios-add',
  templateUrl: './usuarios-add.component.html',
  styleUrls: ['./usuarios-add.component.scss']
})
export class UsuariosAddComponent implements OnInit {

  public selectTitulos: any;
  public selectGeneros: any;
  public selectTiposDocumentos: any;

  public selectPaisesResidencias: any;
  public selectDepartamentosResidencias: any;
  public selectProvinciasResidencias: any;
  public selectDistritosResidencias: any;
  public selectOrganizacionesInstituciones: any;
  public selectPerfiles: any;


  public createUserform: FormGroup;

  public HabilitarPerfil: boolean = true;
  public loadButton = false;

  disbled: boolean = false;
  public counter: number = 0;
  public nivel: number = 0

  public initUser: any =
    {
      id: '',
      titulo: 0,
      genero: 0,
      tipoDocumento: 0,
      numeroDocumento: '',
      nombres: '',
      apellidos: '',
      paisResidencia: 0,
      departamentoResidencia: 0,
      provinciaResidencia: 0,
      distritoResidencia: 0,
      direccionResidencia: '',
      codigoPostalResidencia: '',
      celular: '',
      telefono: '',
      fax: '',
      organizacionInstitucion: 0,
      cargo: '',
      usuario: '',
      contrasenia: '',
      email: '',
      perfil: 0
  }

  constructor(
      private alert : AlertService,
      private route : Router,
      private fb: FormBuilder
    ) {
      this.createUserform = this.fb.group({
        id: [''],
        titulo: [''],
        genero: [''],
        tipoDocumento: [''],
        numeroDocumento: [''],
        nombres: [''],
        apellidos: [''],
        paisResidencia: [''],
        departamentoResidencia: [''],
        provinciaResidencia: [''],
        distritoResidencia: [''],
        direccionResidencia: [''],
        codigoPostalResidencia: [''],
        celular: [''],
        telefono: [''],
        fax: [''],
        organizacionInstitucion: [''],
        cargo: [''],
        usuario: [''],
        contrasenia: [''],
        email: [''],
        perfil: ['']
      });

      this.getTitulos();
      this.getGeneros();
      this.getTiposDocumentos();
      this.getPaisesResidencias();
      this.getDepartamentosResidencias();
      this.getProvinciasResidencias();
      this.getDistritosResidencias();
      this.getOrganizacionesInstituciones();
      this.getPerfiles();
    }

  ngOnInit(): void {
    this.createUserform.setValue(this.initUser);
  }


  getTitulos(){
    this.selectTitulos = [
      {
        id: 0,
        nombre: 'Elegir...'
      },
      {
        id: 1,
        nombre: 'Prof.'
      },
      {
        id: 2,
        nombre: 'Dr.'
      },
      {
        id: 3,
        nombre: 'Sr.'
      },
      {
        id: 4,
        nombre: 'Otro'
      },
    ]
  }

  getGeneros(){
    this.selectGeneros = [
      {
        id: 0,
        nombre: 'Elegir...'
      },
      {
        id: 1,
        nombre: 'Masculino'
      },
      {
        id: 2,
        nombre: 'Femenino'
      }
    ]
  }

  getTiposDocumentos(){
    this.selectTiposDocumentos = [
      {
        id: 0,
        nombre: 'Elegir...'
      },
      {
        id: 1,
        nombre: 'DNI'
      },
      {
        id: 2,
        nombre: 'Pasaporte'
      },
      {
        id: 3,
        nombre: 'Carnet de Extranjería'
      }
    ]
  }

  getPaisesResidencias(){
    this.selectPaisesResidencias = [
      {
        id: 0,
        nombre: 'Elegir...'
      },
      {
        id: 1,
        nombre: 'Perú'
      }
    ]
  }

  getDepartamentosResidencias(){
    this.selectDepartamentosResidencias = [
      {
        id: 0,
        nombre: 'Elegir...'
      },
      {
        id: 1,
        nombre: 'Lima'
      }
    ]
  }

  getProvinciasResidencias(){
    this.selectProvinciasResidencias = [
      {
        id: 0,
        nombre: 'Elegir...'
      },
      {
        id: 1,
        nombre: 'Lima'
      }
    ]
  }

  getDistritosResidencias(){
    this.selectDistritosResidencias = [
      {
        id: 0,
        nombre: 'Elegir...'
      },
      {
        id: 1,
        nombre: 'Lince'
      }
    ]
  }

  getOrganizacionesInstituciones(){
    this.selectOrganizacionesInstituciones = [
      {
        id: 0,
        nombre: 'Elegir...'
      },
      {
        id: 1,
        nombre: 'COEN'
      }
    ]
  }

  getPerfiles(){
    this.selectPerfiles = [
      {
        id: 0,
        nombre: 'Elegir...'
      },
      {
        id: 1,
        nombre: 'Administrador del Sistema'
      },
      {
        id: 2,
        nombre: 'Administrador USAR'
      },
      {
        id: 3,
        nombre: 'Administrador Combatientes del Fuego'
      },
      {
        id: 4,
        nombre: 'Administrador USAR'
      },
      {
        id: 5,
        nombre: 'Supervisor'
      },
      {
        id: 6,
        nombre: 'Administrado'
      }
    ]
  }


  cancelProject() {
    this.route.navigate(['/capacitaciones/seguridad/usuarios'])
  }

guardarUsuario(){
  this.alert.questionAlertConfirm(
    '¿Está seguro que desea registrar el usuario?',
    '',
    'Si, Registrar',
    TYPE_ALERT.QUESTION
  ).then(
    (result) => {
      if (result.value) {
        this.route.navigate(['/capacitaciones/seguridad/usuarios'])
      } else {

      }
    }
  );
}

}
