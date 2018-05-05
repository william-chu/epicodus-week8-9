export class SaleItem {
  inStock = this.checkInstock();
  displayImage = this.imgMain;
  constructor(public productId: number, public price: number, public name: string, public imgMain: string, public imgAlt: string, public productType: string, public inventory: number) {}

  checkInstock() {
    if (this.inventory > 0) {
      return true;
    } else {
      return null;
    }
  }

}
