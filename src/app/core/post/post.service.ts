import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { Post } from 'src/app/shared/models/Post';




@Injectable({
  providedIn: 'root'
})
export class PostService {

  private readonly API_URL = 'http://localhost:8080/content';

  public posts = new Observable<Post[]>()



  constructor(
    private http: HttpClient
  ) {
    this.posts = this.setPost();
  }


  private setPost(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.API_URL}/getContent`);
  }

  public getPosts(): Observable<Post[]> {
    return this.posts;
  }

  public getPost(id: string): Observable<Post> {
    return this.posts.pipe(
      map((posts: Post[]) => posts.find(post => post.id === id)!)
    );
  }

  public creatPost(post:Post) {
    
    this.http.post<Post>(`${this.API_URL}/newContent`, post).subscribe((post) => {console.log(post)});
  }

}
