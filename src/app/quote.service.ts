import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {
  private myQuotes: any[] = [
    { id: 1, author: 'Eleanor Roosevelt', text: "The future belongs to those who believe in the beauty of their dreams." },
    { id: 2, author: 'Maya Angelou',text: "I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel." },
    { id: 3, author: 'Malala Yousafza',text: "We realize the importance of our voices only when we are silenced." },
    { id: 4, author: 'Rosa Parks',text: "I have learned over the years that when one's mind is made up, this diminishes fear; knowing what must be done does away with fear." },
    { id: 5, author: 'Marie Curie',text: "Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less." }
  ];

  constructor() { }

  getMyQuotes(): any[] {
    return this.myQuotes;
  }

  addQuote(quote: any): void {
    this.myQuotes.push(quote);
  }
}
