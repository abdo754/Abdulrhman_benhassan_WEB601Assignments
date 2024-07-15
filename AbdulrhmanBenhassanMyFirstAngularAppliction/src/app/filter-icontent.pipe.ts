import { Pipe, PipeTransform } from '@angular/core';
import { IContent } from './data/mock-content';

@Pipe({
  name: 'filterIContent'
})
export class FilterIContentPipe implements PipeTransform {
  transform(contents: IContent[], type?: string): IContent[] {
    if (!type) {
      return contents.filter(content => !content.type);
    }
    return contents.filter(content => content.type === type);
  }
}
