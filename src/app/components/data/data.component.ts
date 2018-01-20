import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
// import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent  {

  form: FormGroup;

  user: Object = {
    completeName: {
      name: 'Angel',
      lastName: 'Hernandez'
    },
    email: 'Angel@gmail.com',
    hobbies: ['Run', 'Eat', 'Read']
  }

  constructor() {

    this.form = new FormGroup({

      'completeName': new FormGroup({
          'name': new FormControl('', [
                                        Validators.required,
                                        Validators.minLength(3)
                                      ]),
          'lastName': new FormControl('',[ Validators.required,
                                          this.noSpecificLast
                                        ])
      }),

      'email': new FormControl('', [
                                      Validators.required,
                                      Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')
                                    ]),
      'hobbies': new FormArray([
        new FormControl('Run', Validators.required)
      ]),
      'username': new FormControl('', Validators.required, this.existUser),
      'password1': new FormControl('', Validators.required),
      'password2': new FormControl(),

        // }),
      });
      // Assign custom validation
      this.form.controls['password2'].setValidators([
        Validators.required,
        this.notTheSame.bind( this.form ),
      ]);

      // this.form.controls['name'].statusChanges
      //   .subscribe( data => {
      //     console.log(data);
      // });

    // this.form.setValue( this.user );


  }

  noSpecificLast( control: FormControl ) {
      if( control.value === "herrera") {
        return {
          noherrera: true
        }
      }
      return null;
  }

  existUser( control: FormControl ): Promise<any>|Observable<any> {
    let promise =  new Promise( (resolve, reject ) => {
        setTimeout( () =>{
          if( control.value === 'strider' ){
            resolve({ exist: true })
          }else{
            resolve( null )
          }
        }, 3000 )
      }
    )
    return promise;
  }

  notTheSame( control: FormControl ) {


    // if( control.value !== this.control['password1'].value) {
    //   return {
    //     noTheSame: true
    //   }
    // }
    return null;
}

  addHobbie(){
    (<FormArray>this.form.controls['hobbies']).push(
      new FormControl('Sleep', Validators.required)
    )
  }

  saveChanges(){


    console.log(this.user);
    console.log(this.form.value);
    console.log(this.form);

      // this.form.reset({
    //   completeName:{
    //     name: '',
    //     lastName: ''
    //   },
    //   email: ''
    // });


  }

}
