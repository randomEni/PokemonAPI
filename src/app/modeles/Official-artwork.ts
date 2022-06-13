export class OfficialArtwork {

  public _front_default : string ;

  constructor(front_default: string) {
    this._front_default = front_default;
  }

  get front_default(): string {
    return this._front_default;
  }
}//eo Class
