import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticatedFlag: boolean = false;

  // Simula o processo de login
  login() {
    this.isAuthenticatedFlag = true;
    console.log('Passou aqui login')
  }

  // Simula o processo de logout
  logout() {
    this.isAuthenticatedFlag = false;
    console.log('Saiu do sistema');
  }

  // Verifica se o usuário está autenticado
  isAuthenticated(): boolean {
    return this.isAuthenticatedFlag;
  }
}