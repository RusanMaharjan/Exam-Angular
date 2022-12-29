import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private userService:UserService, private _snackBar: MatSnackBar) { }

  public user = {
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  }

  ngOnInit(): void {}

  formSubmit() {
    if(this.user.username=='' || this.user.username==null, 
    this.user.firstName == '' || this.user.firstName == null,
    this.user.lastName == '' || this.user.lastName == null,
    this.user.email == '' || this.user.lastName == null,
    this.user.phone == '' || this.user.phone == null,
    this.user.password == '' || this.user.password == null) {
      this._snackBar.open("Please fill all fields!!", '', {
        duration: 3000,
      });
      return;
    }

    //addUser: userService
    this.userService.addUser(this.user).subscribe(
      (data:any)=>{
        //success
        Swal.fire('Success', data.username+' Registered', 'success');       
      },
      (error)=>{
        //error
        // this._snackBar.open("Something went wrong!!, User already exist", '', {
        //   duration: 3000,
        // });
        Swal.fire('Error', 'Username already exists.', 'error');
      }
    )
  }

}
