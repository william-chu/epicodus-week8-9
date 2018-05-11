import { Component, OnInit } from '@angular/core';
import { JeanFitService } from './../jean-fit.service';
import { JeanFit } from './../models/jeanfit.model';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-fit-page',
  templateUrl: './fit-page.component.html',
  styleUrls: ['./fit-page.component.css'],
  providers: [JeanFitService]
})
export class FitPageComponent implements OnInit {
  constructor(private jeanFitService: JeanFitService) { }

  jeanFitList: FirebaseListObservable<any[]> ;
  viewFitsBy: string = "both";
  buttonActive: string = "both";

  ngOnInit() {
    this.jeanFitList = this.jeanFitService.getJeanFits();
  }

  setViewFits(gender) {
    this.viewFitsBy = gender;
  }

  setButtonActive(gender) {
    this.buttonActive = gender;
  }

  checkButtonActive(gender) {
    if (gender === this.buttonActive) {
      return 'btn button-active';
    } else {
      return 'btn';
    }
  }

}
