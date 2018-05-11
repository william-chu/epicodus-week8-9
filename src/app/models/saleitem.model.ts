export class SaleItem {
  imgDisplay = this.imgMain;
  constructor(
    public productId: number,
    public price: number,
    public name: string,
    public description: string,
    public imgMain: string,
    public imgAlt: string,
    public imgBack: string,
    public productType: string,
    public inventory: number
  ) {}

}
