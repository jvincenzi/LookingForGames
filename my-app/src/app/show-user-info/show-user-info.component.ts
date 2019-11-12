import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CallNodeService } from '../call-node.service';
import { UserAccount } from '../UserAccount';

@Component({
  selector: 'app-show-user-info',
  templateUrl: './show-user-info.component.html',
  styleUrls: ['./show-user-info.component.css']
})
export class ShowUserInfoComponent implements OnInit {
  myAccount: UserAccount[];
  hideUserList: Boolean = false;
  selectedUser: UserAccount;
  foundUser: UserAccount;//= new UserAccount();
  newUser: UserAccount = new UserAccount();
  deleteConfirmation: Boolean = false;
  
  firstName = new FormControl(''); 
  // firstName = new FormControl('', Validators.required);
  lastName = new FormControl('');
  eMailAddress = new FormControl('');
  userName = new FormControl('');
  userPassword1 = new FormControl('');
  userPassword2 = new FormControl('');
  userTelephone = new FormControl('');
  userDOB = new FormControl('');
  userStreetAddress = new FormControl('');
  userCity = new FormControl('');
  userState = new FormControl('');
  userZipCode = new FormControl('');
  userFreeAcc = new FormControl('');

  constructor(private callNodeService: CallNodeService) { }

  ngOnInit() {
    //this.getUser(); // Switch to this once we get user login working ///////////////////////////////////
    this.getUsers();
  }

  getUsers(): void {
    this.callNodeService.getAllUsers().subscribe((userData: UserAccount[]) => {
      this.myAccount = userData;
    })
  }
  
  editUserInfo(id: string) {
    this.getUser(id);
    this.hideUserList = true;
  }
  getUser(id: string): void {
    console.log("In getUser("+id+")");
    this.callNodeService.getUser(id).subscribe((userData: UserAccount) => {
      this.foundUser = userData;
      this.newUser = userData;
      //this.myAccount.push(userData);
      this.firstName.setValue(userData.FirstName.toString());      
      this.lastName.setValue(userData.LastName.toString());
      this.eMailAddress.setValue(userData.Email.toString());
      this.userName.setValue(userData.UserName.toString());
      this.userPassword1.setValue(userData.Password.toString());
      this.userTelephone.setValue(userData.Telephone.toString());

      //console.log("date: " + userData.DateOfBirth);
      //this.userDOB.setValue(this.gogo); // Broken: not sure how to set the default date

      this.userStreetAddress.setValue(userData.Address.toString());
      this.userCity.setValue(userData.City.toString());
      this.userState.setValue(userData.State.toString());
      this.userZipCode.setValue(userData.Zipcode.toString());
    })
  }
  
  deleteUserAccount(PassedInUserAccount: UserAccount): void {
    this.selectedUser = PassedInUserAccount;
    this.deleteUser();
    this.deleteConfirmation = false;
  }

  deletePrompt(): void {
    this.deleteConfirmation = true;
  }

  deleteUser(): void {
    console.log("This is the user to be deleted, _id: " + this.selectedUser._id); /////////////////////////////////////////////////////
    this.callNodeService.deleteUser(this.selectedUser).subscribe();
  }

  updateRecord(): void {
    //this.newUser._id = this.foundUser._id.toString();
    this.newUser.FirstName = this.firstName.value;
    this.newUser.LastName = this.lastName.value;
    this.newUser.Email = this.eMailAddress.value;
    this.newUser.UserName = this.userName.value;
    this.newUser.Password = this.userPassword1.value;
    this.newUser.Telephone = this.userTelephone.value;
    this.newUser.DateOfBirth = this.userDOB.value;
    this.newUser.Address = this.userStreetAddress.value;
    this.newUser.City = this.userCity.value;
    this.newUser.State = this.userState.value;
    this.newUser.Zipcode = this.userZipCode.value;
    this.newUser.FreeAccount = this.userFreeAcc.value;
    //this.newUser.SubscriptionExp = expDate;
    //this.newUser.SubscriptionLv = 1;
    //this.newUser.CurrentStatus = "online";
    //this.newUser.Location = "unknown";
    //this.newUser.createdOn = nowDate.toString(); 
    
    this.callNodeService.updateUser(this.newUser).subscribe();
  }

  formValidation(){
    //////////////////////////////////
    //  Put field Validation here.  //
    //////////////////////////////////
    let theDecider = true;
    if(theDecider){
      return true;
    }else{
      return false;
    }
  }

  submitModUserInfo() {
    this.hideUserList = false;
    if(this.formValidation()){
      //this.myAccount = [];
      this.updateRecord();
      //this.getUsers();
      
      //this.myAccount.push(this.newUser);
      this.getUser(this.newUser._id);
      
      
    }else{

    }
  }

}



  
  
  
  

  
  



