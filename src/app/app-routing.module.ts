import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { ContactComponent } from './pages/contact/contact.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';

// * Routure semasi burada olusturuluyor

const routes: Routes = [
  {
    // * Anasayfa icin parametre olmadigi zaman ilk acilacak olan component
    path: "",
    component: MainLayoutComponent,
    children: [
      {
        path: "",
        component: HomeComponent
      },
      {
        path: "hakkimda",
        component: AboutMeComponent
      },
      {
        path: "iletisim",
        component: ContactComponent
      }
    ]
  },
  {
    path: "admin",
    component: AdminLayoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // * ana route olarak bu route u import ediyoruz.
  exports: [RouterModule] // * diger moduller kullnabilsin diye export ediyoruz.
})
export class AppRoutingModule { }
