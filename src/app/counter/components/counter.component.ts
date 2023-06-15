// === "a-" para crear componentes con Snippets---
import { Component} from '@angular/core';
// === Decorador ---------------------------------
@Component({
    selector: 'app-counter',
    template: `
        <!--Contador----------------------------->
        <h3>Counter: {{counter}}</h3>
        <!--Botones de contador ----------------->
        <button (click)="increase(1)"> +1</button>
        <button (click)="reset()" > Reset</button>
        <button (click)="increase(-1)"> -1</button>

    `
})

export class CounterComponent{
    public counter: number = 0;

    increase(value:number):void{ //Incremento y decremento
      this.counter +=value;
    }
  
    reset():void{ //Reinicio
      this.counter = 0;
    }

}