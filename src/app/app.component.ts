import { Component } from '@angular/core';//kullanabilmek için angularcore dan import ediliyor.

@Component({//component deklerasyonu
  selector: 'app-root',//html tagları bu şekilde kullanılıyor
  templateUrl: './app.component.html',//aynı dosyadaki html dosyasını baz alıyor.
  styleUrls: ['./app.component.css']//yukardaki html in csslerinin konulduğu array dir.
})
export class AppComponent {
  title: string = "northwind";
  user: string = "necati akdamar";
  
}
