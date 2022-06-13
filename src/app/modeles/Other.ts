import {OfficialArtwork} from "./Official-artwork";
import {Dream_world} from "./Dream_world";

export class Other {

  private '_official-artwork' : OfficialArtwork;
  // private _dream_world : Dream_world;


  constructor(official_artwork: OfficialArtwork) {
    this["_official-artwork"] = official_artwork;
  }


  get "official-artwork"(): OfficialArtwork {
    return this["_official-artwork"];
  }
}//eo Class
