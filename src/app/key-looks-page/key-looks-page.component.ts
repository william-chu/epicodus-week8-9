import { Component, OnInit } from '@angular/core';
import { KeyLook } from './../models/keylook.model';

@Component({
  selector: 'app-key-looks-page',
  templateUrl: './key-looks-page.component.html',
  styleUrls: ['./key-looks-page.component.css']
})
export class KeyLooksPageComponent implements OnInit {
  keyLooks: KeyLook[] = [
    new KeyLook("08 MAY 2018", "Denim & details - Style them up, pair them back, or simply wear them off the the hanger. Just make them your own.", "https://raw.githubusercontent.com/william-chu/epicodus-week8-9/master/src/assets/key_looks_01.jpg"),
    new KeyLook("07 MAY 2018", "FORM Denim - Made from music. Made for movement.", "https://raw.githubusercontent.com/william-chu/epicodus-week8-9/master/src/assets/key_looks_02.jpg"),
    new KeyLook("29 APRIL 2018", "Keep it simple.", "https://raw.githubusercontent.com/william-chu/epicodus-week8-9/master/src/assets/key_looks_03.jpg"),
    new KeyLook("24 APRIL 2018", "Inspired by the past. Recreated for the present. Cherished for the future. #NeuwDenim", "https://raw.githubusercontent.com/william-chu/epicodus-week8-9/master/src/assets/key_looks_04.jpg"),
    new KeyLook("22 APRIL 2018", "Threaded to the beat. @deathbells_ drummer Sam in our Lux Jacket. Tap to buy direct.", "https://raw.githubusercontent.com/william-chu/epicodus-week8-9/master/src/assets/key_looks_05.jpg"),
    new KeyLook("22 APRIL 2018", "Turn on. Tune in. Drop out...", "https://raw.githubusercontent.com/william-chu/epicodus-week8-9/master/src/assets/key_looks_06.jpg"),
  ];

  constructor() { }

  ngOnInit() {
  }

}
