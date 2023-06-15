// === Services ------------------------------------------------

import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { Character } from '../interfaces/character.interface';
// === 
@Injectable({
    providedIn: 'root'
})

export class LolService { 
    // === Lista de personajes ------------------------------
    public characters: Character[]= [{
        id: uuid(),
        name: 'Rengar',
        lane: 'Jungle'
    },{
        id: uuid(),
        name: 'Viego',
        lane: 'Jungle'
    },{
        id: uuid(),
        name: 'LeeSin',
        lane: 'Jungle'
    }];

    addCharacter(character:Character):void{

    // === "..." ayuda a expandir los iterables en elementos individuales
        const newChar: Character={ ...character, id: uuid() };

        this.characters.push(character);
    }

    // === "splice" se utiliza, mayormente, para eliminar elementos

    deleteCharacterById(id:string){
        this.characters= this.characters.filter(character=> character.id !== id);
    }
}