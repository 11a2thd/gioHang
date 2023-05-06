const arrs = []
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

$('.header_ul-li1').onmouseover = function(){
	$('.roll').style.display = 'block'
	$('.header_ul-li1').onmouseout = function(){
		$('.roll').style.display = 'none'
	}
}

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
	GH_btn.forEach(function(GH_btn, indexGH){
		GH_btn.onclick = function (){
			var hang = $$('#sanPhamGH tr td:first-child')
			var sl = $$('#sanPhamGH input')
			for(var i = 0; i < hang.length; i++){
				if(hang[i].innerText === arrs[indexGH].ten_sp && sl[i].value < arrs[indexGH].so_luong){
					return sl[i].value++
				}
				if(hang[i].innerText === arrs[indexGH].ten_sp && sl[i].value === arrs[indexGH].so_luong){
					return confirm('Số lượng hàng tối đa!!!')
				}
			}

			
			document.getElementById("sanPhamGH").insertAdjacentHTML('beforeend', `<tr>
			<td style="display: flex; align-items: center;"><img style="width: 80px;" src="${arrs[indexGH].link_anh}" alt="Lỗi!!!">${arrs[indexGH].ten_sp}</td>
			<td><p><span>${arrs[indexGH].gia}</span><sup>đ</sup></td>
			<td><input style="width: 35px;outline: none;" type="number" value="1" min="1" max="${arrs[indexGH].so_luong}"></td>
			<td style="cursor: pointer;">Xóa</td>
			</tr>`)
			tongTien()
			var soLuong = $$('#gioHang table tbody input')
			soLuong.forEach(function(soLuong){
				soLuong.onchange = function(){ tongTien() }
			})
			xoa()
		}
	})
}
themVaoGioHang()

var soLuong = $$('#sanPhamGH input')
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

function xoa(){
	var hang = $$('#gioHang table tbody tr td:last-child')
	var a = $$('#gioHang table tbody tr')
	hang.forEach(function(hang, index){
		hang.onclick = function (){
			a[index].remove()
			xoa()
			tongTien()
		}
	})
}
xoa()

