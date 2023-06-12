'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

let map, mapEvent;

class Workout {
  date = new Date();
  id = (Date.now() + '').slice(-10);

  constructor(coords, distance, duration) {
    this.coords = coords; // [lat,lng]
    this.distance = distance; // in km
    this.duration = duration; // in min
  }
}

class Running extends Workout {
  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    this.calcPace();
  }
  calcPace() {
    // min / km
    this.pace = this.duration / this.distance;
    return this.pace;
  }
}

class Cycling extends Workout {
  constructor(coords, distance, duration, elevationGain) {
    super(coords, distance, duration);
    this.elevationGain = elevationGain;
    this.calcSpeed();
  }
  calcSpeed() {
    // km / h
    this.speed = this.distance / (this.duration / 60);
    return this.speed;
  }
}

const run1 = new Running([39, -12], 5.2, 24, 178);
const cycling1 = new Cycling([39, -12], 27, 95, 523);
console.log(run1, cycling1);

//////////////////////////////////////////////////////////////
// application architecture

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

class App {
  #map; // 私有实例
  #mapEvent;
  constructor() {
    this._getPosition();
    form.addEventListener('submit', this._newWorkout.bind(this));
    inputType.addEventListener('change', this._toggleElevationField);
  }
  _getPosition() {
    // 确保这个浏览器方法存在
    if (navigator.geolocation)
      navigator.geolocation.getCurrentPosition(
        this._loadMap.bind(this), // 重定向一下
        function () {
          // 失败时候的回调
          alter('Could not get current position');
        }
      );
  }
  _loadMap(position) {
    // 成功时候的回调
    console.log(position);
    // 获取经纬度
    const { latitude } = position.coords;
    const { longitude } = position.coords;
    console.log(
      `https://www.google.com/maps/@${latitude},${longitude},4z?entry=ttu`
    );
    console.log(`https://map.baidu.com/@${latitude},${longitude},13z`);

    // leaflet的基本使用
    // L 是leaflet的入口
    // 这里的'map'是html里map id的元素，要把它set到map id的标签中

    const coords = [latitude, longitude];

    console.log(this);
    this.#map = L.map('map').setView(coords, 13);

    // 配置用什么地图打开
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    // 地图点击事件
    this.#map.on('click', this._showForm.bind(this));
  }
  _showForm(mapE) {
    this.#mapEvent = mapE;
    form.classList.remove('hidden');
    inputDistance.focus();
  }
  _toggleElevationField() {
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
  }
  _newWorkout(e) {
    const validInputs = (...inputs) =>
      inputs.every(inp => Number.isFinite(inp));
    const allPositive = (...inputs) => inputs.every(inp => inp > 0);

    e.preventDefault();

    // 表单输入
    const type = inputType.value;
    const distance = inputDistance.value;
    const duration = inputDuration.value;
    // 数据校验
    // 若是跑步，创建对象
    if (type === 'running') {
      const cadence = +inputCadence.value;
      // 检查数据有效性
      if (
        !validInputs(distance, duration, cadence) ||
        !allPositive(distance, duration, cadence)
      )
        return alert('Inputs have to be positive numbers');
    }
    // 若是骑自行车，创建对象
    if (type === 'cycling') {
      const elevation = +inputElevation.value;
      if (
        !validInputs(distance, duration, elevation) ||
        !allPositive(distance, duration)
      )
        return alert('Inputs have to be positive numbers');
    }
    // 把新建的对象放到workout数组中

    // 在地图中渲染workout数组中的每一项
    const { lat, lng } = this.#mapEvent.latlng;
    L.marker({ lat, lng })
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false,
          className: 'running-popup',
        })
      )
      .setPopupContent('Workout ')
      .openPopup();
    // 渲染一个列表
    // 隐藏表单

    // 清空表单
    inputDistance.value =
      inputDuration.value =
      inputCadence.value =
      inputElevation.value =
        '';
  }
}

const app = new App();

console.log(firstName);
