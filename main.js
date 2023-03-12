// const Login = document.querySelector('.Login');
// const home = document.querySelector('.home');
// const button_login = document.querySelector('.button_login');

function Mua(){
	confirm('Có cái đặc cầu!!!')
}

function login1(){
	document.querySelector('.home').style.display = 'none';
	document.querySelector('.Login').style.display = 'block';
}

function login(){
	var userName = document.getElementById("user_name").value
	var passWord = document.getElementById("user_password").value
	if(userName == 'ngocnhatbruh' && passWord == "Ngoc123456"){
		document.querySelector('.home').style.display = 'block';
		document.querySelector('.Login').style.display = 'none';
		document.querySelector('.sign').style.display = 'none';
		document.querySelector('.logOut').style.display = 'block';
	}
	else confirm('Có cái tài khoản/mật khẩu cũng đéo nhớ được.')
}

function logOut(){
	document.querySelector('.logOut').style.display = 'none';
	document.querySelector('.sign').style.display = 'block';
	document.querySelector('.home').style.display = 'block';
}

function test(){
	
}