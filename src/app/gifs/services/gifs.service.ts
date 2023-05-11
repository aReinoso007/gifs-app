import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _tagHistory: string[]=[];

  constructor() { }

  getTagsHistory(){
    return [...this._tagHistory];
  }

  public searchTag(tag: string){
    this._tagHistory.unshift(tag);
  }
}
