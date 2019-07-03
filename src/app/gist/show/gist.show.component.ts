import { GistEditComponent } from '../edit/gist.edit.component';
import { Router } from '@angular/router';
import { ToasterService } from 'angular2-toaster';
import { Gist } from '../gist.model';
import { AppSocketIoService } from '../../app.socketIo.service';
import { GistService } from '../gist.service';
import { Component, Inject } from '@angular/core';

import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

/**
 * Show a single gist & allow deletion
 * @author dassiorleando
 */
@Component({
  selector: 'app-gist-show',
  templateUrl: './gist.show.component.html',
  styleUrls: ['../gist.component.css']
})
export class GistShowComponent {
  constructor(private gistService: GistService,
    @Inject(MAT_DIALOG_DATA) public gist: any,
    private toasterService: ToasterService,
    public dialogRef: MatDialogRef<GistShowComponent>,
    private appSocketIoService: AppSocketIoService,
    private router: Router, private dialog: MatDialog) {

  }

  deleteGist() {
    const gistId = this.gist._id;
    this.gistService.deleteGist(gistId)
        .subscribe(response => {
          if (response['message'] === 'SUCCESS') {
            this.dialogRef.close({deleted: true, gistId: gistId})
            // this.router.navigate(['/gists']);
          }
    });
  }

  editGist() {
    // Close the current modal
    this.dialogRef.close({deleted: false})

    // Open a new one to edit the current gist
    const config = new MatDialogConfig(); // config
    config.data = this.gist; // Data to send to modal: gist to edit
    const dialogRef = this.dialog.open(GistEditComponent, config);
  }

}
