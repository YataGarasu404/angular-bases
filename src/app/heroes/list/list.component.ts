import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public heroNames: string[]=['Spiderman','ironman','Hulk','Thor','Hawk Eye'];
  public deleted?: string;

  removeHero():void{
    this.deleted= this.heroNames.pop();
  }

}
