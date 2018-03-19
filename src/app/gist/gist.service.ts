import { Gist } from './gist.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GistService {
  constructor(private http: HttpClient) {
  }

  // Get all saved gists
  getAllGists() {
    return this.http.get('/api/gist');
  }

  // Get a gist by Id
  getGistById(gistId) {
    return this.http.get('/api/gist/' + gistId);
  }

  // register a new gist
  postGist(gist: Gist) {
    return this.http.post('/api/gist', gist);
  }

  // update a gist
  updateGist(gist: Gist) {
    return this.http.put('/api/gist', gist);
  }

  // delete a gist
  deleteGist(gistId) {
    return this.http.delete('/api/gist/' + gistId);
  }
}
