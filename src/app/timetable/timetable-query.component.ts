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
  public cityfrom: any;
  public cityto: any;

  constructor( private _fb: FormBuilder, private _api: SearchapiService, private _router : Router ) { }

  ngOnInit(): void {
    this.queryForm = this._fb.group({
      From: [ '',[  Validators.required ]],
      To: [ '',[  Validators.required ]],
      Date: [ new Date(),[  Validators.required ]],
      Time: [ new Date(),[  Validators.required ]]
    });
  }

  public async runQuery()
  {
      const queryvalues = this.queryForm.value;
      console.log('RunQuery ! values => ',queryvalues);
      this.queryResult = await this._api.getRoute(queryvalues.From,queryvalues.To,new Date());
      this._router.navigate(['result']);
  }

  public async getCity(divid: string)
  { 
      const startlen = 2;
      if (divid=='from')
      {
        const term = this.queryForm.value.From;
        if (term.length>=startlen)
        {
          this.cityfrom = await this._api.completeCity(term);
          console.log('cityfrom => ',this.cityfrom);
        } else {
          console.log('term <3 cars');
          this.cityfrom = null;
        }
      } else {
        const term = this.queryForm.value.To;
        if (term.length>=startlen)
        {
          this.cityto = await this._api.completeCity(term);
          console.log('cityfrom => ',this.cityto);
        }
      }
  }

  public setCity(name: string, divid: string)
  {
      if (divid==='from')
      {
        this.queryForm.patchValue({['From']:name})
        this.cityfrom = null;
      }
      if (divid==='to')
      {
        this.queryForm.patchValue({['To']:name})
        this.cityto = null;
      }
  }

}
