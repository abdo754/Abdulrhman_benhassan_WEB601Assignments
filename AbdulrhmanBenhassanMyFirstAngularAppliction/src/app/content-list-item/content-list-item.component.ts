import { Component, Input } from '@angular/core';
import { IContent } from '../data/mock-content';

@Component({
  selector: 'app-content-list-item',
  templateUrl: './content-list-item.component.html',
  styleUrls: ['./content-list-item.component.scss']
})
export class ContentListItemComponent {
  @Input() content!: IContent;
}
