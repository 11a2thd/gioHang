// const Login = document.querySelector('.Login');
// const home = document.querySelector('.home');
// const button_login = document.querySelector('.button_login');
const arrs = []
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

var link_anh = document.getElementsByClassName('link_anh')
var ten_sp = document.getElementsByClassName('ten_sp')
var so_luong = document.getElementsByClassName('sl_value')
var gia = document.getElementsByClassName('gia_value')

for(var i = 0; i < ten_sp.length; i++){
	arrs.push({
		link_anh: link_anh[i].style.backgroundImage.slice(5, -2),
		ten_sp: ten_sp[i].innerHTML,
		so_luong: so_luong[i].innerHTML,
		gia: gia[i].innerHTML,
	})
}

function themVaoGioHang(){
	var GH_btn = Object.values($$('.GH_btn'))
	GH_btn.forEach(function(GH_btn, index){
		GH_btn.onclick = function (){
			document.getElementById("sanPhamGH").insertAdjacentHTML('beforeend', `<tr>
			<td style="display: flex; align-items: center;"><img style="width: 80px;" src="${arrs[index].link_anh}" alt="Lỗi!!!">${arrs[index].ten_sp}</td>
			<td><p><span>${arrs[index].gia}</span><sup>đ</sup></td>
			<td><input style="width: 35px;outline: none;" type="number" value="1" min="1" max="${arrs[index].so_luong}"></td>
			<td style="cursor: pointer;">Xóa</td>
			</tr>`)
			tongTien()
			var soLuong = $$('#gioHang table tbody input')
			soLuong.forEach(function(soLuong, index){
				soLuong.onchange = function(){ tongTien() }
			})
		}
	})
}
themVaoGioHang()

var soLuong = $$('#gioHang table tbody input')
soLuong.forEach(function(soLuong, index){
	soLuong.onchange = function(){ tongTien() }
})

function tongTien(){
	var soLuong = $$('#gioHang table tbody input')
	var b = $$('#gioHang table tbody span')
	
	var tongTien = 0
	for(var i = 0; i < soLuong.length; i++){
		var c = b[i].innerHTML
		var gia = '', e = 0
		for(var j = 0; j < c.length; j++)
		if(c[j] === '.'){
			gia += c.slice(e, j)
			e = j + 1
		}
		gia += c.slice(e, c.length)
		tongTien += (gia * soLuong[i].value)
	}
	tongTien = String(tongTien)
	for(var i = tongTien.length - 3; i > 0; i -= 3)
	tongTien = tongTien.slice(0, i) + '.' + tongTien.slice(i)

	if($$('.tongTien')[1] != null){ $$('.tongTien')[1].remove() }
	$('.tongTien').insertAdjacentHTML('afterend', `<td class="tongTien"><p><span>${tongTien}</span><sup>đ</sup></td>`)
}
tongTien()

//--------------------




