// const Login = document.querySelector('.Login');
// const home = document.querySelector('.home');
// const button_login = document.querySelector('.button_login');

function Mua(){
	confirm('Có cái con cặc!!!')
}

function login1(){
	document.querySelector('.home').style.display = 'none';
	document.querySelector('.Login').style.display = 'block';
}

function login(){
	var userName = document.getElementById("user_name").value
	var passWord = document.getElementById("user_password").value
	if(userName === 'ngocnhatbruh' && passWord === "Ngoc123456"){
		document.querySelector('.home').style.display = 'block';
		document.querySelector('.Login').style.display = 'none';
		document.querySelector('.sign').style.display = 'none';
		document.querySelector('.logOut').style.display = 'block';
	}
	else confirm('Có cái tài khoản/mật khẩu cũng đéo nhớ được.')
}

function admin(){
	var mua = Object.values(document.querySelectorAll('.mua'))
	var mua1 = mua.map(function(mua){
		return mua.style.display = 'none'
	})
	document.querySelector('.button_ad').style.display = 'none';
	document.querySelector('.ad').style.display = 'block';
	document.querySelector('.button_us').style.display = 'block';
}

function user(){
	var mua = Object.values(document.querySelectorAll('.mua'))
	var mua1 = mua.map(function(mua){
		return mua.style.display = 'block'
	})
	document.querySelector('.button_ad').style.display = 'block';
	document.querySelector('.ad').style.display = 'none';
	document.querySelector('.button_us').style.display = 'none';
	document.querySelector('.insert').style.display = 'none';
}

function insert(){	
	document.querySelector('.insert').style.display = 'block';
}

function erase(){
	document.querySelector('.insert').style.display = 'block';
}

function edit(){
	document.querySelector('.insert').style.display = 'block';
}

function them(){
	var arrs = []
	if(document.getElementById("ten_sp").value === '' || 
	document.getElementById("link_anh").value === '' || 
	document.getElementById("so_luong").value === '' || 
	document.getElementById("gia").value === '') {
		confirm("Điền số liệu!!!")
	}
	else{
		arrs.push({
			ten: `${document.getElementById("ten_sp").value}`,
			link: `${document.getElementById("link_anh").value}`,
			so_luong: `${document.getElementById("so_luong").value}`,
			gia: `${document.getElementById("gia").value}`
		})
	}
	them1(arrs)	
	document.getElementById("ten_sp").value = ""
	document.getElementById("link_anh").value = ""
	document.getElementById("so_luong").value = ""
	document.getElementById("gia").value = ""	
}

function them1(arrs){
	const html = arrs.map(function(arrs, index){
		return document.getElementById("san_pham").innerHTML += `<div align="center" class="sanPham">
																	<h3>${arrs.ten}</h3>
																	<img src="${arrs.link}" alt="${arrs.ten}" class="img">
																	<p>Số lượng: ${arrs.so_luong}</p>
																	<p>Giá: ${arrs.gia} đ</p>
																	<button class="mua" onclick="Mua()" style="display: none;">Mua hàng</button>
																</div>
																`
	})
	// document.getElementById("san_pham").innerHTML = html.join('\n')
	document.getElementById("san_pham").innerHTML = html.join('\n');
}

function logOut(){
	document.querySelector('.logOut').style.display = 'none';
	document.querySelector('.sign').style.display = 'block';
	document.querySelector('.home').style.display = 'block';
}

function test(){
	
}
