import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // * html de kullanilmasi icin gereken tag
  templateUrl: './app.component.html', // * html dosyası
  styleUrls: ['./app.component.css'] // * css dosyası
})
export class AppComponent {
  title = 'blog';
}
