import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacteresComponent } from './characteres/characteres.component';



const routes: Routes = [
  {
    path: '',
    loadChildren: () => import ('.//characteres/characters.module').then(m => m.CharactersModule),

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
