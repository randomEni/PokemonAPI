import {Sprites} from "./Sprites";
import {TypeSup} from "./TypeSup";
export class Pokemon {

  private _id: number;
  private _name: string;;
  private _height: number;
  private _weight: number;
  private _sprites: Sprites;
  private _types : TypeSup [];


  constructor(id: number, name: string, height: number, weight: number, sprites: Sprites , types : TypeSup [] ) {
    this._id = id;
    this._name = name;
    this._height = height;
    this._weight = weight;
    this._sprites = sprites;
    this._types = types;

  }

  get id(): number {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get height(): number {
    return this._height;
  }

  get weight(): number {
    return this._weight;
  }

  get sprites(): Sprites {
    return this._sprites;
  }


  get types(): TypeSup [] {
    return this._types;
  }

}//eo Class


