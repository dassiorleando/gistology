import { GistShowComponent } from './gist/show/gist.show.component';
import { GistEditComponent } from './gist/edit/gist.edit.component';
import { GistListComponent } from './gist/list/gist.list.component';
import { RouterModule } from '@angular/router';
import { AppSocketIoService } from './app.socketIo.service';
import { GistService } from './gist/gist.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// import { MaterialModule } from '@angular/material';
import {FlexLayoutModule} from "@angular/flex-layout";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs';
import {ToasterModule} from 'angular2-toaster';

import { AppComponent } from './app.component';
import { GistComponent } from './gist/gist.component';
import { MatIconModule} from '@angular/material';
import {MatDialogModule} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    GistComponent,
    GistListComponent,
    GistEditComponent,
    GistShowComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    // MaterialModule,
    FlexLayoutModule,
    ToasterModule,
    MatIconModule,
    MatDialogModule,
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
  entryComponents: [GistEditComponent, GistShowComponent]
})
export class AppModule {
  constructor(private appSocketIoService: AppSocketIoService){
    // Consume events: Save and Update
    this.appSocketIoService.consumeEvenOnGistSaved();   // Save event
    this.appSocketIoService.consumeEvenOnGistUpdated(); // Update event
  }
 }
