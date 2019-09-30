import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { PostComponent } from './post/post.component';
import { TasksComponent } from './tasks/tasks.component';
import { AlbumComponent } from './album/album.component';
import { CommentComponent } from './comment/comment.component';
import { ImageComponent } from './image/image.component';
import { AlbumsComponent } from './albums/albums.component';

const routes: Routes = [
  {path:'',component:RegisterComponent},
  {path:'register',component:RegisterComponent},
  {path:'home',component:HomeComponent},
  {path:'post',component:PostComponent},
  {path:'task',component:TasksComponent},
  {path:'album',component:AlbumComponent},
  {path:'comment',component:CommentComponent},
  {path:'image',component:ImageComponent},
  {path:'albums',component:AlbumsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
