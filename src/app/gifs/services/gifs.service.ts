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
    if(tag.length === 0 ) return;
    this._tagHistory.unshift(tag);
  }
}
