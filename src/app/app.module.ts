import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FooterComponent } from 'src/app/footer/footer.component';
import { FooterNavComponent } from 'src/app/footer/footer.nav.component';
import { TopNavBarComponent } from 'src/app/navigation/topnavbar.component';

import { AppComponent } from './app.component';
import { BackgroundCardComponent } from './cards-home/background/background.card.component';
import { HorizontalCardComponent } from './cards-home/horizontal/horizontal.card.component';
import { VerticalCardComponent } from './cards-home/vertical/vertical.card.component';
import { MarketplaceItemRowComponent } from './marketplace/item.row.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    FooterComponent,
    FooterNavComponent,
    HorizontalCardComponent,
    VerticalCardComponent,
    BackgroundCardComponent,
    MarketplaceItemRowComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
