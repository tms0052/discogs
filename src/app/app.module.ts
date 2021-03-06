import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FooterComponent } from 'src/app/footer/footer.component';
import { FooterNavComponent } from 'src/app/footer/footer.nav.component';
import { TopNavBarComponent } from 'src/app/navigation/topnavbar.component';
import { HttpClientModule } from '@angular/common/http'

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
import { SidebarComponent } from './explore/sidebar/sidebar.component';
import { TabNavbarComponent } from './explore/tab-navbar/tab-navbar.component';
import { ExploreCardsComponent } from './explore/explore-cards/explore-cards.component';
import { MarketplaceSidebarComponent } from './marketplace/marketplace-sidebar/marketplace-sidebar.component';
import { MarketplaceTabnavbarComponent } from './marketplace/marketplace-tabnavbar/marketplace-tabnavbar.component';
import { DigsSmallCardsComponent } from './community/digs-small-cards/digs-small-cards.component';
import { DarkVertCardComponent } from './cards-home/dark-vert-card/dark-vert-card.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AddProductComponent } from './marketplace/add-product/add-product.component';
import { FormsModule } from '@angular/forms';
import { AuthComponent } from './auth/auth.component';

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
    CommunityGuidelinesLayoutComponent,
    SidebarComponent,
    TabNavbarComponent,
    ExploreCardsComponent,
    MarketplaceSidebarComponent,
    MarketplaceTabnavbarComponent,
    DigsSmallCardsComponent,
    DarkVertCardComponent,
    UserInfoComponent,
    AddProductComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
