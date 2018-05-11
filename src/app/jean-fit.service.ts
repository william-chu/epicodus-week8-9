import { Injectable } from '@angular/core';
import { JeanFit } from './models/jeanfit.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class JeanFitService {
  jeanFits: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.jeanFits = database.list('JeanFits');
  }

  getJeanFits() {
    return this.jeanFits;
  }

}
