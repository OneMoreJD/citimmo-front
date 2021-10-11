import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RegisterService } from './register.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogData } from '../../dialog/dialog.model';
import { DialogComponent } from '../../dialog/dialog.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public emailAlreadyRegistered:boolean = false;  
  public registrationForm : FormGroup = this.fb.group({
    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
    email: ['', [Validators.email, Validators.required]],
    phone: [''],
    password: ['', Validators.required]
  });

  private readonly registrationSuccessful : DialogData = {
    dialogType: "success",
    title: "Success",
    message: "Your registration has been completed. Redirecting you to the login page...",
    hasCountdown: true,
    countdownDuration: 5,
  }

  public showClearPassword: boolean;

  constructor(private fb:FormBuilder,
              private registerService:RegisterService,
              private dialog:MatDialog,
              private router:Router) { }

  ngOnInit(): void {
  }

  toggleShowClearPassword():void {
    this.showClearPassword = !this.showClearPassword;
  }

  resetError():void {
    this.emailAlreadyRegistered = false;
  }
  
  onSubmit():void {
    this.registerService.submitRegistration(this.registrationForm.value).subscribe(
      (res) => { 
            console.log(res);
      },
      (err) => {
        this.emailAlreadyRegistered = true;
        console.log(err)
      },
      () => {
        this.showSuccessfulRegistrationDialog();
        this.router.navigate(['/login']);  
      }
    );    
  }

  showSuccessfulRegistrationDialog() : void { 
    let dialogRef = this.dialog.open(DialogComponent, {
        data: this.registrationSuccessful,
        height: '400px',
        width: '600px'
    });
    setTimeout(() => {
      dialogRef.close();
    }, 5000) 
  }

}
