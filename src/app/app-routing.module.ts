import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExemploComponent } from './components/exemplo/exemplo.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './services/auth.guard';


const routes: Routes = [
  { path: 'exemplo', component: ExemploComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/exemplo', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
