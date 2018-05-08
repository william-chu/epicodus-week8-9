import { Component, OnInit } from '@angular/core';
import { JeanFit } from './../models/jeanfit.model';

@Component({
  selector: 'app-fit-page',
  templateUrl: './fit-page.component.html',
  styleUrls: ['./fit-page.component.css']
})
export class FitPageComponent implements OnInit {
  viewFitsBy: string = "both";

  setViewFits(gender) {
    this.viewFitsBy = gender;
  }

  pageLoad() {
    return 'page-load';
  }

  jeanFitList: JeanFit[] = [
    new JeanFit("female", "BOWERY", "Bowery is our mid rise skinny jean and a flattering twist on the standard skinny jean. Pair this jean with a tee and box-fresh trainers or boots for an effortless day-to-day look.", "https://raw.githubusercontent.com/william-chu/epicodus-week8-9/master/src/assets/bowery_fit_women.jpg"),
    new JeanFit("female", "SMITH", "Our classic high skinny jean. Fit as just as tight as on the mid rised Bowery. For you who prefer a higher rise and still like a skinny silhouette.", "https://raw.githubusercontent.com/william-chu/epicodus-week8-9/master/src/assets/smith_fit_women.jpg"),
    new JeanFit("female", "MARILYN", "With a 27cm rise and tapered skinny leg, the Marilyn is our iconic super high-waisted skinny fit. Inspired by Marilyn Monroe.", "https://raw.githubusercontent.com/william-chu/epicodus-week8-9/master/src/assets/marilyn_fit_women.jpg"),
    new JeanFit("female", "LEXI", "If you like it fitted and not too tight - Lexi is the fit for you. Lexi are a high waisted jean with a straight leg. A jeans classic.", "https://raw.githubusercontent.com/william-chu/epicodus-week8-9/master/src/assets/lexi_fit_women.jpg"),
    new JeanFit("female", "LOLA", "Our high rised mom-jean. The loose and tapered leg offering a relaxed silhouette and a modern look. Wear these with ease together with a white tee and a low top sneaker or a minimalistic ballerina shoe.", "https://raw.githubusercontent.com/william-chu/epicodus-week8-9/master/src/assets/lola_fit_women.jpg"),
    new JeanFit("male", "REBEL", "With a relaxed, longer rise and super skinny tapered leg, this is the ultimate fit for 21st century rebels. A nod to the rockers of the Scandinavian Underground metal scene. Rebel is designed to fit perfectly whether worn low or high.", "https://raw.githubusercontent.com/william-chu/epicodus-week8-9/master/src/assets/rebel_fit_men.jpg"),
    new JeanFit("male", "IGGY", "This is our global bestseller. A modern and skinny fit featured with tapered legs. Match your Iggy’s with a pair of black boots or white sneakers. Fit inspired by the jean Iggy Pop wore on the cover of the album ’The idiot’.", "https://raw.githubusercontent.com/william-chu/epicodus-week8-9/master/src/assets/iggy_fit_men.jpg"),
    new JeanFit("male", "LOU", "Lou are a classic 5-pocket jean in  a regular fit. Fit are not too tight, not too loose and are a bit tapered from leg down to the ankle. Our everyday jean that can be worn with whatever whenever.", "https://raw.githubusercontent.com/william-chu/epicodus-week8-9/master/src/assets/lou_fit_men.jpg"),
    new JeanFit("male", "SERGE", "For spring 18 we’re introducing a new, straight fit with slightly tapered legs called Serge. Perfect if you’re looking to replace your skinny jeans with a straight classic. Match these jeans together with a pair of sneakers and you’re good to go.", "https://raw.githubusercontent.com/william-chu/epicodus-week8-9/master/src/assets/serge_fit_men.jpg"),
    new JeanFit("male", "STUDIO", "A relaxed fit with cropped legs. If you’re looking for something else than skinny jeans we suggest that you’ll try this. It’s something else.", "https://raw.githubusercontent.com/william-chu/epicodus-week8-9/master/src/assets/studio_fit_men.jpg"),
  ];
  constructor() { }

  ngOnInit() {
  }

}
