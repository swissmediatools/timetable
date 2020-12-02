import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IonicModule } from '@ionic/angular';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { TimetableQueryComponent } from './timetable/timetable-query.component';
import { TimetableResultComponent } from './timetable/timetable-result.component';
import { TimetableDetailsComponent } from './timetable/timetable-details.component';
import { DurationhhmmPipe } from './services/durationhhmm.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TimetableQueryComponent,
    TimetableResultComponent,
    TimetableDetailsComponent,
    DurationhhmmPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IonicModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
