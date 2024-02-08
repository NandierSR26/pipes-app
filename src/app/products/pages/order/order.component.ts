import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interfaces';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styles: [
  ]
})
export class OrderComponent {

  public isUpperCase: boolean = false;

  public heroes: Hero[] = [
    {
      name: 'Superman',
      canFly: true,
      color: Color.blue
    },
    {
      name: 'Batman',
      canFly: false,
      color: Color.black
    },
    {
      name: 'Daredevil',
      canFly: false,
      color: Color.red
    },
    {
      name: 'Hulk',
      canFly: false,
      color: Color.green
    },
    {
      name: 'Kick-ass',
      canFly: false,
      color: Color.green
    },
  ]

  toggleUppercase(): void {
    this.isUpperCase = !this.isUpperCase
  }

}
