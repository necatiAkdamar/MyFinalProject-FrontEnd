import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  //filterText kutusuna yazdığımız yazıya göre filtreleme yapıyoruz.
  transform(value: Product[], filterText: string): Product[] {//value olarak komple tabloyu Array veriyoruz, parametremiz yani arama cümlemiz string, dönüş tipimizde Product[] 
    filterText= filterText?filterText.toLocaleLowerCase():""//filterText varmı, gönderilmiş mi var ise küçük harfe çevir yoksa null

    return filterText?value
    .filter((p:Product)=>p.productName.toLocaleLowerCase().indexOf(filterText)!==-1)
    :value;
  }

}
