import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchapiService } from '../services/searchapi.service';

@Component({
  selector: 'app-timetable-result',
  templateUrl: './timetable-result.component.html',
  styleUrls: ['./timetable-result.component.scss']
})
export class TimetableResultComponent implements OnInit {

  public queryResult: any;

  constructor( private _api: SearchapiService, private _router: Router ) { }

  ngOnInit(): void {
    this.queryResult = this._api.routeResult;
    if (!this.queryResult.connections) {  this._router.navigate(['']);   }
  }

  getDetail( route )
  {
      this._api.selectedRoute = route ;
      this._router.navigate(['details']);
  }

}
