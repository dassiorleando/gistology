import { Gist } from './gist.model';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GistService {
  constructor(private http: Http) {
  }

  // Get all saved gists
  getAllGists(){
    return this.http.get('/api/gist')
      .map(res => res.json());
  }

  // Get a gist by Id
  getGistById(gistId){
    return this.http.get('/api/gist/' + gistId)
      .map(res => res.json());
  }

  // register a new gist
  postGist(gist: Gist){
    return this.http.post('/api/gist', gist)
      .map(res => res.json());
  }

  // update a gist
  updateGist(gist: Gist){
    return this.http.put('/api/gist', gist)
      .map(res => res.json());
  }

  // delete a gist
  deleteGist(gistId){
    return this.http.delete('/api/gist/' + gistId)
      .map(res => res.json());
  }
}