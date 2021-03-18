import { Component, ViewChild } from '@angular/core';
import { IonTabs } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
})
export class TabsPage {
  @ViewChild('tabs') tabs: IonTabs;
  selectedTab: string = '';
  progress = 42;

  constructor() {}

  setSelectedTab() {
    this.selectedTab = this.tabs.getSelected();
  }
}
