import { ToasterService } from 'angular2-toaster';
import { Gist } from '../gist.model';
import { AppSocketIoService } from '../../app.socketIo.service';
import { GistService } from '../gist.service';
import { Component, Inject } from '@angular/core';

import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

/**
 * Save/update a gist
 * @author dassiorleando
 */
@Component({
  selector: 'app-gist-edit',
  templateUrl: './gist.edit.component.html',
  styleUrls: ['../gist.component.css']
})
export class GistEditComponent {
  // Five last saved gists: will take it dynamically in our mongo later
  gist = {
      _id: '',
      title: '',
      description: '',
      technologies: [],
      link: '',
      techs: ''
  };

  constructor(private gistService: GistService,
  @Inject(MAT_DIALOG_DATA) public data: any, private toasterService: ToasterService,
  public dialogRef: MatDialogRef<GistEditComponent>, private appSocketIoService: AppSocketIoService) {
    this.gist = data;
    this.gist.techs = this.gist.technologies.join();
  }

  editGist() {
    const self = this;
    // Update or save the gist
    if (this.gist._id !== '') {
      this.gist.technologies = this.gist.techs.split(',');
      // Update in case of an existing id
      self.gistService.updateGist(
        new Gist(this.gist._id, this.gist.title, this.gist.description, this.gist.technologies, this.gist.link)).subscribe(updatedGist => {
          if (updatedGist) {
              self.appSocketIoService.emitEventOnGistUpdated(updatedGist); // Emit event to notify other clients
          } else {
              // On error, tell the user to try gain
            self.toasterService.pop('error', 'ERROR WHEN UPDATING GIST',
            'An error occured when udpdating your gist, please try again');
          }
      });
    } else {
      this.gist.technologies = this.gist.techs.split(',');
      // Save a new one when there is no id filled
      self.gistService.postGist(
        new Gist(null, this.gist.title, this.gist.description, this.gist.technologies, this.gist.link)).subscribe(savedGist => {
          if (savedGist) {
              self.appSocketIoService.emitEventOnGistSaved(savedGist); // Emit event to notify other clients
              self.dialogRef.close(savedGist)
          } else {
              // On error, tell the user to try gain
            self.toasterService.pop('error', 'ERROR WHEN SAVING GIST',
            'An error occured when sharing your gist, please try again');
          }
      });
    }
  }

}
