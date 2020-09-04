import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime } from 'rxjs/operators'


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss', './floating-labels.css']
})
export class WelcomeComponent implements OnInit {


  guestInformation: any = {};
  guestName: string;

  form: FormGroup;

  private buildForm() {
    this.form = this.formBuilder.group({
      guestName: ['', [Validators.required]]
    });
    // this.form.valueChanges
    //   .pipe(
    //     debounceTime(500)
    //   )
    //   .subscribe(value => {
    //     console.log(value)
    //   })
  }



  constructor(
    private _router: Router,
    private formBuilder: FormBuilder,
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
  }

  comienza() {
    // let guestName = this.guestInformation.value.guestName
    // console.log(guestName)
    // if (guestName) {
    //   localStorage.setItem('guestName',guestName)
    this._router.navigate(['/wedding'])
    // }
    // else {
    //   console.log('Dime quién eres')
    // }
  }

  save(event: Event) {
    event.preventDefault();
    let guestName = this.form.value.guestName;
    console.log(guestName);
    if(this.form.valid){
      localStorage.setItem('guestName', guestName)
      this._router.navigate(['/wedding'])
    }
    const value = this.form.value;
  }

}
