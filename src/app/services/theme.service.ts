import { Injectable } from '@angular/core';

const THEME_KEY = 'themePreference';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private isDarkTheme = false;

  constructor() {
    // Carregar a preferência de tema salva no localStorage, se existir.
    const savedTheme = localStorage.getItem(THEME_KEY);
    if (savedTheme) {
      this.isDarkTheme = savedTheme === 'dark';
    }
    // Aplicar o tema inicial.
    this.applyTheme();
  }

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    this.saveThemePreference();
    this.applyTheme();
  }

  isDarkThemeEnabled() {
    return this.isDarkTheme;
  }

  applyTheme() {
    document.body.classList.toggle('dark-theme', this.isDarkTheme);
  }

  saveThemePreference() {
    localStorage.setItem(THEME_KEY, this.isDarkTheme ? 'dark' : 'light');
  }
}