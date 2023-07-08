// ES6的写法
// 单件商品
class UIGoods {
	/////////////////////////////////////////////////////////////// ES6
	get totalPrice() {
		return this.choose * this.data.price;
	}
	get data() {
		return g;
	}

	get isChoose() {
		return this.choose > 0;
	}
	constructor(g) {
		////////////////////////////////////////////////////////////// 一般写法
		// this.data = g;
		////////////////////////////////////////////////////////////// 高端写法
		// Object.defineProperty(this, 'data', {
		// 	value: g,
		// 	writable: false,
		// 	configurable: false,
		// });
		///////////////////////////////////////////////////////////////
		g = { ...g }; //克隆一个对象出来再冻结，尽量不冻结原始数据
		Object.freeze(g); // 冻结对象
		Object.defineProperty(this, 'data', {
			get: function () {
				return g;
			},
			set: function (value) {
				throw new Error('data 属性是只读的，不能重新赋值');
			},
		});
		/////////////////////////////////////////////////////////////// 一般写法
		// this.choose = 0;
		var internalChooseValue = 0;
		Object.defineProperty(this, 'choose', {
			configurable: false,
			get: function () {
				return internalChooseValue;
			},
			set: function (val) {
				if (typeof val !== 'number') {
					throw new Error('choose属性必须是数字');
				}
				var temp = parseInt(val);
				if (temp === val) {
					throw new Error('choose属性必须是整数');
				}
				if (val < 0) {
					throw new Error('choose属性必须大于等于0');
				}
				internalChooseValue = val;
			},
		});
		Object.defineProperty(this, 'totalPrice', {
			get: function () {
				this.choose * this.data.price;
			},
		});
	}
	getTotalPrice() {
		return this.data.price * this.choose;
	}
	isChoose() {
		return this.choose > 0;
	}
	// 选择的数量+1
	increase() {
		this.choose++;
	}
	// 选择的数量-1
	decrease() {
		if (this.choose === 0) {
			return;
		}
		this.choose--;
	}
}

// ES6以下的写法
// function UIGoods(g) {
// 	this.data = g;
// 	this.choose = 0;
// }
// // 获取总价
// UIGoods.prototype.getTotalPrice = function () {
// 	return this.data.price * this.choose;
// };
// // 是否选中了此件商品
// UIGoods.prototype.isChoose = function () {
// 	return this.choose > 0;
// };

// 整个界面的数据
class UIData {
	constructor() {
		var uiGoods = [];
		for (var i = 0; i < goods.length; i++) {
			var uig = new UIGoods(goods[i]);
			uiGoods.push(uig);
		}
		this.uiGoods = uiGoods; // 这里有点神奇
		this.deliveryThreshold = 30;
		this.deliveryPrice = 5;
	}
	// 计算总价
	getTotalPrice() {
		var sum = 0;
		for (var i = 0; i < this.uiGoods.length; i++) {
			var g = this.uiGoods[i];
			sum += g.getTotalPrice();
		}
		return sum;
	}
	// 增加某件商品的选中数量
	increase(index) {
		this.uiGoods[index].increase(); // 为什么这里不用for循环就可以获得index？
	}
	// 减少某件商品的选中数量
	decrease(index) {
		this.uiGoods[index].decrease();
	}
	// 得到总共的选择数量
	getTotalChooseNumber() {
		var sum = 0;
		// 而这里却要index？
		for (var i = 0; i < this.uiGoods.length; i++) {
			sum += this.uiGoods[i].choose;
		}
		return sum;
	}
	// 购物车中有没有东西
	hasGoodsInCar() {
		return this.getTotalChooseNumber() > 0;
	}
	// 是否达到了配送门槛
	isCrossDeliveryThreshold() {
		return this.getTotalPrice() >= this.deliveryThreshold;
	}

	isChoose(index) {
		return this.uiGoods[index].isChoose();
	}
}

// 整个界面
class UI {
	constructor() {
		this.uiData = new UIData();
		this.doms = {
			goodsContainer: document.querySelector('.goods-list'),
			deliveryPrice: document.querySelector('.footer-car-tip'),
			footerPay: document.querySelector('.footer-pay'),
			footerPayInnerSpan: document.querySelector('.footer-pay span'),
			totalPrice: document.querySelector('.footer-car-total'),
			car: document.querySelector('.footer-car'),
			badge: document.querySelector('.footer-car-badge'),
		};

		var carRect = this.doms.car.getBoundingClientRect(); // 购物车坐标
		var jumpTarget = {
			x: carRect.left + carRect.width / 2,
			y: carRect.top + carRect.height / 5,
		};

		this.jumpTarget = jumpTarget;
		this.createHtml();
		this.updateFooter();
		this.listenEvent();
	}

	// 监听各种事件
	listenEvent() {
		this.doms.car.addEventListener('animationend', function () {
			this.classList.remove('animate'); //注意这里的this指向
		});
	}

	// 根据商品数据创建商品列表元素
	createHtml() {
		// 方式一： 生成html字符串 (需要经过parse html，执行效率低，开发效率高)
		// 方式二： 一个一个创建元素 （执行效率高，开发效率低）
		var html = '';
		for (var i = 0; i < this.uiData.uiGoods.length; i++) {
			var g = this.uiData.uiGoods[i];
			html += `<div class="goods-item">
            <img src="${g.data.pic}" alt="" class="goods-pic" />
            <div class="goods-info">
              <h2 class="goods-title">${g.data.title}</h2>
              <p class="goods-desc">
                ${g.data.desc}
              </p>
              <p class="goods-sell">
                <span>月售 ${g.data.sellNumber}</span>
                <span>好评率${g.data.favorRate}</span>
              </p>
              <div class="goods-confirm">
                <p class="goods-price">
                  <span class="goods-price-unit">￥</span>
                  <span>${g.data.price}</span>
                </p>
                <div class="goods-btns">
                  <i index="${i}" class="iconfont i-jianhao"></i>
                  <span>${g.choose}</span>
                  <i index="${i}" class="iconfont i-jiajianzujianjiahao"></i>
                </div>
              </div>
            </div>
          </div>`;
		}
		this.doms.goodsContainer.innerHTML = html;
	}
	increase(index) {
		this.uiData.increase(index);
		this.updateGoodsItem(index);
		this.updateFooter();
		this.jump(index);
	}
	decrease(index) {
		this.uiData.decrease(index);
		this.updateGoodsItem(index);
		this.updateFooter();
	}
	// 更新某商品元素的显示状态
	updateGoodsItem(index) {
		var goodsDom = this.doms.goodsContainer.children[index];
		if (this.uiData.isChoose(index)) {
			goodsDom.classList.add('active');
		} else {
			goodsDom.classList.remove('active');
		}
		var span = goodsDom.querySelector('.goods-btns span');
		span.textContent = this.uiData.uiGoods[index].choose;
	}
	// 更新页脚
	updateFooter() {
		// 总价
		var total = this.uiData.getTotalPrice();
		// 设置配送费
		this.doms.deliveryPrice.textContent = `配送费￥${this.uiData.deliveryPrice}`;
		// 设置起送费还差多少
		if (this.uiData.isCrossDeliveryThreshold()) {
			this.doms.footerPay.classList.add('active');
		} else {
			this.doms.footerPay.classList.remove('active');
			// 更新还差多少钱
			var dis = this.uiData.deliveryThreshold - total;
			dis = Math.round(dis);
			this.doms.footerPayInnerSpan.textContent = `还差￥${dis}元起送`;
		}
		// 设置总价
		this.doms.totalPrice.textContent = total.toFixed(2);
		// 设置购物车的样式状态
		if (this.uiData.hasGoodsInCar()) {
			this.doms.car.classList.add('active');
		} else {
			this.doms.car.classList.remove('active');
		}
		// 设置购物车中的数量
		this.doms.badge.textContent = this.uiData.getTotalChooseNumber();
	}

	// 购物车动画
	carAnimate() {
		this.doms.car.classList.add('animate');
	}

	// 抛物线跳跃的元素
	jump(index) {
		// 找到对应商品的加号
		var btnAdd = this.doms.goodsContainer.children[index].querySelector(
			'.i-jiajianzujianjiahao'
		);
		var rect = btnAdd.getBoundingClientRect();
		var start = {
			x: rect.left,
			y: rect.top,
		};
		// 跳吧
		var div = document.createElement('div');
		div.className = 'add-to-car';
		var i = document.createElement('i');
		i.className = 'iconfont i-jiajianzujianjiahao';
		// 设置初始位置
		div.style.transform = `translateX(${start.x}px`;
		i.style.transform = `translateY(${start.y}px)`;
		div.appendChild(i);
		document.body.appendChild(div);
		// 强行渲染，否则没有过渡效果
		div.clientWidth;

		// 设置结束位置
		div.style.transform = `translateX(${this.jumpTarget.x}px`;
		i.style.transform = `translateY(${this.jumpTarget.y}px)`;
		var that = this;
		div.addEventListener(
			'transitionend',
			function () {
				div.remove();
				that.carAnimate();
			},
			{
				once: true,
			}
		);
	}
}

var ui = new UI();

// 事件
ui.doms.goodsContainer.addEventListener('click', function (e) {
	if (e.target.classList.contains('i-jiajianzujianjiahao')) {
		var index = +e.target.getAttribute('index');
		ui.increase(index);
	} else if (e.target.classList.contains('i-jianhao')) {
		var index = +e.target.getAttribute('index');
		ui.decrease(index);
	}
});
