import { Gist } from './gist.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';

@Injectable()
export class GistService {
  API = environment.serverUrl;            // The server/API url

  constructor(private httpClient: HttpClient) {
  }

  // Get all saved gists
  getAllGists() {
    return this.httpClient.get(this.API + '/api/gist');
  }

  // Get a gist by Id
  getGistById(gistId) {
    return this.httpClient.get(this.API + '/api/gist/' + gistId);
  }

  // Save a new gist
  postGist(gist: Gist) {
    return this.httpClient.post(this.API + '/api/gist', gist);
  }

  // update a gist
  updateGist(gist: Gist) {
    return this.httpClient.put(this.API + '/api/gist', gist);
  }

  // delete a gist
  deleteGist(gistId) {
    return this.httpClient.delete(this.API + '/api/gist/' + gistId);
  }
}
