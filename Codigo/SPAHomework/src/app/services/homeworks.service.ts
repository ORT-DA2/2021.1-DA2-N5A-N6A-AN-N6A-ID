import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Exercise } from '../models/Exercise';
import { Homework } from '../models/Homework';

@Injectable({
  providedIn: 'root'
})
export class HomeworksService {

  constructor() { }

  public getHomeworks():Observable<Array<Homework>> {
    return of([
      new Homework("1", "Una tarea", 0, new Date(), [new Exercise("1", "Un Problema", 0)]),
      new Homework("2", "Otra tarea", 0, new Date(), [
          new Exercise("1", "Un Problema", 0),
          new Exercise("2", "Un Problema 2", 0)
      ]),
      new Homework("3", "Otra Otra tarea", 0, new Date(), []),
    ]);
  }
}
