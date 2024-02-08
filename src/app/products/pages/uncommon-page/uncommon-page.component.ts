import { Component } from '@angular/core';

@Component({
  selector: 'app-common-page',
  templateUrl: './uncommon-page.component.html',
  styles: [
  ]
})
export class UncommonPageComponent {

  // i18nSelect
  public name: string = 'Nandier';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  }

  changeClient(): void {
    this.name = 'Hinata';
    this.gender = 'female'
  }

}
