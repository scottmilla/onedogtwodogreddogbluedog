import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config-service';
import { Router } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss']
})
export class LoginpageComponent implements OnInit {

  constructor(private svc:ConfigService,private location: Location,private router: Router) { }
	user = "";
	password = "";
  ngOnInit() {
  }
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
				// this.location.go("..")
				// window.location.href = "/browse";
				// window.history.replaceState({}, '',``);
				let testing = this.svc.checkConfig();
				console.log(testing);
				// this.router.navigate(['/browse']);
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
