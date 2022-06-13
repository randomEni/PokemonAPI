import {Other} from "./Other";

export class Sprites {

  private _other : Other ;

  constructor(other: Other) {
    this._other = other;
  }

  get other(): Other {
    return this._other;
  }

}//eo Class
