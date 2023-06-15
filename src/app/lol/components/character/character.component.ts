import { Component, EventEmitter, Output } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'lol-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})

export class CharacterComponent {
  @Output()
  public onNewCharacter: EventEmitter<Character>= new EventEmitter(); 

  public character: Character={
    id: uuid(),
    name: '',
    lane: ''
  };

  emitCharacter():void{

    if ( this.character.name.length=== 0 ) return;

    this.onNewCharacter.emit(this.character);

    this.character= {name:'', lane:''};
    
  }
}
