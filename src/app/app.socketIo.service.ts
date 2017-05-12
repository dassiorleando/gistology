import { Injectable } from '@angular/core';
import {Gist} from './gist/gist.model';
import * as io from 'socket.io-client';
import {ToasterService} from 'angular2-toaster';

@Injectable()
export class AppSocketIoService {
  private socket: SocketIOClient.Socket; // The client instance of socket.io

  // Constructor with an injection of ToastService
  constructor(private toasterService: ToasterService) {
    this.socket = io();
  }

  // Emit: gist saved event
  emitEventOnGistSaved(gistSaved){
      this.socket.emit('gistSaved', gistSaved);
  }

  // Emit: gist updated event
  emitEventOnGistUpdated(gistUpdated){
    this.socket.emit('gistUpdated', gistUpdated);
  }

  // Consume: on gist saved 
  consumeEvenOnGistSaved(){
    var self = this;
    this.socket.on('gistSaved', function(gist: Gist){
      self.toasterService.pop('success', 'NEW GIST SAVED',
          'A gist with title \"' + gist.title + '\" has just been shared' + ' with stack: ' + gist.technologies);
    });
  }

  // Consume on gist updated 
  consumeEvenOnGistUpdated(){
    var self = this;
    this.socket.on('gistUpdated', function(gist: Gist){
      self.toasterService.pop('info', 'GIST UPDATED', 
          'A gist with title \"' + gist.title + '\" has just been updated');
    });
  }
}