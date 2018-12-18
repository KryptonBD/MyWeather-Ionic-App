import {Component} from '@angular/core';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  currentCity = localStorage.city;
  onUpdate(city) {
    localStorage.city = city.value;
  }

  ionViewDidEnter() {
    this.currentCity = localStorage.city;
  }


}
