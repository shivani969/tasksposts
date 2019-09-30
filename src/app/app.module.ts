import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { PostComponent } from './post/post.component';
import { TasksComponent } from './tasks/tasks.component';
import { AlbumComponent } from './album/album.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Post1Component } from './post1/post1.component';
import { CommentComponent } from './comment/comment.component';
import { ImageComponent } from './image/image.component';
import { AlbumsComponent } from './albums/albums.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    PostComponent,
    TasksComponent,
    AlbumComponent,
    Post1Component,
    CommentComponent,
    ImageComponent,
    AlbumsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
