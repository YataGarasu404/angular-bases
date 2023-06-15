import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'lol-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public characterListItem: Character[]= [{
    name:'Talon',
    lane:'Mid'
  }];

  @Output()
  //== Para emitir un evento es necesario importar "@Output"-----------
  public onDelete: EventEmitter<string>= new EventEmitter();

  onDeleteChar(id?:string):void{ // Llama al evento "onDelete"
    if (!id) return; // Si "id" no existe, nunca lo llama
    console.log({id});
    this.onDelete.emit(id);
  }

}
