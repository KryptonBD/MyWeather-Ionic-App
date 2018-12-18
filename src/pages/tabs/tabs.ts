import { Component } from '@angular/core';
import { WeatherPage } from "../weather/weather";
import { SettingsPage } from "../settings/settings";

@Component({
  selector: 'page-tabs',
  template: `
    <ion-tabs>
      <ion-tab [root]="weatherPage" tabTitle="Weather" tabIcon="pulse"></ion-tab>
      <ion-tab [root]="settingsPage" tabTitle="Settings" tabIcon="ios-cog"></ion-tab>
    </ion-tabs>
  `
})
export class TabsPage {
  weatherPage = WeatherPage;
  settingsPage = SettingsPage;
}
