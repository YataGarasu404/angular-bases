import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { LolService } from '../services/lol.service';

@Component({
    selector: 'app-lol-main-page',
    templateUrl: './main-page.component.html'
})

export class MainPageComponent {
// === El método "constructor" se encarga de inicializar las estancias
    constructor( private lolService:LolService ) {}

    get characters(): Character[]{
        return [...this.lolService.characters];
    }
    onDelete(id:string):void{
        this.lolService.deleteCharacterById(id);
    }

    onNewCharacter(character:Character):void{
        this.lolService.addCharacter(character);
    }

}