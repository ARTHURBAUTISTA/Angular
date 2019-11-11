import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { appRouting } from './app.routes';
import { HttpClientModule }from '@angular/common/http';
import { SearchComponent } from './components/search/search.component';
import { NoImagePipe } from './pipe/no-image.pipe';
import { ArtistComponentComponent } from './components/artist-component/artist-component.component';
import { DomSanitizerPipe } from './pipe/dom-sanatizer.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SearchComponent,
    NoImagePipe,
    ArtistComponentComponent,
    DomSanitizerPipe
  ],
  imports: [
    BrowserModule,
    appRouting,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
