import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './components/centre/authorization/signIn/sign-in/sign-in.component';
import { SignUpComponent } from './components/centre/authorization/signUp/sign-up/sign-up.component';
import { ArtistPanelComponent } from './components/centre/showcase/artist-panel/artist-panel.component';
import { HomeComponent } from './components/centre/showcase/home/home.component'
import { ThemeInformationComponent } from './components/centre/showcase/theme-information/theme-information.component'
import { ThemeSearchComponent } from './components/centre/showcase/theme-search/theme-search.component';
import { UserPanelComponent } from './components/centre/showcase/user-panel/user-panel.component';
import { VerifyUserComponent } from './components/centre/user-data/verify-user/verify-user.component';

const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent },
  { path: 'Artist', component: ArtistPanelComponent },
  { path: 'Profile/:username', component: UserPanelComponent },
  { path: 'Theme', component: ThemeInformationComponent },
  { path: 'Search', component: ThemeSearchComponent },
  { path: 'Sign-In', component: SignInComponent },
  { path: 'Sign-Up', component: SignUpComponent },
  { path: 'Verificar/:code', component: VerifyUserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
