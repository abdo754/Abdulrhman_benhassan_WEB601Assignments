import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IContent, contents } from '../data/mock-content';
@Injectable({
  providedIn: 'root'
})
export class MovieService {
  // Method to return the contents array as an Observable
  getContents(): Observable<IContent[]> {
    return of(contents);
  }

  // Method to get a content item by id
  getContentById(id: number): Observable<IContent | undefined> {
    return of(contents.find(content => content.id === id));
  }

  // Method to add a new content item
  addContent(newContent: IContent): Observable<IContent[]> {
    contents.push(newContent);
    return of(contents);
  }

  // Method to update an existing content item
  updateContent(updatedContent: IContent): Observable<IContent[]> {
    const index = contents.findIndex(content => content.id === updatedContent.id);
    if (index !== -1) {
      contents[index] = updatedContent;
    }
    return of(contents);
  }

  // Method to delete a content item by id
  deleteContent(id: number): Observable<IContent | undefined> {
    const index = contents.findIndex(content => content.id === id);
    if (index !== -1) {
      const removed = contents.splice(index, 1);
      return of(removed[0]);
    }
    return of(undefined);
  }
}
