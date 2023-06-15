import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
// === Class ----------------------------------
export class HeroComponent {
  public name: string= 'Ironman';
  public age: number= 45;

   get capitalizeName():string{ // Método "get"
    return this.name.toUpperCase();
   }
   // === Métodos -----------------------------
   getHeroDescription():string { 
    //En return, se concatena con "``" y "${}"
    return `${this.name} - ${this.age}`;
   }

   changeHero():void{
      this.name = 'Spiderman';
   }

   changeAge(){
      this.age = 25;
   }

   reset():void{
      this.name = 'Ironman';
      this.age = 45;
   }
}
