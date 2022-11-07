import { UsuariosEditComponent } from './seguridad/usuarios-edit/usuarios-edit.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/shared/guard/auth.guard';
import { PERMISOS } from 'src/app/shared/models/permisos';
import { AddPerfilesComponent } from './perfil-postulante/add-perfiles/add-perfiles.component';
import { ListPerfilesComponent } from './perfil-postulante/list-perfiles/list-perfiles.component';
import { PerfilesAddComponent } from './seguridad/perfiles-add/perfiles-add.component';
import { PerfilesListComponent } from './seguridad/perfiles-list/perfiles-list.component';
import { PermisosAddComponent } from './seguridad/permisos-add/permisos-add.component';
import { PermisosListComponent } from './seguridad/permisos-list/permisos-list.component';
import { UsuariosAddComponent } from './seguridad/usuarios-add/usuarios-add.component';
import { UsuariosListComponent } from './seguridad/usuarios-list/usuarios-list.component';
import { ConsultaPerfilProfesionalComponent } from './consulta-perfil-profesional/consulta-perfil-profesional.component';
import { VistaAdministradoComponent } from './perfil-postulante/vista-administrado/vista-administrado.component';
import { ExperienciaModalComponent } from './perfil-postulante/experiencia-modal/experiencia-modal.component';
import { AnalisisPerfilesComponent } from './perfil-postulante/analisis-perfiles/analisis-perfiles.component';
import { CrearCursoComponent } from './administracion/cursos/crear-curso/crear-curso.component';
import { ListarCursosComponent } from './administracion/cursos/listar-cursos/listar-cursos.component';
import { ListaPosicionComponent } from './administracion/posicion/lista-posicion/lista-posicion.component';
import { CrearSolicitudComponent } from './seguridad/crear-solicitud/crear-solicitud.component';
import { ListarSolicitudComponent } from './seguridad/listar-solicitud/listar-solicitud.component';
import { AcreditacionListComponent } from './acreditacion/acreditacion-list/acreditacion-list.component';
import { AcreditacionDetailsComponent } from './acreditacion/acreditacion-details/acreditacion-details.component';
import { ListarCategoriaComponent } from './administracion/categoria/listar-categoria/listar-categoria.component';
import { PerfilesEditarComponent } from './seguridad/perfiles-editar/perfiles-editar.component';
import { PermisosEditComponent } from './seguridad/permisos-edit/permisos-edit.component';
import { AptitudFisicaComponent } from './administracion/aptitud-fisica/aptitud-fisica.component';
import { LibroTareasPosicionComponent } from './administracion/libro-tareas-posicion/libro-tareas-posicion.component';
import { AptitudFisicaAddComponent } from './administracion/aptitud-fisica-add/aptitud-fisica-add.component';
import { LibroTareasPosicionAddComponent } from './administracion/libro-tareas-posicion-add/libro-tareas-posicion-add.component';
import { AptitudFisicaDetailsComponent } from './administracion/aptitud-fisica-details/aptitud-fisica-details.component';
import { LibroTareasPosicionDetailsComponent } from './administracion/libro-tareas-posicion-details/libro-tareas-posicion-details.component';
import { GenerarCertificadoComponent } from './acreditacion/generar-certificado/generar-certificado.component';
import { AcreditacionNevoComponent } from './acreditacion/acreditacion-nuevo/acreditacion-nuevo.component';
import { AddIdiomaComponent } from './perfil-postulante/add-idioma/add-idioma.component';
import { CambiarPasswordComponent } from './seguridad/cambiar-password/cambiar-password.component';
const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'seguridad/usuarios',
        component: UsuariosListComponent
      },
      {
        path: 'seguridad/usuarios-add',
        component: UsuariosAddComponent,
      },
      {
        path: 'seguridad/usuarios-edit/:id',
        component: UsuariosEditComponent,
      },
      {
        path: 'seguridad/perfiles',
        component: PerfilesListComponent,
      },
      {
        path: 'seguridad/perfiles-add',
        component: PerfilesAddComponent,
      },
      {
        path: 'seguridad/perfiles-editar',
        component: PerfilesEditarComponent,
      },
      {
        path: 'seguridad/permisos',
        component: PermisosListComponent,
      },
      {
        path: 'seguridad/permisos-add',
        component: PermisosAddComponent,
      },
      {
        path: 'seguridad/permisos-edit',
        component: PermisosEditComponent,
      },
      {
        path: 'perfil-postulante/list-perfiles',
        component : ListPerfilesComponent
      },
      {
        path: 'consulta-perfil-profesional',
        component: ConsultaPerfilProfesionalComponent,
      },
      {
        path : 'perfil-postulante/vista-administrado',
        component : VistaAdministradoComponent
      },
      {
        path: 'perfil-postulante/cambiar-password',
        component: CambiarPasswordComponent,
      },
      {
        path : 'perfil-postulante/vista-administrado/experiencia-modal',
        component : ExperienciaModalComponent
      },
      {
        path : 'perfil-postulante/vista-administrado/idioma-modal',
        component : AddIdiomaComponent
      },
      {
        path : 'perfil-postulante/analisis-perfiles',
        component : AnalisisPerfilesComponent
      },
      {
        path : 'administracion/cursos',
        component : ListarCursosComponent
      },
      {
        path: 'administracion/posiciones',
        component : ListaPosicionComponent
      },
      {
        path: 'administracion/categorias',
        component : ListarCategoriaComponent
      },
      {
        path: 'seguridad/solicitud-add',
        component: CrearSolicitudComponent,
      },
      {
        path: 'seguridad/solicitud-list',
        component: ListarSolicitudComponent,
      },
      {
        path : 'acreditacion/list',
        component : AcreditacionListComponent
      },
      {
        path : 'acreditacion/details',
        component : AcreditacionDetailsComponent
      },
      {
        path : 'acreditacion/generar-certificado',
        component : GenerarCertificadoComponent
      },
      {
        path : 'acreditacion/nuevo',
        component : AcreditacionNevoComponent
      },
      {
        path : 'aptitud-fisica',
        component : AptitudFisicaComponent
      },
      {
        path : 'aptitud-fisica-add',
        component : AptitudFisicaAddComponent
      },
      {
        path : 'aptitud-fisica-details',
        component : AptitudFisicaDetailsComponent
      },
      {
        path : 'libro-tareas-posición',
        component : LibroTareasPosicionComponent
      },
      {
        path : 'libro-tareas-posición-add',
        component : LibroTareasPosicionAddComponent
      },
      {
        path : 'libro-tareas-posición-details',
        component : LibroTareasPosicionDetailsComponent
      }


    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CapacitacionesRoutingModule { }
