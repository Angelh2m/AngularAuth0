import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Dog } from '../components/interface/hero.interface';
import 'rxjs/add/operator/map';


@Injectable()
export class DogsService {

  fireURL = 'https://appone-7cdcc.firebaseio.com/dogs.json';
  updateURL = 'https://appone-7cdcc.firebaseio.com/dogs';

  constructor( private http: Http ) { }

  // POST METHOD
  newDog( dog: Dog ){
    const body = JSON.stringify(dog);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http.post( this.fireURL, body, { headers })
      .map( res => {
        console.log( res.json() );
        return  res.json();
      })
  }

  // UPDATE METHOD
  update( dog: Dog , key$: string ){
    const body = JSON.stringify(dog);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    let url = `${this.updateURL}/${ key$ }.json`;

    return this.http.put( url, body, { headers })
      .map( res => {
        console.log( res.json() );
        return  res.json();
      })
  }

  getDogs(){
    return this.http.get( this.fireURL )
      // Structure the data before subscribe
      .map( res => res.json());
  }
}
