import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
// import { MasonryComponent } from './masonry/masonry.component';

import { BoomComponent } from './boom/boom.component';
import { ClassicComponent } from './classic/classic.component';
import { FitnessComponent } from './fitness/fitness.component';
import { LifeComponent } from './life/life.component';
import { MenComponent } from './men/men.component';
import { PortraitsComponent } from './portraits/portraits.component';
import { StillComponent } from './still/still.component';
import { WomenComponent } from './women/women.component';


const routes: Routes = [
    // { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '', redirectTo: 'women', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    // { path: 'masonry', component: MasonryComponent },
    { path: 'boom', component: BoomComponent },
    { path: 'classic', component: ClassicComponent },
    { path: 'fitness', component: FitnessComponent },
    { path: 'life', component: LifeComponent },
    { path: 'men', component: MenComponent },
    { path: 'portraits', component: PortraitsComponent },
    { path: 'still', component: StillComponent },
    { path: 'women', component: WomenComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
