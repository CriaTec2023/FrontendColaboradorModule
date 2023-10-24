import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/core/post/post.service';
import { Post } from 'src/app/shared/models/Post';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent {

  post: Post = {
    id:'',
    title:'',
    shortContent: '',
    content:'',
    date:'',
    imageUrl:''
  }

  private id: string = '';

  constructor(
    private router: ActivatedRoute,
    private postService: PostService
  ) { 

  }

  ngOnInit(): void {
    this.router.params.subscribe(params => {
      this.id = params['id'];
    });
    this.postService.getPost(this.id).subscribe((post) => {
      this.post = post;
    });
  }
}
