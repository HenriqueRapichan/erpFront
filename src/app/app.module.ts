import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgbDropdownModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { ExemploComponent } from './components/exemplo/exemplo.component';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { ReactiveFormsModule, FormsModule  } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { CarregandoComponent } from './components/carregando/carregando.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ExemploComponent,
    LoginComponent,
    CarregandoComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgbDropdownModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
