import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { DragulaModule } from 'ng2-dragula';
import { HomePageRoutingModule } from './home-routing.module';


@NgModule({
  imports: [
    
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    DragulaModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
