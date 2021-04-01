import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { UpdateArtistList } from 'src/utils/tools/updateArtistList';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CentreComponent } from './components/centre/centre.component';
import { ShowcaseComponent } from './components/centre/showcase/showcase.component';
import { HomeComponent } from './components/centre/showcase/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ThemeInformationComponent } from './components/centre/showcase/theme-information/theme-information.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CentreComponent,
    ShowcaseComponent,
    HomeComponent,
    ThemeInformationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
