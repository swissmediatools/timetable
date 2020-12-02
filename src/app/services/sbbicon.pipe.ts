import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sbbicon'
})
export class SbbiconPipe implements PipeTransform {

  transform(leg: any): string {
    
    //  console.log('SBBpipe => ',leg);

    let outicon = '';

        if (leg.type=='tram') {  outicon = 'pictos/Tram_r.svg';   }
        if (leg.type=='bus') {  outicon = 'pictos/Bus_r.svg';   }
        if (leg.type=='train') {  outicon = 'pictos/Zug_r.svg';   }
        if (leg.type=='express_train') {  outicon = 'pictos/Zug_r.svg';   }
        if (leg.type=='post') {  outicon = 'pictos/Fernbus_r.svg';   }
        if (leg.type=='walk') {  outicon = 'pictos/Rolltreppe-aufwaerts_r.svg';   }

      if (outicon!='')  {   outicon = 'assets/sbb/' + outicon;    }

    return outicon;
  }

}
