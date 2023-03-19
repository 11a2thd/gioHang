// const Login = document.querySelector('.Login');
// const home = document.querySelector('.home');
// const button_login = document.querySelector('.button_login');
const admin_btn = document.querySelector('.admin_btn');
const user_btn = document.querySelector('.user_btn');
const ad = document.querySelector('.ad');
const insert = document.querySelector('.insert');
const button_insert = document.querySelector('.button_insert');
const button_erase = document.querySelector('.button_erase');

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
	var mua_btn = Object.values(document.querySelectorAll('.mua_btn'))
	var mua = mua_btn.map(function(mua){
		return mua.style.display = 'none'
	})
	admin_btn.style.display = 'none';
	ad.style.display = 'block';
	user_btn.style.display = 'block';
}

user_btn.onclick = function (){
	var mua_btn = Object.values(document.querySelectorAll('.mua_btn'))
	var mua = mua_btn.map(function(mua){
		return mua.style.display = 'block'
	})
	admin_btn.style.display = 'block';
	ad.style.display = 'none';
	user_btn.style.display = 'none';
	insert.style.display = 'none';
	var mua = mua_btn.map(function(mua){
		mua.onclick = function (){
			confirm('Có cái con cặc!!!')
		}
	})
	var xoa_btn = Object.values(document.querySelectorAll('.xoa_btn'))
	var xoa = xoa_btn.map(function(xoa){
		return xoa.style.display = 'none'
	})
}

button_insert.onclick = function (){
	insert.style.display = 'block';
	var xoa_btn = Object.values(document.querySelectorAll('.xoa_btn'))
	var xoa = xoa_btn.map(function(xoa){
		return xoa.style.display = 'none'
	})
}

function edit(){
	document.querySelector('.insert').style.display = 'block';
}

const arrs = []

var link_anh = document.getElementsByClassName('link_anh')
var ten_sp = document.getElementsByClassName('ten_sp')
var so_luong = document.getElementsByClassName('so_luong')
var gia = document.getElementsByClassName('gia')

for(var i = 0; i < ten_sp.length; i++){
	arrs.push({
		link_anh: link_anh[i].src,
		ten_sp: ten_sp[i].innerHTML,
		so_luong: so_luong[i].innerHTML,
		gia: gia[i].innerHTML,
	})
}

function them(){
	if(document.getElementById("ten_sp").value === '' || 
	document.getElementById("link_anh").value === '' || 
	document.getElementById("so_luong").value === '' || 
	document.getElementById("gia").value === '') {
		confirm("Điền số liệu!!!")
	}
	else{
		arrs.push({
			link_anh: `${document.getElementById("link_anh").value}`,
			ten_sp: `${document.getElementById("ten_sp").value}`,
			so_luong: `${document.getElementById("so_luong").value}`,
			gia: `${document.getElementById("gia").value}`
		})
	}
	them1(arrs[arrs.length - 1])
	console.log(arrs)
	document.getElementById("link_anh").value = ""
	document.getElementById("ten_sp").value = ""
	document.getElementById("so_luong").value = ""
	document.getElementById("gia").value = ""	
}

function them1(arrs){
		return document.getElementById("san_pham").insertAdjacentHTML('beforeend', `<div class="sanPham" align="center">
		<img src="${arrs.link_anh}" alt="${arrs.ten_sp}" class="img_sp link_anh">
		<div class="thong_tin">
			<h3 class="ten_sp">${arrs.ten_sp}</h3>
			<p class="so_luong">Số lượng: ${arrs.so_luong}</p>
			<p class="gia">Giá: ${arrs.gia} đ</p>
			<button class="mua_btn" style="display: none;">Mua hàng</button>
			<button class="xoa_btn" style="display: none;">Xóa hàng</button>
		</div>
	</div>`) 
}

button_erase.onclick = function (){
	document.querySelector('.insert').style.display = 'none';
	var mua_btn = Object.values(document.querySelectorAll('.mua_btn'))
	var mua = mua_btn.map(function(mua){
		return mua.style.display = 'none'
	})
	var xoa_btn = Object.values(document.querySelectorAll('.xoa_btn'))
	var xoa = xoa_btn.map(function(xoa){
		return xoa.style.display = 'block'
	})
	return xoa_hang()
}

function xoa_hang(){
	var arr = Object.values(document.querySelectorAll('.xoa_btn'))
	console.log(arr)
	var xoa1 = arr.map(function(arr, index){
		arr.onclick = function (){
			document.getElementsByClassName('sanPham')[index].remove()
			return xoa_hang()
		}	
	})
}

function logOut(){
	document.querySelector('.logOut').style.display = 'none';
	document.querySelector('.sign').style.display = 'block';
	document.querySelector('.home').style.display = 'block';
}

function test(){
	
}
