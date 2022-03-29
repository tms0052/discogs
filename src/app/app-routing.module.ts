import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { VinylMarketLayoutComponent } from "./marketplace/vinyl-market-layout/vinyl-market-layout.component";
import { HomeLayoutComponent } from "./navigation/home-layout/home-layout.component";
import { ExploreAllLayoutComponent } from "./explore/explore-all-layout/explore-all-layout.component";
import { DigsLayoutComponent } from "./community/digs-layout/digs-layout.component";
import { CommunityGuidelinesLayoutComponent } from "./community/community-guidelines-layout/community-guidelines-layout.component";
import { AddProductComponent } from "./marketplace/add-product/add-product.component";

const routes:Routes = [
    {path: 'Vinyl-Market', component: VinylMarketLayoutComponent},
    {path: 'home', component: HomeLayoutComponent},
    {path: 'Explore-All', component: ExploreAllLayoutComponent}, 
    {path: 'digs', component:DigsLayoutComponent },
    {path: 'Community-Guidelines', component:CommunityGuidelinesLayoutComponent},
    {path: 'admin', component: AddProductComponent},

];

@NgModule({
    declarations: [],
    imports: [ 
    CommonModule,
    RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule{}