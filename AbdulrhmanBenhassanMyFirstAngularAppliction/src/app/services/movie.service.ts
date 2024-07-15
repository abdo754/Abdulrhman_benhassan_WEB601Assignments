import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IContent, contents } from '../data/mock-content';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  getContents(): Observable<IContent[]> {
    return of(contents);
  }

  getContentById(id: number): Observable<IContent | undefined> {
    return of(contents.find((content: { id: number; }) => content.id === id));
  }

  addContent(newContent: IContent): Observable<IContent[]> {
    contents.push(newContent);
    return of(contents);
  }

  updateContent(updatedContent: IContent): Observable<IContent[]> {
    const index = contents.findIndex(content => content.id === updatedContent.id);
    if (index !== -1) {
      contents[index] = updatedContent;
    }
    return of(contents);
  }

  deleteContent(id: number): Observable<IContent | undefined> {
    const index = contents.findIndex(content => content.id === id);
    if (index !== -1) {
      const removed = contents.splice(index, 1);
      return of(removed[0]);
    }
    return of(undefined);
  }
}
