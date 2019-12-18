import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { VinylService } from './vinyls/vinyl.service';
import { AppComponent } from './app.component';
import { VinylListComponent } from './vinyls/vinyl-list.component';
import { VinylDetailComponent } from './vinyls/vinyl-detail.component';
import { WelcomeComponent } from './home/welcome.component';

import { RouterModule } from '@angular/router';
import { StartComponent } from './shared/star.component';
//import { YoutubePlayerModule } from 'ng2-youtube-player'; 

@NgModule({
  declarations: [
    AppComponent,
    VinylListComponent,
    VinylDetailComponent,
    WelcomeComponent,
    StartComponent //am facut import pentru a folosi componenta ca o directiva 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
   // YoutubePlayerModule,
    
    RouterModule.forRoot([
      { path: 'vinyls', component: VinylListComponent},
      { path: 'vinyls/:id', component: VinylDetailComponent},
      { path: 'welcome', component: WelcomeComponent},
      { path:'', redirectTo: 'welcome', pathMatch: 'full'}, //calea default care redirectioneaza catre welcome comp 
      { path:'**', redirectTo: 'welcome', pathMatch: 'full'}//required path doesn't match (wildcard route), de ex: NotFoundPage
    ])
  ],
  providers: [VinylService],  // se foloseste in versiunile < Angular6
  bootstrap: [AppComponent]
}) 
export class AppModule { }
