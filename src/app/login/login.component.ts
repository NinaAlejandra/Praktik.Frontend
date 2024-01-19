// login.component.ts
import { Component, Inject } from '@angular/core';
import { AuthService } from '../auth.service';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router'; 
import { of } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(@Inject(AuthService) private authService: AuthService, private router: Router ) {}

  login(): void {
    if (!this.username || !this.password) {
      this.errorMessage = 'Användarnamn och lösenord är obligatoriska.';
      return;
    }

    this.authService.login(this.username, this.password).pipe(
      catchError((error) => {
        this.errorMessage = 'Inloggningen misslyckades. Kontrollera användarnamn och lösenord.';
        return of(null); 
      })
    ).subscribe((token) => {
      if (token) {
        this.authService.setToken(token.access_token);
        this.router.navigate(['/books']);
      }
    });
  }
}
