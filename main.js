function Mua(){
	confirm('Có cái đặc cầu!!!')
}

function login(){
	var userName = document.getElementById("user_name").value
	var passWord = document.getElementById("user_password").value
	if(userName == 'ngocnhatbruh' && passWord == "Ngoc123456"){
		login.style.display = 'none'
		home.style.display = 'block'
		
	}
	else confirm('Đăng nhập không thành công.')
}