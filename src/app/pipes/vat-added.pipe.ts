import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vatAdded'
})
export class VatAddedPipe implements PipeTransform {

  transform(value: number, rate:number): number {//value:değiştirmek istediğim vt den aldığımız htmldeki ilk veri, rate: değiştirmek için işlem yapmak istediğimiz vatAddedla verdiğimiz parametre
    return value + (value*rate/100);//vatAdded ile gelen parametre ile kdv hesaplıyoruz
  }

}
