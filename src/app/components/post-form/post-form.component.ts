import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Post } from '../../models/post';

@Component({
  selector: 'app-post-form',
  standalone: true,
  imports: [FormsModule, PostFormComponent],
  templateUrl: './post-form.component.html',
  styleUrl: './post-form.component.css'
})
export class PostFormComponent {
  @Output() PostCreated = new EventEmitter<Post>();
  formPost: Post = {} as Post;
  display = false;

  toggleDisplay(){
    this.display = !this.display;
  }
  EmitCreated(){
    let newPost = {...this.formPost};
    this.PostCreated.emit(newPost);
    this.formPost = {} as Post;
    this.display = false;
  }
}
