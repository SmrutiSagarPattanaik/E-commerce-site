(self.webpackChunkproject_amazon_final=self.webpackChunkproject_amazon_final||[]).push([[924],{492:(n,o,r)=>{"use strict";r.r(o),r.d(o,{SignInModuleModule:()=>d});var e=r(116),t=r(384),s=r(462),i=r(619);function u(n,o){1&n&&(i.TgZ(0,"p",10),i._uU(1," Check userName or password. If new user then sign up. "),i.qZA())}function a(n,o){1&n&&(i.TgZ(0,"p",10),i._uU(1," username required. "),i.qZA())}function c(n,o){if(1&n&&(i.ynx(0),i.YNc(1,a,2,0,"p",6),i.BQk()),2&n){const n=i.oxw();i.xp6(1),i.Q6J("ngIf",n.signInForm.controls.userName.errors.required&&n.signInForm.controls.userName.touched&&n.signInForm.controls.userName.dirty)}}function g(n,o){1&n&&(i.TgZ(0,"p",10),i._uU(1," password required. "),i.qZA())}function p(n,o){if(1&n&&(i.ynx(0),i.YNc(1,g,2,0,"p",6),i.BQk()),2&n){const n=i.oxw();i.xp6(1),i.Q6J("ngIf",n.signInForm.controls.password.errors.required&&n.signInForm.controls.password.touched&&n.signInForm.controls.password.dirty)}}const m=[{path:"",component:(()=>{class n{constructor(n,o){this.formBuilder=n,this.router=o,this.signInForm=this.formBuilder.group({userName:["",s.kI.required],password:["",s.kI.required]})}ngOnInit(){this.UserExist=!0}goToRegisterPage(){this.router.navigate(["/signUp"])}signIn(){let n=JSON.parse(localStorage.getItem(this.signInForm.get("userName").value)),o=this.signInForm.get("password").value,r="";n?(r=window.atob(n.pass),r===o&&(localStorage.setItem("currentUser",n.user),this.router.navigate(["./home"])),this.UserExist=!1):this.UserExist=!1}}return n.\u0275fac=function(o){return new(o||n)(i.Y36(s.qu),i.Y36(t.F0))},n.\u0275cmp=i.Xpm({type:n,selectors:[["app-sign-in-form"]],decls:18,vars:5,consts:[[1,"sign-in-title"],[3,"formGroup","ngSubmit"],[1,"username-section"],["type","text","formControlName","userName"],[1,"password-section"],["type","password","formControlName","password"],["class","error-messages",4,"ngIf"],["type","submit",1,"sign-in-button",3,"disabled"],["type","button",1,"sign-up-button",3,"click"],[4,"ngIf"],[1,"error-messages"]],template:function(n,o){1&n&&(i.TgZ(0,"h1",0),i._uU(1,"SignIn"),i.qZA(),i.TgZ(2,"form",1),i.NdJ("ngSubmit",function(){return o.signIn()}),i.TgZ(3,"section",2),i.TgZ(4,"label"),i._uU(5,"User Name*: "),i.qZA(),i._UZ(6,"input",3),i.qZA(),i.TgZ(7,"section",4),i.TgZ(8,"label"),i._uU(9,"Password*: "),i.qZA(),i._UZ(10,"input",5),i.qZA(),i.YNc(11,u,2,0,"p",6),i.TgZ(12,"button",7),i._uU(13," Sign In "),i.qZA(),i.TgZ(14,"button",8),i.NdJ("click",function(){return o.goToRegisterPage()}),i._uU(15," Sign Up "),i.qZA(),i.YNc(16,c,2,1,"ng-container",9),i.YNc(17,p,2,1,"ng-container",9),i.qZA()),2&n&&(i.xp6(2),i.Q6J("formGroup",o.signInForm),i.xp6(9),i.Q6J("ngIf",!o.UserExist),i.xp6(1),i.Q6J("disabled",o.signInForm.invalid),i.xp6(4),i.Q6J("ngIf",o.signInForm.controls.userName.errors),i.xp6(1),i.Q6J("ngIf",o.signInForm.controls.password.errors))},directives:[s._Y,s.JL,s.sg,s.Fj,s.JJ,s.u,e.O5],styles:[".password-section[_ngcontent-%COMP%], .username-section[_ngcontent-%COMP%]{text-align:center;margin-bottom:20px}.sign-in-button[_ngcontent-%COMP%], .sign-up-button[_ngcontent-%COMP%]{display:block;border:solid;margin:auto auto 20px;background-color:#fff;font:normal normal 15px Roboto,sans-serif}.sign-in-button[_ngcontent-%COMP%]:hover, .sign-up-button[_ngcontent-%COMP%]:hover{cursor:pointer;background-color:#0ff}.sign-in-title[_ngcontent-%COMP%]{text-align:center;font:normal 700 30px Roboto,sans-serif;text-decoration:underline}.error-messages[_ngcontent-%COMP%]{color:red;font:normal 700 15px Roboto,sans-serif;text-align:center}"]}),n})()}];let l=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=i.oAB({type:n}),n.\u0275inj=i.cJS({imports:[[t.Bz.forChild(m)],t.Bz]}),n})(),d=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=i.oAB({type:n}),n.\u0275inj=i.cJS({imports:[[e.ez,l,s.UX]]}),n})()}}]);