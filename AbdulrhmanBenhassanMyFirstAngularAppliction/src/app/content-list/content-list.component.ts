import { Component } from '@angular/core';
import { contents, IContent } from '../data/mock-content';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent {
  
  contents: IContent[] = contents;
}
