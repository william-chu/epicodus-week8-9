export class SaleItem {
  inStock = this.checkInstock();
  constructor(public price: number, public name: string, public imgMain: string, public imgAlt: string, public productType: string, public inventory: number) {}

  checkInstock() {
    if (this.inventory > 0) {
      return true;
    } else {
      return null;
    }
  }

}
