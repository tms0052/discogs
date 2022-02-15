import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FooterComponent } from 'src/app/footer/footer.component';
import { FooterNavComponent } from 'src/app/footer/footer.nav.component';
import { TopNavBarComponent } from 'src/app/navigation/topnavbar.component';

import { AppComponent } from './app.component';
import { BackgroundCardComponent } from './cards-home/background/background.card.component';
import { HorizontalCardComponent } from './cards-home/horizontal/horizontal.card.component';
import { VerticalCardComponent } from './cards-home/vertical/vertical.card.component';
import { MarketplaceItemRowComponent } from './marketplace/item-row/item.row.component';
import { VinylMarketLayoutComponent } from './marketplace/vinyl-market-layout/vinyl-market-layout.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeLayoutComponent } from './navigation/home-layout/home-layout.component';
import { ExploreAllLayoutComponent } from './explore/explore-all-layout/explore-all-layout.component';
import { DigsLayoutComponent } from './community/digs-layout/digs-layout.component';
import { CommunityGuidelinesLayoutComponent } from './community/community-guidelines-layout/community-guidelines-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    FooterComponent,
    FooterNavComponent,
    HorizontalCardComponent,
    VerticalCardComponent,
    BackgroundCardComponent,
    MarketplaceItemRowComponent,
    VinylMarketLayoutComponent,
    HomeLayoutComponent,
    ExploreAllLayoutComponent,
    DigsLayoutComponent,
    CommunityGuidelinesLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
