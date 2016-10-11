import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'archive-list',
  templateUrl: 'archive-list.html'
})
export class ArchiveList {
  news: FirebaseListObservable<any[]>;
  constructor(public navCtrl: NavController, af: AngularFire) {
    this.news = af.database.list('/news', {
      query: {
        orderByChild: 'archived',
        equalTo: true,
      }
    });
  }

  deleteNews(archivedNews: any): void {
    this.news.remove(archivedNews.$key).then(() => console.log('deleted from database', archivedNews.title));
  }
  addToList(archivedNews: any): void {
    this.news.update(archivedNews.$key, { "archived": false }).then(() => console.log('add to list', archivedNews.title));
  }
}
