import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MoviecontentComponent } from './Moviecontent/moviecontent.component';
import { MovieoverviewComponent } from './Movieoverview/movieoverview.Component';
import { MovieDetailsComponent } from './moviedetails/moviedetails.component';




  const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: '', component: MoviecontentComponent },
    { path: 'movieoverview', component: MovieoverviewComponent },
    { path: 'movie-details/:movieId', component: MovieDetailsComponent },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
