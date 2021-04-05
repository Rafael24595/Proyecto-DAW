import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './components/centre/authorization/signIn/sign-in/sign-in.component';
import { SignUpComponent } from './components/centre/authorization/signUp/sign-up/sign-up.component';
import { ArtistPanelComponent } from './components/centre/showcase/artist-panel/artist-panel.component';
import { HomeComponent } from './components/centre/showcase/home/home.component'
import { ThemeInformationComponent } from './components/centre/showcase/theme-information/theme-information.component'
import { ThemeSearchComponent } from './components/centre/showcase/theme-search/theme-search.component';

const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent },
  { path: 'Artist', component: ArtistPanelComponent },
  { path: 'Theme', component: ThemeInformationComponent },
  { path: 'Search', component: ThemeSearchComponent },
  { path: 'Sign-In', component: SignInComponent },
  { path: 'Sign-Up', component: SignUpComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
