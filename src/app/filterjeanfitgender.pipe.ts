import { Pipe, PipeTransform } from '@angular/core';
import { JeanFit } from './models/jeanfit.model';

@Pipe({
  name: "filterJeanFitGender",
  pure: false
})

export class FilterJeanFitGenderPipe implements PipeTransform {
  transform(input: JeanFit[], filterbygender) {
    let output: JeanFit[] = [];
    if (input === null) {
      return;
    }
    else if (filterbygender === "male") {
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
