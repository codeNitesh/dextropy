import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AuthService } from './services/auth/auth.service';
import { RfqsService } from './services/rfqs/rfqs.service';
import { AuthGuard } from './auth-guard/auth.guard'
import {HttpInterceptProviders} from './http-interceptors';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import {AllOrdersComponent} from './pages/all-orders/all-orders.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { MatSliderModule } from '@angular/material/slider';
import {MatSelectModule} from '@angular/material/select';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';
import { TrackOrderComponent } from './pages/track-order/track-order.component';
import { OrderStageTrackComponent } from './components/order-stage-track/order-stage-track.component';
import { BidComponent } from './pages/bid/bid.component';
import { AllRfqsComponent } from './pages/all-rfqs/all-rfqs.component';
import { BidRespondComponent } from './components/bid/bid-respond/bid-respond.component';
import { BidDetailsComponent } from './components/bid/bid-details/bid-details.component';
import { BidAdditionalDetailsComponent } from './components/bid/bid-additional-details/bid-additional-details.component';
import { BidBidComponent } from './components/bid/bid-bid/bid-bid.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    DashboardComponent,
    AllOrdersComponent,
    TrackOrderComponent,
    OrderStageTrackComponent,
    BidComponent,
    AllRfqsComponent,
    BidRespondComponent,
    BidDetailsComponent,
    BidAdditionalDetailsComponent,
    BidBidComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,

    MatSliderModule,
    MatSelectModule,
    MatPaginatorModule,
    MatTabsModule,
    MatTableModule
  ],
  providers: [Title, AuthService, RfqsService, AuthGuard, HttpInterceptProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
