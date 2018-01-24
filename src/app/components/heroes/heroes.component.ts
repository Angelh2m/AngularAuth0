import { Component, OnInit } from '@angular/core';
import { DogsService } from '../../services/dogs.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  dogsArray:any[] = [];
  loading:boolean = true;

  constructor(
    private dogService: DogsService
  ) {
    this.dogService.getDogs()
      .subscribe( data => {
        this.dogsArray = data;
        // this.loading = false;
        setTimeout(() => this.loading = false, 3000);
        // for( let key$ in data){
        //   console.log(data[key$]);
        //   this.dogsArray.push( data[key$]);
        // }


      });
  }

  ngOnInit() {
  }

}
