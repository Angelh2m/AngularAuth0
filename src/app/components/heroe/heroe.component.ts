import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Dog } from '../interface/hero.interface';
import { DogsService } from '../../services/dogs.service';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {

  dog: Dog = {
    name: '',
    breed: '',
    bio: '',
    size: '',
  };

  new: boolean = false;
  id: string = " " ;

  // Activated route allows to get the params of the url
  constructor(
    private router: Router,
    private dogsService: DogsService,
    private activatedRoute: ActivatedRoute
  ) {

    this.activatedRoute.params
      .subscribe( parameters => this.id = parameters['id'] );

  }

  ngOnInit() {
  }

  save() {

    if( this.id == "new"){
      console.log(this.dog);
      // Inject the Service + the Model data
      this.dogsService.newDog( this.dog )
        // Get data with subscribe
        .subscribe( data => {
                                // Route + URL parameter
          this.router.navigate(['firebase', data.name ])
        },
        error => console.log(error)
      );

    } else {

      this.dogsService.update( this.dog, this.id)
        .subscribe( data => {
          console.log(data);

          // this.router.navigate(['firebase', data.name ]);
        });
    }

  }

}
