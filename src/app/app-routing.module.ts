import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { VinylMarketLayoutComponent } from "./marketplace/vinyl-market-layout/vinyl-market-layout.component";
import { HomeLayoutComponent } from "./navigation/home-layout/home-layout.component";

const routes:Routes = [
    {path: 'Vinyl-Market', component: VinylMarketLayoutComponent},
    {path: 'home', component: HomeLayoutComponent}
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