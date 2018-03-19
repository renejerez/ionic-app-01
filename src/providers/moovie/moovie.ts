import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

/*
  Generated class for the MoovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MoovieProvider {
  private baseApiPath = "https://api.themoviedb.org/3";
  private api_key = "b388f932b41f21570197df675e6ee23a";
  constructor(public http: Http) {
    console.log('Hello MoovieProvider Provider');
  }
getLatestMovies() {

  return this.http.get(this.baseApiPath + "/movie/popular?api_key=" + this.api_key)
}
}
