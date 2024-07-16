import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  isSignIn = true;
  signinEmail = '';
  signinPassword = '';
  signupName = '';
  signupLastName = '';
  signupEmail = '';
  signupPassword = '';

  constructor(private router: Router) {}
  
  showSignIn() {
    this.isSignIn = true;
  }

  showSignUp() {
    this.isSignIn = false;
  }

  onSignIn() {
    if (this.signinEmail && this.signinPassword) {
      localStorage.setItem('user', JSON.stringify({ email: this.signinEmail, password: this.signinPassword }));
      this.router.navigate(['/home']);
    } else {
      alert('Correo o contraseña incorrectos');
    }
  }

  onSignUp() {
    // Por el momento, no se hace nada al registrarse
    alert('Funcionalidad de registro no implementada todavía, Utilice cualquier correo y contraseña en el login.');
  }
}
