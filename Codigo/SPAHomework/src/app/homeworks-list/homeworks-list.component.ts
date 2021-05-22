import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Homework } from '../models/Homework';
import { HomeworksService } from '../services/homeworks.service';

@Component({
  selector: 'app-homeworks-list',
  templateUrl: './homeworks-list.component.html',
  styleUrls: ['./homeworks-list.component.scss']
})
export class HomeworksListComponent implements OnInit {
    pageTitle:string = "Homeworks List";
    listFilter:string = "";
    showExercises:boolean = false;
    homeworks:Observable<Array<Homework>>;

    constructor(private _homeworks: HomeworksService) { 
        this.homeworks = _homeworks.getHomeworks();
    }

    ngOnInit() {

    }

    public toggleExercises(): void {
        this.showExercises = !this.showExercises;
    }

}