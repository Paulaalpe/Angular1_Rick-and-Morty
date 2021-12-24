import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //líneas 6-8 deberían ser al revés, que home redirija a '' pero no me muestra Home works??? si refresco sí
  // {
  //   path:'', redirectTo:'home', pathMatch:'full' 
  // },
  {
    path: ``, loadChildren: () => import('./pages/home/home.module').then(m=> m.HomeModule)
  },
  {
    path: `characters`,
    loadChildren: () =>
      import('./pages/characters/characters.module').then((m) => m.CharactersModule
      ),
  },
  {
    path: `planets`,
    loadChildren: () =>
      import('./pages/planets/planets.module').then((m) => m.PlanetsModule),
  },
  // {
  //   path: `characters/:idCharacter`,
  //   loadChildren: () =>
  //     import('./pages/character-detail/character-detail.module').then((m) => m.CharacterDetailModule
  //     ),
  // },
  {
    path: `episodes`,
    loadChildren: () =>
      import('./pages/episodes/episodes.module').then((m) => m.EpisodesModule),
  },
  {
    path: `about`, loadChildren: () => import('./pages/about/about.module').then(m=> m.AboutModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
