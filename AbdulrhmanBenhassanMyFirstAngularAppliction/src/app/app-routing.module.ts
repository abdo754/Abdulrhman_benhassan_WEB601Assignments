import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentListComponent } from './content-list/content-list.component';
import { ContentDetailComponent } from './content-detail/content-detail.component';
import { UserFormComponent } from './user-form/user-form.component';
import { BuyComponent } from './buy/buy.component';
import { SellComponent } from './sell/sell.component';

const routes: Routes = [
  { path: '', redirectTo: '/content', pathMatch: 'full' },
  { path: 'content', component: ContentListComponent },
  { path: 'content/:id', component: ContentDetailComponent },
  { path: 'form', component: UserFormComponent },
  { path: 'buy', component: BuyComponent },
  { path: 'sell', component: SellComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
