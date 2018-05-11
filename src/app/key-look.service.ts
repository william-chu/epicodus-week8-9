import { Injectable } from '@angular/core';
import { KeyLook } from './models/keylook.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class KeyLookService {
  keyLooks: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.keyLooks = database.list('KeyLooks');
  }

  getKeyLooks() {
    return this.keyLooks;
  }

}
