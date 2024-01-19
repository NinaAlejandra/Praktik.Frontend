import { Component, OnInit } from '@angular/core';
import { QuoteService } from '../quote.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-my-quotes',
  templateUrl: './my-quotes.component.html',
  styleUrls: ['./my-quotes.component.css']
})
export class MyQuotesComponent implements OnInit {
  myQuotes: any[] = [];

  constructor(private quoteService: QuoteService, private router: Router, public authService: AuthService) { }

  ngOnInit(): void {
    this.loadMyQuotes();
  }

  loadMyQuotes(): void {
    this.myQuotes = this.quoteService.getMyQuotes();
  }

  logout(): void {

    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
