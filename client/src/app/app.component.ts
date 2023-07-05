import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from './_models/user';
import { AccountService } from './_services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'The Dating App';
  users: any;


  constructor(private accountService: AccountService) {}
  ngOnInit() {
    this.setCurrentUser();
  }

  setCurrentUser() { 
    
    const user : User = JSON.parse(localStorage.getItem('user') as string); //convert type to string
    
    //get data user from local storage and pass it to current user
      this.accountService.setCurrentUser(user);
}

  
}
