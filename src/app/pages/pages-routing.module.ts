import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { PublisherComponent } from './publisher/publisher.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';

const routes: Routes = [
  { path:'../blog', redirectTo: 'blog', pathMatch: 'full' },
  {path:'blog', component: BlogComponent},
  {path:'posts/:id', component: BlogDetailsComponent},
  {path:'publisher', component: PublisherComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
