import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styles: [
  ]
})
export class BasicsPageComponent {

  public nameLower: string = 'nandier';
  public nameUpper: string = 'NANDIER';
  public fullName: string = 'nAnDieR rUIz';

  public customDate: Date = new Date();

}
