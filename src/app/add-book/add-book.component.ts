import { Component } from '@angular/core';
import { BookService } from '../book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css'],
})
export class AddBookComponent {
  newBook: any = { publishedYear: '' };

  constructor(private bookService: BookService, private router: Router) {}

  onSubmit(form: any): void {
    this.bookService.createBook(this.newBook).subscribe((response) => {
      form.resetForm();
      this.router.navigate(['/books']); 
    });
  }

  goBack(): void {
    this.router.navigate(['/books']);
  }
}
