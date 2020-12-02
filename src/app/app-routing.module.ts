import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TimetableDetailsComponent } from './timetable/timetable-details.component';
import { TimetableQueryComponent } from './timetable/timetable-query.component';
import { TimetableResultComponent } from './timetable/timetable-result.component';

const routes: Routes = [
  { path: '', component: TimetableQueryComponent },
  { path: 'result', component: TimetableResultComponent },
  { path: 'details', component: TimetableDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
