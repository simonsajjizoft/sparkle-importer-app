import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AuthService } from "src/app/services/auth.service";
import { ApiService } from 'src/app/services/api.service';
import { ToastrServices } from 'src/app/services/toastr.service';
// import { UserViewsService } from 'src/app/services/user-views.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  showLoginForm: boolean = false;
  wrongUser: boolean | any;
  toggleSpinner: boolean | any;
  hide: boolean = true;
  hideoldpass: boolean = true;
  hidenewpass: boolean = true;
  hideconfirmpass: boolean = true;
  accBlocked: boolean | any;
  loginView: boolean | any = true;
  currentEmail: any;
  passwordChangeForm: FormGroup;
  loader:boolean = false;
  userToken:any;
  isCookieEnabled:any;
  @ViewChild('updatedEmail') updatedEmail: ElementRef | any;
  // @HostListener('document:keydown', ['$event'])
  // handleKeyboardEvent(e: KeyboardEvent) {
  //   if (e.key === 'F12') {
  //     return false;
  //   }
  //   if (e.ctrlKey && e.shiftKey && e.key === "I") {
  //     return false;
  //   }
  //   if (e.ctrlKey && e.shiftKey && e.key === "C") {
  //     return false;
  //   }
  //   if (e.ctrlKey && e.shiftKey && e.key === "J") {
  //     return false;
  //   }
  //   if (e.ctrlKey && e.key == "U") {
  //     return false;
  //   }
  //   return true;
  // }

  constructor(private formBuilder: FormBuilder, private router: Router, public auth: AuthService,private apiService:ApiService,private toastr:ToastrServices) {
    // document.addEventListener('contextmenu', function(e) {
    //   e.preventDefault();
    // });
    this.isCookieEnabled = navigator?.cookieEnabled;
    // this.userViewService.getUserToken().subscribe((item: any) => {
    //   this.userToken = item;
    // });
    if (this.auth.isAuthenticated()) {
      console.log(this.userToken)
      let userToken = this.userToken;
      if (userToken) this.router.navigate(['/importer']);
      if (!userToken) this.showLoginForm = true;
    }
    else this.showLoginForm = true;
    this.loginForm = this.formBuilder.group({
      email: [null, Validators.required,],
      password: [null, [Validators.required],
      ],
    });
    this.passwordChangeForm = this.formBuilder.group({
      uemail: ['', Validators.nullValidator],
      oldpassword: ['', Validators.nullValidator],
      newpassword: ['', Validators.nullValidator],
      confirmpassword: ['', Validators.nullValidator]
    }, { validator: ()=>{} })
  }

  ngOnInit(): void { }

  get email() {
    return this.loginForm.get("email");
  }

  get password() {
    return this.loginForm.get("password");
  }

  get uemail() {
    return this.passwordChangeForm.get("uemail");
  }

  get oldpassword() {
    return this.passwordChangeForm.get("oldpassword");
  }

  get newpassword() {
    return this.passwordChangeForm.get("newpassword");
  }

  get confirmpassword() {
    return this.passwordChangeForm.get("confirmpassword");
  }

  setUemail() {
    let currentEmail = this.loginForm.get("email");
    this.passwordChangeForm.controls['uemail'].setValue(currentEmail?.value);
  }

  submitClick(): void {
    this.toggleSpinner = true;
    this.loader = true;
    this.loginForm.controls['email'].setValue(this.loginForm?.value?.email.toLowerCase().trim());
    this.loginForm.controls['password'].setValue(this.loginForm?.value?.password.trim());
    let currentEmail:any = this.loginForm.controls['email'].getRawValue();
    let currentPass:any = this.loginForm.controls['password'].getRawValue();
    let payload = {
      "Email":currentEmail,
      "Password":currentPass
    }
    this.apiService.post(`${environment.coreApiUrl}/login`,payload).subscribe(
      (data:any)=>{
        if(data?.message == "Success"){
          // this.userViewService?.setUserToken(payload?.Email);
          this.toastr.success("Successfully Signed In");
          this.loader = false;
          this.router.navigate(['/map'])

        }
        else{
          this.toastr.error(data?.message);
          this.loader = false;
        }
      },
      (error)=>{
        this.toastr.error("Failed to Sign In")
        this.loader = false;
      }
    )
  }

  checkTimeDifference(oldTime: any) {
    const currentDate: any = new Date();
    oldTime = new Date(oldTime)
    const diffMs = (currentDate - oldTime); // milliseconds between now & old
    let diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000); // minutes
    return diffMins < 10 ? true : false;
  }

  RemoveInvalidErr(): void {
    this.wrongUser = false;
  }

  switchView(event) {
    event?.stopPropagation();
    this.loginView = !this.loginView;
    if (!this.loginView) this.setUemail();
  }

  updateEmailValue(value: any) {
    this.currentEmail = value;
  }

  passwordChange() {
    this.loader = true;
    let uemail = this.uemail;
    let oldpassword = this.oldpassword;
    let newpassword = this.newpassword;
    let confirmpassword = this.confirmpassword;
    if(uemail?.value.toLowerCase().trim() == '' || oldpassword?.value.trim() == '' || newpassword?.value.trim() == '' || confirmpassword?.value?.trim() == ''){
      this.clearPasswordChangeForm();
      this.loader = false;
      this.toastr.warning("Please enter all the required fields");
      return;
    }
    let payload = {
      "Email": uemail?.value.toLowerCase().trim(),
      "Old_Password": oldpassword?.value.trim(),
      "New_Password": newpassword?.value.trim()
    }
    this.apiService.put(`${environment.coreApiUrl}/change_password`,payload).subscribe(
      (data:any)=>{
        if(data?.message){
          this.toastr.info(data?.message);
          this.loader = false;
          this.clearPasswordChangeForm();
        }
        else{
          this.toastr.error("Failed to Update Password")
          this.loader = false;
          this.clearPasswordChangeForm();
        }
      },
      (error)=>{
        this.toastr.error("Failed to Update Password")
        this.loader = false;
        this.clearPasswordChangeForm();
      }
    )
  }

  clearPasswordChangeForm(){
    this.passwordChangeForm.reset();
  }

  toggleViewPassword(event){
    event?.stopPropagation();
    this.hide = !this.hide;
  }

}
