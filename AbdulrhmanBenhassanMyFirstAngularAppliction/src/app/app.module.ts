import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieService } from './services/movie.service';
import { ContentListComponent } from './content-list/content-list.component';
import { ContentDetailComponent } from './content-detail/content-detail.component';
import { UserFormComponent } from './user-form/user-form.component';
import { BuyComponent } from './buy/buy.component';
import { SellComponent } from './sell/sell.component';
import { FilterIContentPipe } from './filter-icontent.pipe';
import { ContentListItemComponent } from './content-list-item/content-list-item.component'; // Add this line



@NgModule({
  declarations: [
    AppComponent,
    ContentListComponent,
    ContentDetailComponent,
    UserFormComponent,
    BuyComponent,
    ContentListItemComponent,
    SellComponent,
    FilterIContentPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
