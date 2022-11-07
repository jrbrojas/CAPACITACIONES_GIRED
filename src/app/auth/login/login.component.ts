import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public show: boolean = false;
  public loginForm: FormGroup;
  public errorMessage: any;

  constructor(public authService: AuthService, private fb: FormBuilder, public router: Router) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  showPassword() {
    this.show = !this.show;
  }

  login(type : number) {
    localStorage.setItem("tipoLogin", JSON.stringify(type))    
    localStorage.setItem("actualizar", JSON.stringify(true))    
    if(type == 1) 
      this.router.navigate(['/simulaciones/seguridad/usuarios']);
    else
      this.router.navigate(['/capacitaciones/perfil-postulante/vista-administrado']);
  }

  forgetPassword(){
    this.router.navigate(['/forget-password']);
  }

  register(){
    this.router.navigate(['/register']);
  }

  hide = true;

}
