import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'durationhhmm'
})
export class DurationhhmmPipe implements PipeTransform {

  transform(value: number): string {
    
    let minutes = value/60;
    let hours = minutes/60;
    let result = '';

    if (hours<1)
    {
      result = minutes + '\'';

    } else {

      result = hours.toFixed(0) + ':';
      let hoursflat = parseInt(hours.toFixed(0));
      let minutesflat = hoursflat * 60;
      let soldminutes = minutes - minutesflat;
      if (soldminutes<10)
      {
        result += '0' + soldminutes;
      } else {
        result += soldminutes;
      }

    }
    
    return result;
  }

}
