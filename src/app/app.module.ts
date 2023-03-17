import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HibaComponent } from './hiba/hiba.component';
import { KapcsolatComponent } from './kapcsolat/kapcsolat.component';
import { FormsModule } from '@angular/forms';
import { ProjektekComponent } from './projektek/projektek.component';
import { MotivacioComponent } from './motivacio/motivacio.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HibaComponent,
    KapcsolatComponent,
    ProjektekComponent,
    MotivacioComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
