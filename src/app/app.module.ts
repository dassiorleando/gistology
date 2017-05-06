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

import { AppComponent } from './app.component';
import { GistComponent } from './gist/gist.component';

@NgModule({
  declarations: [
    AppComponent,
    GistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [GistService, AppSocketIoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
