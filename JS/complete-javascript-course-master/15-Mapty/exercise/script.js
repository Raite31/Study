'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

// 确保这个浏览器方法存在
if (navigator.geolocation)
  navigator.geolocation.getCurrentPosition(
    function (position) {
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
      const map = L.map('map').setView(coords, 13);

      // 配置用什么地图打开
      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      // 配置锚点
      L.marker(coords)
        .addTo(map)
        .bindPopup('A pretty CSS popup.<br> Easily customizable.')
        .openPopup();

      map.on('click', function (mapEvent) {
        console.log(mapEvent);
        const { lat, lng } = mapEvent.latlng;
        L.marker({ lat, lng })
          .addTo(map)
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
      });
    },
    function () {
      // 失败时候的回调
      alter('Could not get current position');
    }
  );

console.log(firstName);
