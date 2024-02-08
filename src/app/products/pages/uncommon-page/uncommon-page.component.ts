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

  // i18nPlural
  public clients: string[] = ['nandier', 'juan', 'eren', 'armin', 'sasuke', 'light'];
  public clientsMap = {
    '=0': 'No tenemos ningun cliente esperando.',
    '=1': 'Tenemos un cliente esperando.',
    '=2': 'Tenemos 2 personas esperando',
    'other': 'Tenemos # clientes esperando',
  }

  deleteClient(): void {
    this.clients.pop();
  }

}
