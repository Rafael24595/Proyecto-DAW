import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/centre/showcase/home/home.component'
import { ThemeInformationComponent } from './components/centre/showcase/theme-information/theme-information.component'
import { ThemeSearchComponent } from './components/centre/showcase/theme-search/theme-search.component';

const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent },
  { path: 'Theme', component: ThemeInformationComponent },
  { path: 'Search', component: ThemeSearchComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
