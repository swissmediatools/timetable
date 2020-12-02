import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchapiService {

  private _completionApi: string = 'https://timetable.search.ch/api/completion.fr.json?';
  private _routeApi: string = 'https://timetable.search.ch/api/route.fr.json?';
  public routeResult: any = null;
  public selectedRoute: number = null;

  constructor( public http: HttpClient ) { }

  public async getRoute( from: string, to: string, dt: Date ){
    const thisApi = this._routeApi + 'from=' + from + '&to=' + to;
    console.log('thisApi : ',thisApi);
    const result = await this.http.get(thisApi).toPromise();
    this.routeResult = result;
    return result;
  }

  public async completeCity( term:string )
  {
    const thisApi = this._completionApi + 'term=' + term;
    const result = await this.http.get(thisApi).toPromise();
    return result;
  }
}
