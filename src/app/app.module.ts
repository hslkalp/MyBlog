import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { MainModule } from './pages/main.module';


import { AppComponent } from './app.component';


import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { AdminNavComponent } from './nav/admin-nav/admin-nav.component';



@NgModule({
  /**
   * * Butun component ler buraya eklenir
   */
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AdminNavComponent
  ],
  /**
   * * Butun componentlerin kullandigi module buraya eklenir
   */
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MainModule
  ],
  providers: [],
  /**
   * * Uygulama ilk calistiginda hangi component calisacak burada onu belirtiyoruz
   * * Component de uc tane dosya bulunur html,ts ve css dosyasi
   */
  bootstrap: [AppComponent]
})
export class AppModule { }
