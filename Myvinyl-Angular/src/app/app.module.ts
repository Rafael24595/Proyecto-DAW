import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { QuillModule } from 'ngx-quill'
import { SafeHtmlPipe } from './services/pipes/DomSanitized';
import { DateFormat } from './services/pipes/DateFormat';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CentreComponent } from './components/centre/centre.component';
import { ShowcaseComponent } from './components/centre/showcase/showcase.component';
import { HomeComponent } from './components/centre/showcase/home/home.component';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { ThemeInformationComponent } from './components/centre/showcase/theme-information/theme-information.component';
import { ThemeSearchComponent } from './components/centre/showcase/theme-search/theme-search.component';
import { ArtistPanelComponent } from './components/centre/showcase/artist-panel/artist-panel.component';

import { TokenInterceptorService} from './services/token-interceptor/token-interceptor.service';
import { SignInComponent } from './components/centre/authorization/signIn/sign-in/sign-in.component';
import { SignUpComponent } from './components/centre/authorization/signUp/sign-up/sign-up.component';
import { UserDataComponent } from './components/centre/user-data/user-data.component';
import { UserPanelComponent } from './components/centre/showcase/user-panel/user-panel.component';
import { AudioBarComponent } from './components/centre/audio-bar/audio-bar/audio-bar.component';
import { VerifyUserComponent } from './components/centre/user-data/verify-user/verify-user.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CentreComponent,
    ShowcaseComponent,
    HomeComponent,
    ThemeInformationComponent,
    ThemeSearchComponent,
    ArtistPanelComponent,
    SignInComponent,
    SignUpComponent,
    UserDataComponent,
    UserPanelComponent,
    AudioBarComponent,
    SafeHtmlPipe,
    DateFormat,
    VerifyUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    QuillModule.forRoot({
      modules: {
        syntax: false,
        toolbar: [
          ['bold', 'italic', 'underline', 'strike'],        
          //['blockquote', 'code-block'],
      
          [{ 'header': 1 }, { 'header': 2 }],               
          [{ 'list': 'ordered'}, { 'list': 'bullet' }],
          //[{ 'script': 'sub'}, { 'script': 'super' }],      
          [{ 'indent': '-1'}, { 'indent': '+1' }],          
          //[{ 'direction': 'rtl' }],                         
      
          //[{ 'size': ['small', false, 'large', 'huge'] }],
          //[{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      
          [{ 'color': [] }, { 'background': [] }],          
          //[{ 'font': [] }],
          [{ 'align': [] }],
      
          ['clean'],                                         
      
          ['link', /*'image', 'video'*/]                         
        ]
      }
    })
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
