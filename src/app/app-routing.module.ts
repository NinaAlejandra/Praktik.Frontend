import { NgModule } from '@angular/core';
import { AuthGuard } from './auth.guard';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { BookListComponent } from './book-list/book-list.component';
import { MyQuotesComponent } from './my-quotes/my-quotes.component';
import { AddBookComponent } from './add-book/add-book.component';
import { EditBookComponent } from './edit-book/edit-book.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'books', component: BookListComponent, canActivate: [AuthGuard] },
  { path: 'my-quotes', component: MyQuotesComponent, canActivate: [AuthGuard] },
  { path: 'add-book', component: AddBookComponent, canActivate: [AuthGuard] },
  { path: 'edit-book/:id', component: EditBookComponent, canActivate: [AuthGuard] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
