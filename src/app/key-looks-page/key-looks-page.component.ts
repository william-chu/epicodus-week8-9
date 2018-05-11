import { Component, OnInit } from '@angular/core';
import { KeyLookService } from './../key-look.service';
import { KeyLook } from './../models/keylook.model';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-key-looks-page',
  templateUrl: './key-looks-page.component.html',
  styleUrls: ['./key-looks-page.component.css'],
  providers: [KeyLookService]
})
export class KeyLooksPageComponent implements OnInit {
  constructor(private keyLookService: KeyLookService) { }

  keyLooks: FirebaseListObservable<any[]>;

  ngOnInit() {
    this.keyLooks = this.keyLookService.getKeyLooks();
  }

}
