import { GistShowComponent } from '../show/gist.show.component';
import { AppSocketIoService } from '../../app.socketIo.service';
import { GistEditComponent } from '../edit/gist.edit.component';
import { GistService } from '../gist.service';
import { Component, OnInit } from '@angular/core';

import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

/**
 * Listing all the gists ever saved
 * @author dassiorleando
 */
@Component({
  selector: 'app-gist-list',
  templateUrl: './gist.list.component.html',
  styleUrls: ['../gist.component.css']
})
export class GistListComponent implements OnInit {
  // List of gist previously saved
  public gists: any = [];

  constructor(private gistService: GistService, private dialog: MatDialog) {
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
  addGist() {
    const self = this;
    const config = new MatDialogConfig(); // config
    config.data = { // Data to send to modal: gist to edit or empty
      _id: '',
      title: '',
      description: '',
      technologies: [],
      link: ''
    };

    const dialogRef = this.dialog.open(GistEditComponent, config);
    // After close the gist we take the register gist to add it to the list
    dialogRef.afterClosed().subscribe(result => {
      // Populate our list
      if (result) {
          self.gists.push(result);
      }
    });
  }

  /**
   * To show a gist
   */
  show(gistId) {
    const self = this;
    // Load a bist by his id
      this.gistService.getGistById(gistId)
        .subscribe(gist => {
          const config = new MatDialogConfig(); // config
          config.data = gist; // Data to send to modal: gist to show
          const dialogRef = this.dialog.open(GistShowComponent, config);

          dialogRef.afterClosed().subscribe(result => {
            // Edit our list
            if (result) {
              if (result.deleted) {
                for (let i = 0; i < self.gists.length; i++) {
                    const g = self.gists[i];
                    if (g._id === result.gistId) {
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
