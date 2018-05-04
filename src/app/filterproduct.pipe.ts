import { Pipe, PipeTransform } from '@angular/core';
import { SaleItem } from './models/saleitem.model';

@Pipe({
  name: "filterProduct",
  pure: false
})

export class FilterProductPipe implements PipeTransform {
  transform(input: SaleItem[], filterby) {
    let output: SaleItem[] = [];
    if (filterby === "jacket") {
      for (let i = 0; i < input.length; i++) {
        if (input[i].productType === "jacket") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (filterby === "pant") {
      for (let i = 0; i < input.length; i++) {
        if (input[i].productType === "pant") {
          output.push(input[i]);
        }
      }
      return output;
    }  else if (filterby === "tee") {
      for (let i = 0; i < input.length; i++) {
        if (input[i].productType === "tee") {
          output.push(input[i]);
        }
      }
      return output;
    }  else if (filterby === "under100") {
      for (let i = 0; i < input.length; i++) {
        if (input[i].price < 100) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
