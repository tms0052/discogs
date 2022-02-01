import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FooterComponent } from 'src/app/footer/footer.component';
import { FooterNavComponent } from 'src/app/footer/footer.nav.component';
import { TopNavBarComponent } from 'src/app/navigation/topnavbar.component';

import { AppComponent } from './app.component';
import { BackgroundCardComponent } from './cards/background.card.component';
import { HorizontalCardComponent } from './cards/horizontal.card.component';
import { VerticalCardComponent } from './cards/vertical.card.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    FooterComponent,
    FooterNavComponent,
    HorizontalCardComponent,
    VerticalCardComponent,
    BackgroundCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
