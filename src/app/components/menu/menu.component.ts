import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private renderer: Renderer2, private el: ElementRef,
    public themeService: ThemeService,
    public authService: AuthService) { }

  ngOnInit() {
    this.themeService.applyTheme();
    console.log(this.isDarkTheme);
  }

  openNav() {
  const sidenav = this.el.nativeElement.querySelector('#sidenav');
  const content = this.el.nativeElement.querySelector('.content');

  this.renderer.setStyle(sidenav, 'width', '250px');
  this.renderer.setStyle(content, 'marginLeft', '250px');
}

closeNav() {
  const sidenav = this.el.nativeElement.querySelector('#sidenav');
  const content = this.el.nativeElement.querySelector('.content');

  this.renderer.setStyle(sidenav, 'width', '0');
  this.renderer.setStyle(content, 'marginLeft', '0');
}
toggleTheme() {
  this.themeService.toggleTheme();
}

isDarkTheme() : boolean {
  return this.themeService.isDarkThemeEnabled();
}

sairSistema(){
  this.authService.logout();
}
}
