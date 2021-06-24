import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-actions-page',
  templateUrl: './actions-page.component.html',
  styleUrls: ['./actions-page.component.css']
})
export class ActionsPageComponent implements OnInit {

  actionsForm = this.formBuilder.group({
    actions: ['', Validators.required]
  })

  chosenOption='';

  userName="";

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.userName = localStorage.getItem('currentUser');
    this.authenticateUser();
  }

  authenticateUser() {
    if(!this.userName) {
      this.router.navigate(['/error']);
    }
  }

  onClickSignOutButton() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['/signIn']);
  }

  onClickProceed() {
   this.chosenOption=this.actionsForm.controls.actions.value;
   console.log(this.chosenOption);
  }
}
