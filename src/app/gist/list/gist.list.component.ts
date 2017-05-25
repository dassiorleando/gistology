import { GistShowComponent } from '../show/gist.show.component';
import { AppSocketIoService } from '../../app.socketIo.service';
import { GistEditComponent } from '../edit/gist.edit.component';
import { GistService } from '../gist.service';
import { Component, OnInit } from '@angular/core';

import {MdDialog, MdDialogConfig, MdDialogRef, MD_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-gist-list',
  templateUrl: './gist.list.component.html',
  styleUrls: ['../gist.component.css']
})
export class GistListComponent implements OnInit {
  // List of gist previously saved
  public gists = [];

  constructor(private gistService: GistService, private dialog: MdDialog) {
  }

  ngOnInit() {
      // Load all gists
      this.gistService.getAllGists()
        .subscribe(gists => {
            this.gists = gists;
    });
  }

  /**
   * To add a new gist
  */
  addGist(){
    var self = this;
    let config = new MdDialogConfig(); // config
    config.data = { // Data to send to modal: gist to edit or empty
      _id: "",
      title: "",
      description: "",
      technologies: [],
      link: ""
    };

    let dialogRef = this.dialog.open(GistEditComponent, config);
    // After close the gist we take the register gist to add it to the list
    dialogRef.afterClosed().subscribe(result => {
      // Populate our list
      if(result){
          self.gists.push(result);
      }
    });
  }

  /**
   * To show a gist
   */
  show(gistId){
    var self = this;
    // Load a bist by his id
      this.gistService.getGistById(gistId)
        .subscribe(gist => {
          let config = new MdDialogConfig(); // config
          config.data = gist; // Data to send to modal: gist to show
          let dialogRef = this.dialog.open(GistShowComponent, config);

          dialogRef.afterClosed().subscribe(result => {
            // Edit our list
            if(result){
              if(result.deleted){
                for(var i = 0; i < self.gists.length; i++) {
                    var gist = self.gists[i];
                    if(gist._id == result.gistId) {
                        self.gists.splice(i, 1);
                        break;
                    }
                }
              }
            }
          });
    });
  }
}
