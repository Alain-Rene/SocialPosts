import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Post } from '../../models/post';

@Component({
  selector: 'app-single-post',
  standalone: true,
  imports: [],
  templateUrl: './single-post.component.html',
  styleUrl: './single-post.component.css'
})
export class SinglePostComponent {
  @Input() DisplayPost: Post = {} as Post;

  @Output() PostInfo = new EventEmitter<Post>();

  EmitPost(){
    this.PostInfo.emit(this.DisplayPost);
  }
}
