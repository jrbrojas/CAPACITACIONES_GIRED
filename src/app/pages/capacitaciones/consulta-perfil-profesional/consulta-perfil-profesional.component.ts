import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReCaptcha2Component } from 'ngx-captcha';

@Component({
  selector: 'app-consulta-perfil-profesional',
  templateUrl: './consulta-perfil-profesional.component.html',
  styleUrls: ['./consulta-perfil-profesional.component.scss']
})
export class ConsultaPerfilProfesionalComponent implements OnInit {

  @ViewChild('captchaElem', { static: false }) captchaElem: ReCaptcha2Component;
  siteKey: string = "6LeP9mMiAAAAACMQchre10gdxqEG5S6KYSdpzR5j";
  aFormGroup: FormGroup;
  biRecatcha: boolean = false;
  data: any[] = [];

  public boolOp = true

  constructor(private formBuilder: FormBuilder) {
    this.aFormGroup = this.formBuilder.group({
      recaptcha: ['', Validators.required]
    });
 }

  ngOnInit(): void {
      this.data.push({
        'id': 1,
        'nombre': 'Jose Rojas',
        'numeroDocumento': '41534099',
        'titulo': 'Ingreniero ',
        'fecha': '01-2001',
        'institucion': 'Indeci'
      }, {
        'id': 2,
        'nombre': 'Jose Rojas',
        'numeroDocumento': '41534099',
        'titulo': 'USAR',
        'fecha': '12-2005 ',
        'institucion': 'Indeci'
      }, {
        'id': 3,
        'nombre': 'Jose Rojas',
        'numeroDocumento': '41534099',
        'titulo': 'GIRED',
        'fecha': '11-2015',
        'institucion': 'Indeci'
      }, {
        'id': 4,
        'nombre': 'Jose Rojas',
        'numeroDocumento': '41534099',
        'titulo': 'Combatientes del Fuego',
        'fecha': '04-2022',
        'institucion': 'Indeci'
      },{
        'id': 5,
        'nombre': 'Jose Rojas',
        'numeroDocumento': '41534099',
        'titulo': 'D-311 Despachador de Ataque Inicial',
        'fecha': '10-2022',
        'institucion': 'COEN ESPAÑA'
      },{
        'id': 6,
        'nombre': 'Jose Rojas',
        'numeroDocumento': '41534099',
        'titulo': 'P-101 Prevención y Educación de incendios Forestales',
        'fecha': '10-2022',
        'institucion': 'COEN ESPAÑA'
      }
      );
  }

  nuevaBusqueda() {
    this.captchaElem.reloadCaptcha();
    this.biRecatcha = false;
    this.boolOp = false;
  }

  ngAceptaCapcha (event: any) {
    console.log(event);
    this.biRecatcha = false;
    if (event != null && event != undefined)
      this.biRecatcha = true;
  }

  imprimir() {
    let popupWinindow
        let innerContents = document.getElementById('imprimir').innerHTML;
        popupWinindow = window.open('', '_blank', 'width=600,height=700,scrollbars=no,menubar=no,toolbar=no,location=no,status=no,titlebar=no');
        popupWinindow.document.open();
        popupWinindow.document.write('<html><head><link rel="stylesheet" type="text/css" href="style.scss" /></head><body onload="window.print()">' + innerContents + '</html>');
        popupWinindow.document.close();
  }
  
}
