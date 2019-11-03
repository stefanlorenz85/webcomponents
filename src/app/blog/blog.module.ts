import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { PostingService } from './posting.service';
import { PostingsComponent } from './postings/postings.component';

@NgModule({
  declarations: [
    PostingsComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  exports: [
    PostingsComponent,
  ],
  providers: [
    PostingService,
  ]
})
export class BlogModule {
}
