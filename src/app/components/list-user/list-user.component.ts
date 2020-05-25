import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  users: User[];
//Router -> navigation
//UserService -> perform CRUD operations via backed API using Http build-in service mrthods
  constructor(private router: Router, private userService: UserService) { }

 // Initialize with default list of users
 ngOnInit() { 
   if(localStorage.getItem("username")!=null)
   {
    this.userService.getUsers()
  .subscribe(data=> { 
    this.users = data; 
  });
} 
else this.router.navigate(['/login']); } //
     // logOff   user 
     logOutUser():void{ 
       if(localStorage.getItem("username")!=null){
          localStorage.removeItem("username"); 
          this.router.navigate(['/login']);
         } 
        } // Delete User
         deleteUser(user: User): void { 
           let result = confirm('Do you want to delete the user?') 
           if(result) 
           {
              this.userService.deleteUser(user.id)
               .subscribe( data => { 
                 this.users = this.users.filter(u => u !== user);
                 }); 
                } 
              }; 
              // Modify USer
               editUser(user: User): void { 
                 localStorage.removeItem("editUserId"); 
                 localStorage.setItem("editUserId", user.id.toString()); 
                 this.router.navigate(['edit-user']);
                 }; 
                 // Add New User 
                 addUser(): void {
                    this.router.navigate(['add-user']); 
                  };
}