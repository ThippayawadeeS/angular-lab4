import { ANALYZE_FOR_ENTRY_COMPONENTS, Component,Input } from '@angular/core';
import { title } from 'process';


@Component({
    selector: 'app-home',
    templateUrl: './todolist.component.html',
    styleUrls: ['./todolist.component.css']
})

export class HomeComponent {
    @Input ()
    title: string;
    index: number;
    count = 0;
    items = [1,2,3,4,5];
    todolists = ["Coffee","Breakfast"];
    constructor () {}
    ToAdd() {
        this.todolists.splice(this.todolists.length,0, this.title);
    }
    Todelete(index) {
        this.todolists.splice(index,1);
    }
}