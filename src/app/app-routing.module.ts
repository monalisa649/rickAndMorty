import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacteresComponent } from './characteres/components/characteres/characteres.component';
import { CharacterComponent } from './characteres/components/detailCharacter/character.component';

const routes: Routes = [
  { path: 'home', component: CharacteresComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'detalle/:id', component: CharacterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
