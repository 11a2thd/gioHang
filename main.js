// const Login = document.querySelector('.Login');
// const home = document.querySelector('.home');
// const button_login = document.querySelector('.button_login');
const admin_btn = document.querySelector('.admin_btn');
const user_btn = document.querySelector('.user_btn');
const mua_btn = Object.values(document.querySelectorAll('.mua_btn'))

var mua = mua_btn.map(function(mua){
	mua.onclick = function (){
		confirm('Có cái con cặc!!!')
	}
})

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

admin_btn.onclick = function (){
	var mua1 = mua_btn.map(function(mua){
		return mua.style.display = 'none'
	})
	document.querySelector('.admin_btn').style.display = 'none';
	document.querySelector('.ad').style.display = 'block';
	document.querySelector('.user_btn').style.display = 'block';
}

user_btn.onclick = function (){
	var mua1 = mua_btn.map(function(mua){
		return mua.style.display = 'block'
	})
	document.querySelector('.admin_btn').style.display = 'block';
	document.querySelector('.ad').style.display = 'none';
	document.querySelector('.user_btn').style.display = 'none';
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
		return document.getElementById("san_pham").innerHTML += `
																<div align="center" class="sanPham">
                    <img src="${arrs.link}" alt="${arrs.ten}" class="img_sp">
                    <div class="thong_tin">
                        <h3>${arrs.ten}</h3>
                        <p>Số lượng: ${arrs.so_luong}</p>
                        <p>Giá: ${arrs.gia} đ</p>
                        <button class="mua_btn" style="display: none;">Mua hàng</button>
                    </div>
                </div>`
	})
}

function logOut(){
	document.querySelector('.logOut').style.display = 'none';
	document.querySelector('.sign').style.display = 'block';
	document.querySelector('.home').style.display = 'block';
}

function test(){
	
}
