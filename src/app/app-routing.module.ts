import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HibaComponent } from './hiba/hiba.component';
import { KapcsolatComponent } from './kapcsolat/kapcsolat.component';
import { MainComponent } from './main/main.component';
import { MotivacioComponent } from './motivacio/motivacio.component';
import { ProjektekComponent } from './projektek/projektek.component';

const routes: Routes = [
  {path: "motivacio", component:MotivacioComponent},
  {path: "projektek", component:ProjektekComponent},
  {path: "main", component:MainComponent},
  {path: "kapcsolat", component:KapcsolatComponent},
  {path: "**", component:MainComponent},
  {path: "", component:HibaComponent, pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
