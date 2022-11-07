import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/shared/services/alert.service';
import { TYPE_ALERT } from 'src/app/shared/services/config';

@Component({
  selector: 'app-aptitud-fisica',
  templateUrl: './aptitud-fisica.component.html',
  styleUrls: ['./aptitud-fisica.component.scss']
})
export class AptitudFisicaComponent implements OnInit {

  public data : any = [
    {
      id: 1,
      nombre: "Arduo",
      descripccion: "Descripcion de Arduo"
    },
    {
      id: 2,
      nombre: "Moderado",
      descripccion: "Descripcion de Moderado"
    },
    {
      id: 3,
      nombre: "Ligero",
      descripccion: "Descripcion de Ligero"
    },
  ]

  constructor(
    private router : Router,
    private alert : AlertService
  ) { }

  ngOnInit(): void {
  }

  createPermission(){
    this.router.navigate(['/capacitaciones/aptitud-fisica-add']);
  }

  editPermission(){
    this.router.navigate(['/capacitaciones/aptitud-fisica-details']);
  }

  eliminarPermisos(){
    this.alert.questionAlertConfirm(
      '¿Está seguro que desea eliminar?',
      '',
      'Si, Eliminar',
      TYPE_ALERT.QUESTION
    ).then(
      (result) => {
        if (result.value) {
          this.router.navigate(['/capacitaciones/aptitud-fisica']).then(r => r)
        } else {
  
        }
      }
    );
  }

}
