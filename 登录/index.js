function Login () {
				this.btn = document.querySelector("#btn");
				this.container = document.querySelector("#container");
				this.bindEvents();
			}
			
Login.prototype = {
	constructor : Login,
	bindEvents: function () {
		this.btn.onclick = function () {
			this.popBox();
		}.bind(this);
	},
	popBox: function () {
		this.showCenter(this.container);
		this.modal = document.createElement('div');
		this.modal.className = "modal";
		document.body.appendChild(this.modal);
		new Drag(this.container, "h4");
	},
	showCenter: function (obj) {
		this.setStyle(obj, {
			display: "block",
			position: "absolute"
		})
		let _this = this;
		window.onresize = (function center () {
			
			let left = (_this.getBodySize().width - obj.offsetWidth) / 2 + "px",
				top = (_this.getBodySize().height - obj.offsetHeight) / 2 + "px";
			
			_this.setStyle(obj, {left, top});
			return center;
		})();
	},
	setStyle: function (obj, attrJson) {
		for(var key in attrJson) {
			obj.style[key] = attrJson[key];
		}
	},
	getBodySize: function () {
		return {
			width: document.documentElement.clientWidth || document.body.clientWidth,
			height: document.documentElement.clientHeight || document.body.clientHeight
		}
	},
}

class Drag {
	constructor (obj, title) {
		this.obj = obj;
		this.title = this.obj.querySelector(title);
		this.init();
	}
	
	init () {
		this.title.onmousedown = e => {
			let x = e.offsetX, 
				y = e.offsetY;
			console.log(x,y);
			document.onmousemove =  e => {
				let _left = e.clientX - x,
					_top = e.clientY - y;
					
				console.log("-----");
				console.log(e.clientX , x);
				this.move(_left, _top);
			}
			document.onmouseup = function () {
				document.onmousemove = null;
			}
			return false;
		}
	}
	move (left, top) {
		Login.prototype.setStyle(this.obj, {
			left: left + "px",
			top: top + "px"
		});
	}
}
	new Login()