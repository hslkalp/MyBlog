import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactComponent } from './contact/contact.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';

@NgModule({
  /**
   * * Butun component ler buraya eklenir
   */
  declarations: [
    AppComponent,
    HomeComponent,
    AboutMeComponent,
    ContactComponent,
    MainLayoutComponent,
    AdminLayoutComponent
  ],
  /**
   * * Butun componentlerin kullandigi module buraya eklenir
   */
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  /**
   * * Uygulama ilk calistiginda hangi component calisacak burada onu belirtiyoruz
   * * Component de uc tane dosya bulunur html,ts ve css dosyasi
   */
  bootstrap: [AppComponent]
})
export class AppModule { }
