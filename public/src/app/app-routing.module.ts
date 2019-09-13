import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { NewComponent } from './new/new.component';
import { EditComponent } from './edit/edit.component';
import { DetailsComponent } from './details/details.component';







const routes: Routes = [
  // insert above  
  { path: 'pets', component: HomeComponent },
  { path: 'pets/new', component: NewComponent },
  { path: 'pets/:id/edit', component: EditComponent },
  { path: 'pets/:id', component: DetailsComponent },
  { path: '', pathMatch: 'full', redirectTo: '/pets' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
