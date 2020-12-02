import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchapiService } from '../services/searchapi.service';

@Component({
  selector: 'app-timetable-details',
  templateUrl: './timetable-details.component.html',
  styleUrls: ['./timetable-details.component.scss']
})
export class TimetableDetailsComponent implements OnInit {

  public route: any;

  constructor( public _searchapi : SearchapiService, private _router: Router) { }

  ngOnInit(): void {
    this.route = this._searchapi.selectedRoute;
    if (!this.route.departure) {  this._router.navigate(['']);   }
    console.log('Route : ',this.route);
  }

  

}
