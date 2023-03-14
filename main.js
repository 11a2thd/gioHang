// const Login = document.querySelector('.Login');
// const home = document.querySelector('.home');
// const button_login = document.querySelector('.button_login');


function Mua(){
	confirm('Có cái con cặcd!!!')
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

function insert(){
	document.querySelector('.insert').style.display = 'block';
}

function them(){
	if(document.getElementById("ten_sp").value !== '' && document.getElementById("link_anh").value !== '' && document.getElementById("so_luong").value !== '') {
		arrs.push({
			ten:`${document.getElementById("ten_sp").value.trim()}`,
			image:`${document.getElementById("link_anh").value.trim()}`,
			description:`${document.getElementById("so_luong").value.trim()}`,
		})
	}
	render()
	document.getElementById("ten_sp").focus()
	document.getElementById("ten_sp").value = ``
	document.getElementById("so_luong").value = ``
	document.getElementById("link_anh").value = ``
	const stringify = JSON.stringify(arrs)
	localStorage.setItem('name', stringify)
}

function render() {
	const html = arrs.map(function(arr,index) {
		return `<div class='wrap'>
					<img class='img'  src=${arr.image}>
					<h1>${arr.name}</h1>
					<h2>Số lượng : ${arr.description}</h2>
					<button onclick="remove(${index})">Delete</button>
					<button onclick="updates(${index}) ">Edit</button>

				 </div>`

		})
	document.querySelector('.san_pham').innerHTML = html.join('\n')	
}

document.querySelector('.form').addEventListener('submit', function(event) {
	event.preventDefault()
}	)
const parses = localStorage.getItem('name')
var arrs ;
if(localStorage.getItem('name')) {

	arrs = JSON.parse(parses)
}
else {
	arrs = []
}

function logOut(){
	document.querySelector('.logOut').style.display = 'none';
	document.querySelector('.sign').style.display = 'block';
	document.querySelector('.home').style.display = 'block';
}

function test(){
	
}