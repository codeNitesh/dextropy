import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth-guard/auth.guard';
import { AllOrdersComponent } from './pages/all-orders/all-orders.component';
import { AllRfqsComponent } from './pages/all-rfqs/all-rfqs.component';
import { BidComponent } from './pages/bid/bid.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { TrackOrderComponent } from './pages/track-order/track-order.component';


const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    data : {  
      title: 'Dashboard '
    }
  },
  {
    path: 'profile',
    component: ProfileComponent,
    data : {  
      title: 'My Profile '
    }
  },
  {
    path: 'orders',
    component: AllOrdersComponent,
    data : {  
      title: 'Orders '
    }
  },
  {
    path: 'orders/:id',
    component: TrackOrderComponent,
    data : {  
      title: 'Track Orders '
    }
  },
  {
    path: 'rfqs',
    children:[
      {
        path: '',
        component: AllRfqsComponent,
        data : {  
          title: 'RFQs '
        }
      },
      {
      path: 'bid',
      component: BidComponent,
      data : {  
        title: 'Bid Form '
      }
    }]
    
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
