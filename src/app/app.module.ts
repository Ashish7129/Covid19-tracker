import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PrecautionsComponent } from './precautions/precautions.component';
import { NewsComponent } from './news/news.component';
import { ModelData } from './services/model-data';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AdminComponent } from './admin/admin.component';
import { AddNewComponent } from './news/add-new/add-new.component';
import { AuthGuard } from './auth/auth.guard';
import { HttpClientTestingModule } from '@angular/common/http/testing';

@NgModule({
  declarations: [
    AppComponent,
    PrecautionsComponent,
    NewsComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    AdminComponent,
    AddNewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientTestingModule,
    ReactiveFormsModule,
    HttpClientInMemoryWebApiModule.forRoot(ModelData, {
      passThruUnknownUrl: true,
    }),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
