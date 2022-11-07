import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CapacitacionesRoutingModule} from './capacitaciones-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgSelectModule } from '@ng-select/ng-select';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { HttpClientModule } from '@angular/common/http';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatButtonModule } from '@angular/material/button';
import { NgxMatDatetimePickerModule, NgxMatNativeDateModule, NgxMatTimepickerModule } from '@angular-material-components/datetime-picker';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { DropzoneConfigInterface, DropzoneModule, DROPZONE_CONFIG } from 'ngx-dropzone-wrapper';


import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatTreeModule} from '@angular/material/tree';
import { MatTabsModule } from '@angular/material/tabs'
import { MatChipsModule } from '@angular/material/chips'
import { UsuariosListComponent } from './seguridad/usuarios-list/usuarios-list.component';
import { UsuariosAddComponent } from './seguridad/usuarios-add/usuarios-add.component';
import { PermisosListComponent } from './seguridad/permisos-list/permisos-list.component';
import { PerfilesAddComponent } from './seguridad/perfiles-add/perfiles-add.component';
import { PerfilesListComponent } from './seguridad/perfiles-list/perfiles-list.component';
import { PermisosAddComponent } from './seguridad/permisos-add/permisos-add.component';
import { ConsultaPerfilProfesionalComponent } from './consulta-perfil-profesional/consulta-perfil-profesional.component';
import {MatCheckboxModule} from '@angular/material/checkbox';

import { NgxCaptchaModule } from 'ngx-captcha';
import { AddPerfilesComponent, DialogOverviewExampleDialog } from './perfil-postulante/add-perfiles/add-perfiles.component';
import { ListPerfilesComponent } from './perfil-postulante/list-perfiles/list-perfiles.component';
import { VistaAdministradoComponent } from './perfil-postulante/vista-administrado/vista-administrado.component';
import { ExperienciaModalComponent } from './perfil-postulante/experiencia-modal/experiencia-modal.component';
import { AddEspecializacionComponent } from './perfil-postulante/add-especializacion/add-especializacion.component';
import { AddDatosbasicosComponent } from './perfil-postulante/add-datosbasicos/add-datosbasicos.component';
import { AddFormacionacademicaComponent } from './perfil-postulante/add-formacionacademica/add-formacionacademica.component';
import { AnalisisPerfilesComponent } from './perfil-postulante/analisis-perfiles/analisis-perfiles.component';
import { CrearCursoComponent } from './administracion/cursos/crear-curso/crear-curso.component';
import { CrearPosicionComponent } from './administracion/posicion/crear-posicion/crear-posicion.component';
import { ListarCursosComponent } from './administracion/cursos/listar-cursos/listar-cursos.component';
import { EditarCursoComponent } from './administracion/cursos/editar-curso/editar-curso.component';
import { ListaPosicionComponent } from './administracion/posicion/lista-posicion/lista-posicion.component';
import { EditarPosicionComponent } from './administracion/posicion/editar-posicion/editar-posicion.component';
import { CrearSolicitudComponent } from './seguridad/crear-solicitud/crear-solicitud.component';
import { ListarSolicitudComponent } from './seguridad/listar-solicitud/listar-solicitud.component';
import { AcreditacionListComponent } from './acreditacion/acreditacion-list/acreditacion-list.component';
import { AcreditacionDetailsComponent } from './acreditacion/acreditacion-details/acreditacion-details.component';
import { ListarCategoriaComponent } from './administracion/categoria/listar-categoria/listar-categoria.component';
import { EditarCategoriaComponent } from './administracion/categoria/editar-categoria/editar-categoria.component';
import { CrearCategoriaComponent } from './administracion/categoria/crear-categoria/crear-categoria.component';
import { UsuariosEditComponent } from './seguridad/usuarios-edit/usuarios-edit.component';
import { PerfilesEditarComponent } from './seguridad/perfiles-editar/perfiles-editar.component';
import { PermisosEditComponent } from './seguridad/permisos-edit/permisos-edit.component';
import { AptitudFisicaComponent } from './administracion/aptitud-fisica/aptitud-fisica.component';
import { LibroTareasPosicionComponent } from './administracion/libro-tareas-posicion/libro-tareas-posicion.component';
import { AptitudFisicaAddComponent } from './administracion/aptitud-fisica-add/aptitud-fisica-add.component';
import { LibroTareasPosicionAddComponent } from './administracion/libro-tareas-posicion-add/libro-tareas-posicion-add.component';
import { LibroTareasPosicionDetailsComponent } from './administracion/libro-tareas-posicion-details/libro-tareas-posicion-details.component';
import { AptitudFisicaDetailsComponent } from './administracion/aptitud-fisica-details/aptitud-fisica-details.component';
import { GenerarCertificadoComponent } from './acreditacion/generar-certificado/generar-certificado.component';
import { ModalCertificadoComponent } from './acreditacion/modal-certificado/modal-certificado.component';
import { AcreditacionNevoComponent } from './acreditacion/acreditacion-nuevo/acreditacion-nuevo.component';
import { AddPerfilesExperienciaComponent } from './perfil-postulante/add-perfiles-experiencia/add-perfiles-experiencia.component';
import { AddIdiomaComponent } from './perfil-postulante/add-idioma/add-idioma.component';
import { AddExperiencialaboralComponent } from './perfil-postulante/add-experiencialaboral/add-experiencialaboral.component';
import { CambiarPasswordComponent } from './seguridad/cambiar-password/cambiar-password.component';

const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
  // Change this to your upload POST address:
  url: 'https://httpbin.org/post',
  acceptedFiles: 'image/*',
  createImageThumbnails: true
};

@NgModule({
  declarations: [
    UsuariosListComponent,
    UsuariosAddComponent,
    PermisosAddComponent,
    PermisosListComponent,
    PerfilesAddComponent,
    PerfilesListComponent,
    ConsultaPerfilProfesionalComponent,
    AddPerfilesComponent,
    AddPerfilesExperienciaComponent,
    ListPerfilesComponent,
    VistaAdministradoComponent,
    ExperienciaModalComponent,
    AddEspecializacionComponent,
    AddDatosbasicosComponent,
    AddFormacionacademicaComponent,
    AnalisisPerfilesComponent,
    CrearCursoComponent,
    CrearPosicionComponent,
    CrearCategoriaComponent,
    ListarCursosComponent,
    EditarCursoComponent,
    ListaPosicionComponent,
    EditarPosicionComponent,
    ListarCategoriaComponent,
    EditarCategoriaComponent,
    CrearSolicitudComponent,
    ListarSolicitudComponent,
    AcreditacionListComponent,
    AcreditacionDetailsComponent,
    AcreditacionNevoComponent,
    UsuariosEditComponent,
    PermisosEditComponent,
    PerfilesEditarComponent,
    AptitudFisicaComponent,
    LibroTareasPosicionComponent,
    AptitudFisicaAddComponent,
    LibroTareasPosicionAddComponent,
    LibroTareasPosicionDetailsComponent,
    AptitudFisicaDetailsComponent,
    GenerarCertificadoComponent,
    ModalCertificadoComponent,
    DialogOverviewExampleDialog,
    AddIdiomaComponent,
    AddExperiencialaboralComponent,
    CambiarPasswordComponent
  ],
  imports: [
    CommonModule,
    CapacitacionesRoutingModule,
    SharedModule,
    NgbModule,
    NgxDatatableModule,
    NgSelectModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatAutocompleteModule,
    HttpClientModule,
    NgxSkeletonLoaderModule,
    NgxPaginationModule,
    MatButtonModule,
    NgxMatDatetimePickerModule,
    NgxMatNativeDateModule,
    NgxMatTimepickerModule,
    MatCardModule,
    MatDividerModule,
    MatProgressBarModule,
    MatButtonModule,
    MatStepperModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatSelectModule,
    MatDialogModule,
    MatSlideToggleModule,
    FormsModule,
    MatButtonToggleModule,
    MatTreeModule,
    DropzoneModule,
    MatTabsModule,
    MatChipsModule,
    NgxCaptchaModule,
    MatRadioModule,
    MatCheckboxModule

  ],
  providers: [
    { provide: DROPZONE_CONFIG, useValue: DEFAULT_DROPZONE_CONFIG },
  ]
})
export class CapacitacionesModuleComponent { }
