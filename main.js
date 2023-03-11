function Mua(){
	confirm('Có cái đặc cầu!!!')
}

function login(){
	var userName = document.getElementById("user_name").value
	var passWord = document.getElementById("user_password").value
	if(userName == 'ngocnhatbruh' && passWord == "Ngoc123456")
	confirm('Đăng nhập thành công.')
	else confirm('Đăng nhập không thành công.')
	console.log(typeof userName)
	console.log(userName)
	console.log(typeof passWord)
	console.log(passWord)
}