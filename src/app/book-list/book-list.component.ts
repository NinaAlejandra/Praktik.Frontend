import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit {
  books: any[] = [];
  editingBook: any = null;

  constructor(private bookService: BookService, private router: Router, public authService: AuthService) {}

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks(): void {
    this.bookService.getBooks().subscribe((books) => {
      this.books = books;
    });
  }

  deleteBook(bookId: number): void {
    this.bookService.deleteBook(bookId).subscribe(() => {
      this.getBooks();
    });
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  onAddBook(): void {
    this.router.navigate(['/add-book']);
  }

  onEditBook(bookId: number): void {
    this.router.navigate(['/edit-book', bookId]);
  }
}
