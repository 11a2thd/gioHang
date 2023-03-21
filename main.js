// const Login = document.querySelector('.Login');
// const home = document.querySelector('.home');
// const button_login = document.querySelector('.button_login');
const arrs = []
const admin_btn = document.querySelector('.admin_btn');
const user_btn = document.querySelector('.user_btn');
const ad = document.querySelector('.ad');
const insert = document.querySelector('.insert');
const insert_btn = document.querySelector('.insert_btn');
const erase_btn = document.querySelector('.erase_btn');
const edit_btn = document.querySelector('.edit_btn');
const Them_btn = document.querySelector('.Them_btn');
const Sua_btn = document.querySelector('.Sua_btn');

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
		return xoa.style.display = 'none';
	})
	var sua_btn = Object.values(document.querySelectorAll('.sua_btn'))
	var sua = sua_btn.map(function(sua){
		return sua.style.display = 'none';
	})
}

insert_btn.onclick = function (){
	document.getElementById("link_anh").value = ""
	document.getElementById("ten_sp").value = ""
	document.getElementById("so_luong").value = ""
	document.getElementById("gia").value = ""
	insert.style.display = 'flex';
	var xoa_btn = Object.values(document.querySelectorAll('.xoa_btn'))
	var xoa = xoa_btn.map(function(xoa){
		return xoa.style.display = 'none';
	})
	var sua_btn = Object.values(document.querySelectorAll('.sua_btn'))
	var sua = sua_btn.map(function(sua){
		return sua.style.display = 'none';
	})
	Them_btn.style.display = 'block';
	Sua_btn.style.display = 'none'
}



var link_anh = document.getElementsByClassName('link_anh')
var ten_sp = document.getElementsByClassName('ten_sp')
var so_luong = document.getElementsByClassName('sl_value')
var gia = document.getElementsByClassName('gia_value')

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
		return confirm("Điền số liệu!!!")
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
	document.getElementById("link_anh").value = ""
	document.getElementById("ten_sp").value = ""
	document.getElementById("so_luong").value = ""
	document.getElementById("gia").value = ""	
}

function them1(arrs){
		return document.getElementById("san_pham").insertAdjacentHTML('beforeend', `<div class="sanPham" align="center">
		<img src="${arrs.link_anh}" alt="${arrs.ten_sp}" class="img_sp link_anh">
		<div class="thongTin">
			<h3 class="ten_sp">${arrs.ten_sp}</h3>
			<p class="sl">Số lượng:&nbsp;</p><p class="sl sl_value">${arrs.so_luong}</p><br>
			<p class="gia">Giá:&nbsp;</p><p class="gia gia_value">${arrs.gia}</p><p class="gia">&nbsp;đ</p>
			<button class="btn mua_btn" style="display: none;">Mua hàng</button>
			<button class="btn xoa_btn"  style="display: none;">Xóa hàng</button>
			<button class="btn sua_btn"  style="display: none;">Sửa hàng</button>
		</div>
	</div>`) 
}

erase_btn.onclick = function (){
	document.querySelector('.insert').style.display = 'none';
	var mua_btn = Object.values(document.querySelectorAll('.mua_btn'))
	var mua = mua_btn.map(function(mua){
		return mua.style.display = 'none'
	})
	var xoa_btn = Object.values(document.querySelectorAll('.xoa_btn'))
	var xoa = xoa_btn.map(function(xoa){
		return xoa.style.display = 'block'
	})
	var sua_btn = Object.values(document.querySelectorAll('.sua_btn'))
	var sua = sua_btn.map(function(sua){
		return sua.style.display = 'none';
	})
	return xoa_hang()
}

function xoa_hang(){
	var xoa_btn = Object.values(document.querySelectorAll('.xoa_btn'))
	var arr = xoa_btn.map(function(xoa_btn, index){
		xoa_btn.onclick = function (){
			document.getElementsByClassName('sanPham')[index].remove()
			arrs.splice(index, 1)
			return xoa_hang()
		}	
	})
}

function sua(){
	var sua_btn = Object.values(document.querySelectorAll('.sua_btn'))
	var arr = sua_btn.map(function(sua_btn, index){
		sua_btn.onclick = function (){
			document.getElementById("link_anh").value = `${arrs[index].link_anh}`
			document.getElementById("ten_sp").value = `${arrs[index].ten_sp}`
			document.getElementById("so_luong").value = `${arrs[index].so_luong}`
			document.getElementById("gia").value = `${arrs[index].gia}`
			insert.style.display = 'flex';
			Them_btn.style.display = 'none';
			Sua_btn.style.display = 'block';
			Sua_btn.onclick = function (){
				if(document.getElementById("ten_sp").value === '' || 
				document.getElementById("link_anh").value === '' || 
				document.getElementById("so_luong").value === '' || 
				document.getElementById("gia").value === '') {
					return confirm("Điền số liệu!!!")
				}
				else{
					arrs[index].link_anh = document.getElementById("link_anh").value 
					arrs[index].ten_sp = document.getElementById("ten_sp").value
					arrs[index].so_luong = document.getElementById("so_luong").value 
					arrs[index].gia = document.getElementById("gia").value
					document.getElementsByClassName('sanPham')[index].outerHTML = `<div class="sanPham" align="center">
                    <img src="${arrs[index].link_anh}" alt="${arrs[index].ten_sp}" class="img_sp link_anh">
                    <div class="thongTin">
                        <h3 class="ten_sp">${arrs[index].ten_sp}</h3>
                        <p class="sl">Số lượng:&nbsp;</p><p class="sl sl_value">${arrs[index].so_luong}</p><br>
                        <p class="gia">Giá:&nbsp;</p><p class="gia gia_value">${arrs[index].gia}</p><p class="gia">&nbsp;đ</p>
                        <button class="btn mua_btn" style="display: none;">Mua hàng</button>
                        <button class="btn xoa_btn"  style="display: none;">Xóa hàng</button>
                        <button class="btn sua_btn"  style="display: block;">Sửa hàng</button>
                    </div>
                </div>`
				}
				document.getElementById("link_anh").value = ""
				document.getElementById("ten_sp").value = ""
				document.getElementById("so_luong").value = ""
				document.getElementById("gia").value = ""
				insert.style.display = 'none';
				sua()
			}
		}
	})
}

edit_btn.onclick = function (){
	var xoa_btn = Object.values(document.querySelectorAll('.xoa_btn'))
	var xoa = xoa_btn.map(function(xoa){
		return xoa.style.display = 'none';
	})
	var sua_btn = Object.values(document.querySelectorAll('.sua_btn'))
	var arr = sua_btn.map(function(sua){
		return sua.style.display = 'block';
	})
	insert.style.display = 'none';
	sua()
}