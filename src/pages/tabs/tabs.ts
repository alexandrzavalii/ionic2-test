import { Component } from '@angular/core';

import { NewsPage } from '../news-list/news-list';
import { ArchiveList } from '../archive-list/archive-list';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = NewsPage;
  tab2Root: any = ArchiveList;

  constructor() {

  }
}
