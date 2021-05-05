import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { LoginComponent } from './login/login.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieoverviewComponent } from './movieoverview/movieoverview.component';
import { MoviecontentComponent } from './moviecontent/moviecontent.component';
import { BarComponent } from './bar/bar.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    LoginComponent,
    MovieDetailsComponent,
    MovieoverviewComponent,
    MoviecontentComponent,
    BarComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
