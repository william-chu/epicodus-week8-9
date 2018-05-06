import { Pipe, PipeTransform } from '@angular/core';
import { SaleItem } from './models/saleitem.model';
import { JeanFit } from './models/jeanfit.model';

@Pipe({
  name: "filterGender",
  pure: false
})

export class FilterJeanFitGenderPipe implements PipeTransform {
  transform(input: JeanFit[], filterbygender) {
    let output: JeanFit[] = [];
    if (filterbygender === "male") {
      for (let i = 0; i < input.length; i++) {
        if (input[i].gender === "male") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (filterbygender === "female") {
      for (let i = 0; i < input.length; i++) {
        if (input[i].gender === "female") {
          output.push(input[i]);
        }
      }
      return output;
    }
  }
}
