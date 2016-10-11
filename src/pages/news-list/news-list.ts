import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'news-list',
  templateUrl: 'news-list.html'
})
export class NewsPage {
  news: FirebaseListObservable<any[]>;
  constructor(public navCtrl: NavController, af: AngularFire) {
    this.news = af.database.list('/news', {
      query: {
        orderByChild: 'date',
      }
    })
  }
  toArchive(oneNews: any): void {
    this.news.update(oneNews.$key, { "archived": true }).then(() => console.log('add to archive', oneNews.title));
  }
}
