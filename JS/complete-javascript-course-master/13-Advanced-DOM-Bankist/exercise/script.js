'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal'); // 这里虽然不是生成数组，但是我们可以用数组的方法来遍历这个东西
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const nav = document.querySelector('.nav');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

// ====================================================== Modal window

const openModal = function (e) {
  e.preventDefault();

  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal)); //替代下面的for循环
// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// =========================================================================== 事件委托 点击导航

// ==================== ======================================================= Scroll 1
// const btnScrollTo = document.querySelector('.btn--scroll-to');
// const section1 = document.querySelector('#section--1');
btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect(); // 获取坐标
  console.log(s1coords);
  console.log(e.target.getBoundingClientRect()); // e.target === btnScrollTo
  console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset); // 获取滚动距离
  console.log(
    'height / width viewpoint',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  ); // 获取可视区域的高度和宽度
  // ============================================================================ Scroll 1结束

  //  ========================================================================== Scroll 2
  window.scrollTo(
    // 滚动到指定的位置
    s1coords.left + window.pageXOffset, // 坐标的left + 滚动距离的X
    s1coords.top + window.pageYOffset // 坐标的top + 滚动距离的Y
  );

  window.AbortController.scrollTo({
    left: s1coords.left + window.pageXOffset,
    top: s1coords.top + window.pageYOffset,
    behavior: 'smooth',
  });

  section1.scrollIntoView({ behavior: 'smooth' }); // 滚动到指定的位置 仅适用于现代浏览器 上面是原理
  // =========================================================================== Scroll 2结束
});

// ============================================================================ 事件委托
// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     // console.log('LINK  ');
//     const id = this.getAttribute('href');
//     // console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

// 1. Add event listener to common parent elememt
// 2. Drtermine what element originated the event

document.querySelector('.nav__links').addEventListener('click', function (e) {
  // console.log(e.target);
  e.preventDefault();

  // 匹配策略
  if (e.target.classList.contains('nav__link')) {
    // console.log('LINK');
    // e.preventDefault();
    const id = e.target.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

// ============================================================================== Tabbed component 选项卡模块

// tabs.forEach(t =>
//   t.addEventListener('click', () => console.log('.operations__content'))
// );

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab '); // 这样可以解决点击标签的数字的时候只获得<span>标签的问题
  // console.log(clicked);
  // 保护协议
  if (!clicked) return;
  // 切换选项卡 以及 标签
  // 删除类
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));

  // 添加类
  clicked.classList.add('operations__tab--active');
  // console.log(clicked.dataset.tab);
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});
// ============================================================================ 选项卡结束

// ============================================================================ 事件委托结束

// ============================================================================ 导航栏的 鼠标悬浮效果
// const handleHover = function (e, opacity) {
const handleHover = function (e) {
  // console.log(this, e.currentTarget);

  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      // if (el !== link) el.style.opacity = opacity;
      if (el !== link) el.style.opacity = this;
    });
    // logo.style.opacity = opacity;
    logo.style.opacity = this;
  }
};

// nav.addEventListener('mouseover', function (e) {
//   handleHover(e, 0.5);
// }); // 这个冒泡，mouseenter不冒泡
nav.addEventListener('mouseover', handleHover.bind(0.5));

// nav.addEventListener('mouseout', function (e) {
//   handleHover(e, 1);
// });
nav.addEventListener('mouseout', handleHover.bind(1));
// ============================================================================ 导航栏的 鼠标悬浮效果结束

// ============================================================================ 导航栏的 粘顶效果
// 对性能不好的方法
// const iniaialCoords = section1.getBoundingClientRect();
// console.log(iniaialCoords);

// window.addEventListener('scroll', function () {
//   console.log(window.scrollY);
//   if (this.window.scrollY > iniaialCoords.top) nav.classList.add('sticky');
//   else nav.classList.remove('sticky');
// });

// // 优化  intersection observer API 交叉点观察者API
// const obsCallback = function (entries, observer) {
//   entries.forEach(entry => {
//     console.log(entry);
//   });
// };
// const obsOptions = {
//   root: null,
//   threshold: [0, 1, 0.2],
// };
// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(section1);

const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;
// console.log(navHeight);

const stickyNav = function (entries) {
  const [entry] = entries;
  // console.log(entry);
  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

headerObserver.observe(header);
// ============================================================================ 导航栏的 粘顶效果结束

// ============================================================================ 滚动下滑时，文字跳动出现效果
const allSections = document.querySelectorAll('.section');
const revealSection = function (entries, observer) {
  const [entry] = entries;
  // console.log(entry);

  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};
const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});
allSections.forEach(function (section) {
  sectionObserver.observe(section);
  // section.classList.add('section--hidden');
});
// ============================================================================ 滚动下滑时，文字跳动出现效果结束

// ============================================================================ 延迟加载图像 优化性能
const imgTargets = document.querySelectorAll('img[data-src]');

const loadImg = function (entries, observer) {
  const [entry] = entries;
  // console.log(entry);

  if (!entry.isIntersecting) return;

  // 替换图片
  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });
  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '200px',
});

imgTargets.forEach(img => imgObserver.observe(img));
// ============================================================================ 延迟加载图像 优化性能结束

// ============================================================================ 轮播图
const slider = function () {
  const slides = document.querySelectorAll('.slide');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  const dotContainer = document.querySelector('.dots');
  let curSlide = 0;
  const maxSlide = slides.length;

  // const slider = document.querySelector('.slider');
  // slider.style.transform = 'scale(0.4) translateX(-800px)';
  // slider.style.overflow = 'visible';

  // Function
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));
    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  // 事件处理程序
  const init = function () {
    goToSlide(0);
    createDots();
    activateDot(0);
  };
  init();
  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);

  document.addEventListener('keydown', function (e) {
    // console.log(e);
    if (e.key === 'ArrowLeft') prevSlide();
    e.key === 'ArrowRight' && nextSlide();
  });

  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      // console.log('DOT');
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });
};
slider();

// ============================================================================ 轮播图结束

//  =========================================================================== 事件
// const h1 = document.querySelector('h1');

// const alertH1 = function () {
//   alert('addEventListener: Great! you are reading the heading :D');
//   h1.removeEventListener('mouseenter', alertH1);
// };

// // EventListener的优点是
// // 1. 可以随意修改事件
// // 2. 可以把时间函数抽离出来，做其他各种是
// // 3. 可以删除事件
// h1.addEventListener('mouseenter', alertH1);

// setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);

// h1.onmouseenter = function (e) {
//   // 老方式
//   alert('onmouseenter: Great! you are reading the heading :D');
// };

// =========================================================================== 事件结束

//////////////////////////////////////
///////////////////////////////////////
////////////////////////////////////// 练习

// console.log(
//   '/////////////////////////////////////////////// Selecting elements'
// );
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);

// const header = document.querySelector('.header');
// // const allSections = document.querySelectorAll('.section');
// // console.log(allSections);

// // document.getElementById('section--1');
// // const allButtons = document.getElementsByTagName('button');
// // console.log(allButtons);

// // console.log(document.getElementsByClassName('btn'));

// // console.log(
// //   '//////////////////////////////////// Creating and inserting elements'
// // );
// // // .innerAdjacentHTML
// const message = document.createElement('div');
// message.classList.add('cookie-message');
// message.textContent = 'We use cookied for improced functionality and analytics';
// message.innerHTML =
//   'We use cookied for improced functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';
// // header.prepend(message);
// header.append(message); //
// // // header.append(message.cloneNode(true));

// // header.before(message);
// // header.after(message);

// // console.log('/////////////////////////////////////// Delete elements');
// // document
// //   .querySelector('.btn--close-cookie')
// //   .addEventListener('click', function () {
// //     message.remove();
// //     // message.parentElement.removeChild(message); // 以前remove的做法，要先去父元素
// //   });

// console.log('//////////////////////////////////////// Stylels');
// document
//   .querySelector('.btn--close-cookie')
//   .addEventListener('click', function () {
//     message.parentElement.removeChild(message);
//   });

// console.log('//////////////////////////////// Styles');
// message.style.backgroundColor = '#37383d';
// message.style.width = '120%';

// console.log(message.style.height);
// console.log(message.style.backgroundColor);

// console.log(getComputedStyle(message).color); // 可以获得所有style，我们没设置的都能获取

// message.style.height = Number.parseFloat(
//   getComputedStyle(message).height + 40 + 'px'
// );

// document.documentElement.style.setProperty('--color-primary', 'orangered');

// console.log('////////////////////////////////////// Attributes'); // 属性
// const logo = document.querySelector('.nav__logo');
// console.log(logo.alt);
// console.log(logo.src);
// console.log(logo.className);

// logo.alt = 'Beautiful';

// // Non-standard
// console.log(logo.designer);
// console.log(logo.getAttribute('designer'));
// logo.setAttribute('company', 'Bankist');

// console.log(logo.src);
// console.log(logo.getAttribute('src'));

// const link = document.querySelector('.twitter-link');
// console.log(link.href);
// console.log(link.getAttribute('href'));

// console.log('/////////////////////////////////// Data attribute');
// console.log(logo.dataset.versionNumber);

// console.log('//////////////////////////////////// Classes');
// logo.classList.add('c', 'j');
// logo.classList.remove('c', 'j');
// logo.classList.toggle('c');
// logo.classList.contains('c');
// logo.className = 'LEE'; // 不要用，因为会覆盖了原有的class

// =========================================================================== 捕获 冒泡
// rgb(255,255,255)
// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);
// const randomColor = () =>
//   `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)}`;
// // console.log(randomColor(0, 255));

// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('LINK', e.target, e.currentTarget);
//   console.log(e.currentTarget === this);

//   // Stop 冒泡
//   e.stopPropagation();
// });
// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('CONTAINER', e.target, e.currentTarget); // 从这里可以看到 e.target始终是nav__link 这个是父元素， e.currentTarget是nav__links
// });
// document.querySelector('.nav').addEventListener(
//   'click',
//   function (e) {
//     this.style.backgroundColor = randomColor();
//     console.log('NAV', e.target, e.currentTarget);
//   },
//   true // 这里设置true的话 得到的就捕获事件而不是冒泡事件，设置了true的话，就会首先输出这个，因为它是这三个的ROOT
// );
// =========================================================================== 捕获 冒泡结束

//========================================================================== Dom traversing
// const h1 = document.querySelector('h1');

// // Going downwards: child
// console.log(h1.querySelectorAll('.highlight')); // get the class under the h1
// console.log(h1.childNodes); /// get all the child nodes of the h1
// console.log(h1.children); /// get the first child of the h1
// h1.firstElementChild.style.color = 'white';
// h1.lastElementChild.style.color = 'orange';

// // Going upwards: parent
// console.log(h1.parentNode);
// console.log(h1.parentElement); // this is the same as parentNode

// h1.closest('.header').style.background = 'var(--gradient-secondary)';

// h1.closest('h1').style.background = 'var(--gradient-primary)'; // different with qs is qs always find child or parent, but this is will find the first one include itself

// // Going sideways: siblings
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);

// console.log(h1.previousSibling);
// console.log(h1.nextSibling);

// console.log(h1.parentElement.children);
// [...h1.parentElement.children].forEach(function (el) {
//   if (el !== h1) el.style.transform = 'scale(0.5)';
// });
// =========================================================================== Dom traversing结束

// ======================================================== DOM生命周期
// DOM内容加载： 由document触发，一旦HTML被完全解析（下载完毕，并转换为DOM树，
// 在DOM内容加载事件发生之前 下载并执行所有脚本
document.addEventListener('DOMContentLoaded', function (e) {
  console.log('HTML parsed and DOM tree built! ', e);
});

// 加载事件
window.addEventListener('load', function (e) {
  console.log('Page fully loaded', e);
});

// 卸载前 （尽量不要用
// window.addEventListener('beforeunload', function (e) {
//   e.preventDefault();
//   console.log(e);
//   e.returnValue = '';
// });
