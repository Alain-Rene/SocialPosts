import { Component } from '@angular/core';
import { Post } from '../../models/post';
import { SinglePostComponent } from '../single-post/single-post.component';
import { PostFormComponent } from '../post-form/post-form.component';

@Component({
  selector: 'app-social-posts',
  standalone: true,
  imports: [SinglePostComponent, PostFormComponent],
  templateUrl: './social-posts.component.html',
  styleUrl: './social-posts.component.css'
})
export class SocialPostsComponent {
  AllPosts: Post[] = [
    {
      title: "Morning Motivation",
      thought: "Start your day with a positive mindset and watch how it transforms everything!"
    },
    {
      title: "Tech Tip Tuesday",
      thought: "Always keep learning! Today I’m exploring the power of TypeScript generics. 🚀"
    },
    {
      title: "Throwback Thursday",
      thought: "Remember when coding in C# felt like an adventure? Look at how far we’ve come! 💻"
    },
    {
      title: "Weekend Vibes",
      thought: "Take a break, recharge, and come back stronger. Self-care is productive too!"
    },
    {
      title: "Code Debugging Wisdom",
      thought: "When in doubt, print it out! Debugging starts with understanding the flow."
    },
    {
      title: "Gaming Grind",
      thought: "Finally unlocked that legendary weapon! Now it's time to level up and take on the final boss! 🎮🔥"
    }
  ];

  onSubmit(newPost: Post){
    this.AllPosts.unshift(newPost);
  }

  DeletePost(i:Post){
    let index:number = this.AllPosts.findIndex(x => x === i);
    this.AllPosts.splice(index, 1);
  }
}
