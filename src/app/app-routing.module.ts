import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: './modules/home/home.module#HomeModule',
  },
  {
    path: 'interaction',
    loadChildren: './modules/interaction/interaction.module#InteractionModule',
  },
  {
    path: 'elements',
    loadChildren: './modules/elements/elements.module#ElementsModule',
  },
  {
    path: 'list',
    loadChildren: './modules/list/list.module#ListModule',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
