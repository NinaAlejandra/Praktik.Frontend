// theme.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private darkMode = new BehaviorSubject<boolean>(false);
  isDarkMode = this.darkMode.asObservable();

  private iconState = new BehaviorSubject<string>(''); 
  currentIconState = this.iconState.asObservable(); 

  toggleDarkMode(): void {
    this.darkMode.next(!this.darkMode.value);
    this.updateIconState(); 
  }

  getCurrentMode(): boolean {
    return this.darkMode.value;
  }

  private updateIconState(): void {   this.iconState.next(this.darkMode.value ? 'dark-icon' : 'light-icon');
  }
}
