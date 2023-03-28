import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HibaComponent } from './hiba/hiba.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {path: "main", component:MainComponent},
  {path: "**", component:HibaComponent},
  {path: "", component:MainComponent, pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
