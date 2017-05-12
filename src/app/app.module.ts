import { GistShowComponent } from './gist/show/gist.show.component';
import { GistAddComponent } from './gist/add/gist.add.component';
import { GistListComponent } from './gist/list/gist.list.component';
import { RouterModule } from '@angular/router';
import { AppSocketIoService } from './app.socketIo.service';
import { GistService } from './gist/gist.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import {FlexLayoutModule} from "@angular/flex-layout";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs';
import {ToasterModule} from 'angular2-toaster';

import { AppComponent } from './app.component';
import { GistComponent } from './gist/gist.component';

@NgModule({
  declarations: [
    AppComponent,
    GistComponent,
    GistListComponent,
    GistAddComponent,
    GistShowComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    ToasterModule,
    RouterModule.forRoot([
      {
        path: '', // Gist component
        component: GistComponent
      },
      {
        path: 'gists',  // GistList component
        component: GistListComponent
      }
    ])
  ],
  providers: [GistService, AppSocketIoService],
  bootstrap: [AppComponent],
  entryComponents: [GistAddComponent, GistShowComponent]
})
export class AppModule { }
