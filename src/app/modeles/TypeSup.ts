import {TypeSlot} from "./TypeSlot";

export class TypeSup {

  private _type : TypeSlot;


  constructor(type: TypeSlot) {
    this._type = type;
  }


  get type(): TypeSlot {
    return this._type;
  }
}
