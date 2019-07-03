import { GistShowComponent } from './gist/show/gist.show.component';
import { GistEditComponent } from './gist/edit/gist.edit.component';
import { GistListComponent } from './gist/list/gist.list.component';
import { RouterModule } from '@angular/router';
import { AppSocketIoService } from './app.socketIo.service';
import { GistService } from './gist/gist.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import {MatDialogModule} from '@angular/material/dialog';

import { FormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
import { ToasterModule } from 'angular2-toaster';

import { AppComponent } from './app.component';
import { GistComponent } from './gist/gist.component';

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
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatMenuModule,
    MatDialogModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatListModule,
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
  entryComponents: [GistEditComponent, GistShowComponent]
})
export class AppModule {
  constructor(private appSocketIoService: AppSocketIoService) {
    // Consume events: Save and Update
    this.appSocketIoService.consumeEvenOnGistSaved();   // Save event
    this.appSocketIoService.consumeEvenOnGistUpdated(); // Update event
  }
 }
