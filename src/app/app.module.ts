import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'; 
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'; 
import { AppRoutingModule } from './app-routing.module'; 
import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { LoginComponent } from './login/login.component';
import { JwtInterceptor } from './jwt.interceptor';
import { MyQuotesComponent } from './my-quotes/my-quotes.component';
import { QuoteService } from './quote.service';
import { ThemeService } from './theme.service';
import { AuthGuard } from './auth.guard';
import { AddBookComponent } from './add-book/add-book.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    LoginComponent,
    MyQuotesComponent,
    AddBookComponent,
    EditBookComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule, 
    RouterModule, 
    AppRoutingModule, FontAwesomeModule, NgbModule
  ],
  providers: [   {
    provide: HTTP_INTERCEPTORS,
    useClass: JwtInterceptor,
    multi: true,
  }, QuoteService, ThemeService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }