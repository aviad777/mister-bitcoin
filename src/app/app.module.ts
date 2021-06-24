import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ContactEditPageComponent } from './pages/contact-edit-page/contact-edit-page.component';
import { ContactDetailPageComponent } from './pages/contact-detail-page/contact-detail-page.component';
import { ContactFilterComponent } from './components/contact-filter/contact-filter.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { ContactPreviewComponent } from './components/contact-preview/contact-preview.component';
import { InputComponent } from './components/input/input.component';
import { HttpClientModule } from '@angular/common/http';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { AppRoutingModule } from './app-routing.module';
import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component';
import { TransferFundsComponent } from './components/transfer-funds/transfer-funds.component';
import { MovesListComponent } from './components/moves-list/moves-list.component';
import { MovePreviewComponent } from './components/move-preview/move-preview.component';
import { LineChartComponent } from './components/line-chart/line-chart.component';
import { ChartsModule } from 'ng2-charts';
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ContactPageComponent,
    ContactDetailPageComponent,
    ContactFilterComponent,
    ContactListComponent,
    ContactPreviewComponent,
    InputComponent,
    AppHeaderComponent,
    ContactEditPageComponent,
    SignUpPageComponent,
    TransferFundsComponent,
    MovesListComponent,
    MovePreviewComponent,
    LineChartComponent,


  ],
  imports: [
    HttpClientModule, BrowserModule, FormsModule, AppRoutingModule, ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
