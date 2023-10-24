import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from '../shared/shared.module';
import { BlogComponent } from './blog/blog.component';
import { PublisherComponent } from './publisher/publisher.component';
import { FormsModule } from '@angular/forms';
import { BlogDetailsComponent } from './blog-details/blog-details.component';


@NgModule({
  declarations: [  
    BlogComponent, PublisherComponent, BlogDetailsComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    FormsModule,
    CommonModule
  ]
})
export class PagesModule { }
