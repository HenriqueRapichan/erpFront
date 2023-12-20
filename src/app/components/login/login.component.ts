import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm!: FormGroup;

  constructor(private fb: FormBuilder, public authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      usuario: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    this.authService.login();
    if (this.loginForm.valid) {
      // Lógica de login aqui
      console.log('Login bem-sucedido!', this.loginForm.value);
      this.router.navigate(['/exemplo']);
    } else {
      console.log('Formulário inválido. Verifique os campos.');
    }
  }
}
