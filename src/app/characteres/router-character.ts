import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacteresComponent } from './characteres.component';
import { CharacterComponent } from './pages/detailCharacter/character.component';



const routes: Routes = [
  {
    path: '',
   // component: CharacteresComponent,
    children: [
      {
        path: 'home',
         component: CharacteresComponent
      },
      {
        path: 'detalle/:id',
         component: CharacterComponent
      },
      {
        redirectTo: '/home',
        path: '',
        pathMatch: 'full'
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RouterCharacterModule { }
