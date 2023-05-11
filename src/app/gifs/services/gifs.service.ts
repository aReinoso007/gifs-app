import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _tagsHistory: string[]=[];

  constructor(
    private http: HttpClient
  ) { }

  get tagsHistory() {
    return [...this._tagsHistory];
  }

  public searchTag(tag: string){
    if(tag.length === 0 ) return ;
    this.organizeHistory(tag);
    const params = new HttpParams()
    .set('api_key', environment.apiKey)
    .set('limit', '10')
    .set('q', tag)
    this.http.get<any[]>(`${environment.apiURL}/search`, {params: params})
    .subscribe( res =>{
      console.log({res})
    })
  }

  private organizeHistory(tag: string){
    tag = tag.toLowerCase();

    if ( this._tagsHistory.includes( tag ) ) {
      this._tagsHistory = this._tagsHistory.filter( (oldTag) => oldTag !== tag )
    }
    this._tagsHistory.unshift( tag );
    this._tagsHistory = this.tagsHistory.splice(0,10);
  }
}
