import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './Home/home/home.component';
import { AboutComponent } from './ABOUT/about/about.component';
import { LoginComponent } from './LOGIN/login/login.component';
import { SignUpComponent } from './SIGN-UP/sign-up/sign-up.component';
import { GalleryComponent } from './GALLERY/gallery/gallery.component';
import { TeamComponent } from './TEAM/team/team.component';
import { BookselveComponent } from './BOOKSHELVE/bookselve/bookselve.component';
import { FooterComponent } from './FOOTER/footer/footer.component';
import { CARTCOMPONENTComponent } from './cartcomponent/cartcomponent.component';
import { CartComponent } from './CARTCOMPONENT/cart/cart.component';
import { HeaderComponent } from './CARTCOMPONENT/header/header.component';
import { ProductComponent } from './CARTCOMPONENT/product/product.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    LoginComponent,
    SignUpComponent,
    GalleryComponent,
    TeamComponent,
    BookselveComponent,
    FooterComponent,
    CARTCOMPONENTComponent,
    CartComponent,
    HeaderComponent,
    ProductComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
