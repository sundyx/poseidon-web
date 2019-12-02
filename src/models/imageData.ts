export class ImageData {
  get url(): string {
    return this._url;
  }
  set url(value: string) {
    this._url = value;
  }
  private _url: string;


}
