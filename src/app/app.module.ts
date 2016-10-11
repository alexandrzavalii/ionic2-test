import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';


import { ArchiveList } from '../pages/archive-list/archive-list';
import { TabsPage } from '../pages/tabs/tabs';
import { NewsPage } from '../pages/news-list/news-list';

import { AngularFireModule } from 'angularfire2';

export const firebaseConfig = {
  apiKey: '7Uw2HXS5IDAw95zO6QtSf8ycMi4FITXv8jpst9fZ',
  authDomain: 'danubesoft-test.firebaseapp.com',
  databaseURL: 'https://danubesoft-test.firebaseio.com',
  storageBucket: 'danubesoft-test'
};

@NgModule({
  declarations: [
    MyApp,
    ArchiveList,
    NewsPage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ArchiveList,
    TabsPage,
    NewsPage
  ],
  providers: []
})
export class AppModule {}
