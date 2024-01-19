import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css'],
})
export class EditBookComponent implements OnInit {
  editingBook: any = null;

  constructor(private route: ActivatedRoute, private router: Router, private bookService: BookService) {}

  ngOnInit(): void {
    const bookId = this.route.snapshot.params['id'];
    this.bookService.getBookById(bookId).subscribe((book) => {
      this.editingBook = book;
    });
  }

  onEditSubmit(): void {
    this.bookService.updateBook(this.editingBook.id, this.editingBook).subscribe(() => {
      this.router.navigate(['/books']); 
    });
  }

  goBack(): void {
    this.router.navigate(['/books']);
  }
}
