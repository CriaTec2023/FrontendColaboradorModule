import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from 'src/app/core/post/post.service';
import { Post } from 'src/app/shared/models/Post';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  
  public posts: Post[] = [];

  constructor(private postService: PostService,
    private router: Router
    ) {}


  ngOnInit() {
    this.postService.posts.subscribe((posts) => {
      this.posts = posts;
      console.log(posts)
    });
  }

  goToPost(id: string) {
    this.router.navigate(['posts', id]);
  }
}
