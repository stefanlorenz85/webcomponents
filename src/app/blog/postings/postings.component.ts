import { Observable } from 'rxjs';

import {
    Component,
    OnInit,
    ViewEncapsulation,
} from '@angular/core';

import { Posting } from '../_domain/posting';
import { PostingService } from '../posting.service';

@Component({
  selector: 'app-postings',
  templateUrl: './postings.component.html',
  styleUrls: ['./postings.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class PostingsComponent implements OnInit {

  postList$: Observable<Posting[]>;

  constructor(private postingService: PostingService) { }

  ngOnInit() {
    this.postList$ = this.postingService.getCurrentPostings();
  }
}
