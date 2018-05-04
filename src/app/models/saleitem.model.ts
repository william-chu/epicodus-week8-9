export class SaleItem {
  inStock: boolean = true;
  inventory: number = 1;

  constructor(public price: number, public imgMain: string, public imgAlt: string, productType: string) {

  }
  
}
