import { Component } from '@angular/core';
import { User } from '../model/User';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css'],
})
export class ListUserComponent {
  users: User[]=
  [ 
    { id: 1, 
      firstName: "Mila", 
      lastName: " Kunis", 
      birthDate: "1999-06-30", 
      accountCategory: "Admin", 
      email: "mila@kunis.com", 
      password: "test", 
      picture: "https://bootdey.com/img/Content/avatar/avatar3.png", 
      profession: "Software Engineer" 
    }, 
    { id: 2, 
      firstName: "George", 
      lastName: "Clooney", 
      birthDate: "1999-06-30", 
      accountCategory: "Customer", 
      email: "marlon@brando.com", 
      password: "test", 
      picture: "https://bootdey.com/img/Content/avatar/avatar2.png", 
      profession: "Software Engineer" 
    }, 
    { id: 3, 
      firstName: "George", 
      lastName: "Clooney", 
      birthDate: "1999-06-30", 
      accountCategory: "Customer", 
      email: "marlon@brando.com", 
      password: "test", 
      picture: "https://bootdey.com/img/Content/avatar/avatar1.png", 
      profession: "Software Engineer" 
    }, 
    { id: 4, 
      firstName: "Ryan", 
      lastName: "Gossling", 
      birthDate:"1999-06-30", 
      accountCategory: "Golden", 
      email: "Ryan@nicholson.com", 
      password: "test", 
      picture: "https://bootdey.com/img/Content/avatar/avatar4.png", 
      profession: "Software Engineer"
    }, 
    { id: 5, 
      firstName: "Robert", 
      lastName: "Downey", 
      birthDate: "1999-06-30", 
      accountCategory: "Blocked Account", 
      email: "robert@nicholson.com", 
      password: "test", 
      picture: "https://bootdey.com/img/Content/avatar/avatar5.png", 
      profession: "Software Engineer" 
    }
  ]

  categoryFilter: string = '';
  nameFilter: string = '';
  categoryFilterr: string = '';
  nameFilterr: string = '';

  delete(pos:number){
    this.users.splice(pos,1);
  }
  
  get filteredUsers(): User[] {
    return this.users.filter(user =>
      user.accountCategory.toLowerCase().includes(this.categoryFilter.toLowerCase())
    );
  }
  get filterdName(): User[] {
    return this.users.filter(user =>
      user.lastName.toLowerCase().includes(this.nameFilter.toLowerCase())
    );
  }
    

}
