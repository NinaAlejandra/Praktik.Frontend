import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { ThemeService } from './theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isDarkMode: boolean = false;

  constructor(public authService: AuthService, private router: Router, private themeService: ThemeService) {}

  ngOnInit(): void {
    this.themeService.isDarkMode.subscribe((darkMode) => {
      this.isDarkMode = darkMode;
      document.body.className = darkMode ? 'dark-mode' : 'light-mode';
    });
  }

  toggleDarkMode(): void {
    this.themeService.toggleDarkMode();
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
