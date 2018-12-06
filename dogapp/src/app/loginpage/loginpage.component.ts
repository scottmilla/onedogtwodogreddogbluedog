import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config-service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss']
})
export class LoginpageComponent implements OnInit {

	firstName = '';
	lastName = '';
	organization = '';
	phone = '';
	email = '';
	username = '';
	pass = '';
	user = "";
	password = "";
	constructor(private svc:ConfigService){
  }
  ngOnInit() {
	}

	//login functions
	loginformchange(event){
		this.user = event.srcElement.value
		console.log(this.user);
	}
	passwordformchange(event){
		this.password = event.srcElement.value
		console.log(this.password);
	}
	finishLogin(event){
		this.svc.login(this.user,this.password).subscribe(data=>{
				console.log(data.json());
		});
	}

	//register functions
	firstname(event){
		this.firstName = event.srcElement.value;
	}
	lastname(event){
		this.lastName = event.srcElement.value;
	}
	org(event){
		this.organization = event.srcElement.value;
	}
	phonechange(event){
		this.phone = event.srcElement.value;
	}
	emailchange(event){
		this.email = event.srcElement.value;
	}
	userchange(event){
		this.username = event.srcElement.value;
	}
	passchange(event){
		this.pass = event.srcElement.value;
	}
	registerUser(event){
		var jobj = {"clientid": "0", "firstName":this.firstName,"lastName":this.lastName,
		"organization": this.organization, "email":this.email, "phone":this.phone, "password": this.pass}
		this.svc.registerUser(jobj).subscribe(data=>{
		console.log(data.json().token);
		
		// this.name = data.json().dog[0].name;
	});
  



}
}

/* not sure where to put below code or if it's needed: it was in the online thing

$(function() {

    $('#login-form-link').click(function(e) {
		$("#login-form").delay(100).fadeIn(100);
 		$("#register-form").fadeOut(100);
		$('#register-form-link').removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
	});
	$('#register-form-link').click(function(e) {
		$("#register-form").delay(100).fadeIn(100);
 		$("#login-form").fadeOut(100);
		$('#login-form-link').removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
	});

});

*/
