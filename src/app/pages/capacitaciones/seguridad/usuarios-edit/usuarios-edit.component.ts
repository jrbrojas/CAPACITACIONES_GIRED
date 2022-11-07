import { group } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AlertService } from 'src/app/shared/services/alert.service';
import { TYPE_ALERT } from 'src/app/shared/services/config';

@Component({
  selector: 'app-usuarios-edit',
  templateUrl: './usuarios-edit.component.html',
  styleUrls: ['./usuarios-edit.component.scss']
})
export class UsuariosEditComponent implements OnInit {

  public selectTitulos: any;
  public selectGeneros: any;
  public selectTiposDocumentos: any;

  public selectPaisesResidencias: any;
  public selectDepartamentosResidencias: any;
  public selectProvinciasResidencias: any;
  public selectDistritosResidencias: any;
  public selectOrganizacionesInstituciones: any;
  public selectPerfiles: any;
  id: number;
  public editUserform: FormGroup;
  private sub?: Subscription;
  public listUsuarios: any = [
    {
      id: 1,
      titulo: 1,
      genero: 1,
      tipoDocumento: 1,
      numeroDocumento: '12345678',
      nombres: 'Jose',
      apellidos: 'Rojas',
      paisResidencia: 1,
      departamentoResidencia: 1,
      provinciaResidencia: 1,
      distritoResidencia: 1,
      direccionResidencia: 'Av. El sol 456',
      codigoPostalResidencia: '456784',
      celular: '987654321',
      telefono: '4565464',
      fax: '45887848',
      organizacionInstitucion: 1,
      cargo: 'Jefe de Proyecto',
      usuario: 'JRojas',
      contrasenia: 'asdfsdf',
      email: 'joserojas@correo.com',
      perfil: 1
    },
    {
      id: 2,
      titulo: 1,
      genero: 1,
      tipoDocumento: 1,
      numeroDocumento: '45678912',
      nombres: 'Pedro',
      apellidos: 'Garcia',
      paisResidencia: 1,
      departamentoResidencia: 1,
      provinciaResidencia: 1,
      distritoResidencia: 1,
      direccionResidencia: 'Av. Las praderas',
      codigoPostalResidencia: '3423',
      celular: '957842456',
      telefono: '89489',
      fax: '456456',
      organizacionInstitucion: 1,
      cargo: 'Jefe de Oficina',
      usuario: 'PGarci123',
      contrasenia: '1234564',
      email: 'PGarci123@correo.com',
      perfil: 5
    },
    {
      id: 3,
      titulo: 1,
      genero: 2,
      tipoDocumento: 1,
      numeroDocumento: '156487848',
      nombres: 'Mariana',
      apellidos: 'Garcia',
      paisResidencia: 1,
      departamentoResidencia: 1,
      provinciaResidencia: 1,
      distritoResidencia: 1,
      direccionResidencia: 'Av. El Girasol',
      codigoPostalResidencia: '78489',
      celular: '954846123',
      telefono: '88564654',
      fax: '458465456',
      organizacionInstitucion: 1,
      cargo: 'Administradora',
      usuario: 'MarianaGP',
      contrasenia: '456456',
      email: 'marianagarcia@correo.com',
      perfil: 1
    },
    {
      id: 4,
      titulo: 3,
      genero: 1,
      tipoDocumento: 1,
      numeroDocumento: '88458451',
      nombres: 'Rodrigo',
      apellidos: 'Cardenas',
      paisResidencia: 1,
      departamentoResidencia: 1,
      provinciaResidencia: 1,
      distritoResidencia: 1,
      direccionResidencia: 'Av. calle',
      codigoPostalResidencia: '789489',
      celular: '984564516',
      telefono: '846',
      fax: '45456',
      organizacionInstitucion: 1,
      cargo: 'Estudiante',
      usuario: 'RodrigoC',
      contrasenia: '465456',
      email: 'rodrigoc@correo.com',
      perfil: 1
    }
  ]

  constructor(private alert : AlertService,
    private route : Router,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder
    ) {

      this.editUserform = this.fb.group({
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

    this.sub = this.activatedRoute.params.subscribe(
      params => {
        this.id = +params['id'];
        this.getUserSelected();
      }
    );
  }

  getUserSelected(){
    let selectUser = this.listUsuarios.find(item => item.id == this.id);
    this.editUserform.patchValue(selectUser);
  }


  getTitulos(){
    this.selectTitulos = [
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
        id: 1,
        nombre: 'Perú'
      }
    ]
  }

  getDepartamentosResidencias(){
    this.selectDepartamentosResidencias = [
      {
        id: 1,
        nombre: 'Lima'
      }
    ]
  }

  getProvinciasResidencias(){
    this.selectProvinciasResidencias = [
      {
        id: 1,
        nombre: 'Lima'
      }
    ]
  }

  getDistritosResidencias(){
    this.selectDistritosResidencias = [
      {
        id: 1,
        nombre: 'Lince'
      }
    ]
  }

  getOrganizacionesInstituciones(){
    this.selectOrganizacionesInstituciones = [
      {
        id: 1,
        nombre: 'COEN'
      }
    ]
  }

  getPerfiles(){
    this.selectPerfiles = [
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
      '¿Está seguro que desea actualizar el usuario?',
      '',
      'Si, Actualizar',
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
