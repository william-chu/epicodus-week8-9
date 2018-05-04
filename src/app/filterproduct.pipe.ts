import { Pipe, PipeTransform } from '@angular/core';
import { SaleItem } from './models/models.saleitem.model';

@Pipe({
  name: "filterproduct",
  pure: false
})

export class FilterProductPipe implements PipeTransform {
  transform(input: SaleItem[], filterby) {
    let output: SaleItem[];
    for (let i = 0; i < input.length; i++) {
      if (input[i].productType === "pant") {
        output.push(input[i]);
      }
    }
    return output;
  }
}
