import { Component, OnInit } from '@angular/core';
import { DogsService } from '../../services/dogs.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  dogsArray:any = [];

  constructor(
    private dogService: DogsService
  ) {
    this.dogService.getDogs()
      .subscribe( data => {
        console.log(data);
        this.dogsArray = data;


      });
  }

  ngOnInit() {
  }

}
