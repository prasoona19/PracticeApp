import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'; import { Router } from '@angular/router';

import {first} from 'rxjs/operators';
import { User } from 'src/app/model/User';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  user: User; 
  editForm: FormGroup; submitted: boolean = false; 
  constructor(private formBuilder: FormBuilder,
    private router: Router, private userervice: UserService) { } 
  ngOnInit() 
  { 
    if(localStorage.getItem("username")!=null)
    { 
      let userId = localStorage.getItem("editUserId"); 
      if(!userId)
       { 
         alert("Invalid action.") 
         this.router.navigate(['list-user']); 
         return; 
        }
         this.editForm = this.formBuilder.group({ id: [], email: ['', Validators.required], firstName: ['', Validators.required], lastName: ['', Validators.required] 
    }); 
    this.userervice.getUserById(+userId) .subscribe( data => { this.editForm.setValue(data); }); } else this.router.navigate(['/login']); 
  }
     onSubmit()
      { 
        this.submitted = true; 
        if(this.editForm.invalid)
        { 
          return; 
        } 
        this.userervice.updateUser(this.editForm.value) .pipe(first()) .subscribe(
    data => { this.router.navigate(['list-user']); }, error => { alert(error); }); } 
    // logOff user 
    logOutUser():void{ 
      if(localStorage.getItem("username")!=null)
      {
         localStorage.removeItem("username"); 
         this.router.navigate(['/login']); }
         } }
