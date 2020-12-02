import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SearchapiService } from '../services/searchapi.service';

@Component({
  selector: 'app-timetable-query',
  templateUrl: './timetable-query.component.html',
  styleUrls: ['./timetable-query.component.scss']
})
export class TimetableQueryComponent implements OnInit {

  public queryForm: FormGroup;
  public queryResult: any;
  public queryDetail: any;
  public showmask: boolean = false;

  constructor( private _fb: FormBuilder, private _api: SearchapiService, private _router : Router ) { }

  ngOnInit(): void {
    this.showmask = false;
    this.queryForm = this._fb.group({
      From: [ 'Satigny',[  Validators.required ]],
      To: [ 'Saint-Léonard',[  Validators.required ]],
      Date: [ new Date(),[  Validators.required ]],
      Time: [ new Date(),[  Validators.required ]]
    });
  }

  public async runQuery()
  {
      const queryvalues = this.queryForm.value;
      this.showmask = true;
      console.log('RunQuery ! values => ',queryvalues);
      this.queryResult = await this._api.getRoute(queryvalues.From,queryvalues.To,new Date());
      this.showmask = false;
      this._router.navigate(['result']);
  }

}
