import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// @ts-ignore
import { DashboardComponent } from './dashboard/dashboard.component';
// @ts-ignore
import { HeroesComponent } from './heroes/heroes.component';
// @ts-ignore
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
