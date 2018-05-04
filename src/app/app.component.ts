import { Component } from '@angular/core';
import { SaleItem } from './models/saleitem.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  saleItems: SaleItem[] = [
    new SaleItem(159, "LOU SLIM - RAW SELVEDGE", "https://raw.githubusercontent.com/william-chu/epicodus-week8-9/master/src/assets/lou_slim_pant_main.jpg", "https://raw.githubusercontent.com/william-chu/epicodus-week8-9/master/src/assets/lou_slim_pant_alt.jpg", "pant"),
    new SaleItem(149,"IGGY SKINNY - PERFECTO", "https://raw.githubusercontent.com/william-chu/epicodus-week8-9/master/src/assets/iggy_skinny_pant_main.jpg", "https://raw.githubusercontent.com/william-chu/epicodus-week8-9/master/src/assets/iggy_skinny_pant_alt.jpg", "pant"),
    new SaleItem(89,"UNITY TEE - NAVY LINEN STRIPE", "https://raw.githubusercontent.com/william-chu/epicodus-week8-9/master/src/assets/unity_tee_main.jpg", "https://raw.githubusercontent.com/william-chu/epicodus-week8-9/master/src/assets/unity_tee_alt.jpg", "tee"),
    new SaleItem(199,"TYPE ONE JACKET - BEATEN INDIGO", "https://raw.githubusercontent.com/william-chu/epicodus-week8-9/master/src/assets/type_one_jacket_main.jpg", "https://raw.githubusercontent.com/william-chu/epicodus-week8-9/master/src/assets/type_one_jacket_alt.jpg", "jacket"),
    new SaleItem(649,"RIDER JACKET - BLACK LEATHER", "https://raw.githubusercontent.com/william-chu/epicodus-week8-9/master/src/assets/rider_jacket_main.jpg", "https://raw.githubusercontent.com/william-chu/epicodus-week8-9/master/src/assets/rider_jacket_alt.jpg", "jacket"),
  ]

}
