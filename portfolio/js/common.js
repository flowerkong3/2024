(function (win, $){
	'use strict';


// 카운트
const countFunc = function(){
	let scroll = 0;
	window.addEventListener("scroll", () => {
		scroll = window.scrollY;
		let $sectionCount = $(".section-count");
		let $sectionCountHeight = $sectionCount.height();
		let $sectionCountTop = $sectionCount.offset().top;
	//7374
		// console.log("top" + $sectionCountTop / 1.2);
		if(scroll < $sectionCountTop / 1.1 && scroll < $sectionCountTop + 1000){


			// $({ val : 0 }).animate({ val : 1531223 }, {
			// 	duration: 1500,
			// 	step: function() {
			// 		var num = numberWithCommas(Math.floor(this.val));
			// 		$(".count1").text(num);
			// 	},
			// 	complete: function() {
			// 		var num = numberWithCommas(Math.floor(this.val));
			// 		$(".count1").text(num);
			// 	}
			// });

			
			$({ val : 0 }).animate({ val : 100 }, {
				duration: 1500,
				step: function() {
					var num = numberWithCommas(this.val.toFixed(0)); //소수 (첫째자리까지)
					$(".count1").text(num);
				},
				complete: function() {
					var num = numberWithCommas(this.val.toFixed(0));
					$(".count1").text(num);
				}
			});
			$({ val : 0 }).animate({ val : 100 }, {
				duration: 1500,
				step: function() {
					var num = numberWithCommas(this.val.toFixed(0)); //소수 (첫째자리까지)
					$(".count2").text(num);
				},
				complete: function() {
					var num = numberWithCommas(this.val.toFixed(0));
					$(".count2").text(num);
				}
			});
			$({ val : 0 }).animate({ val : 99.8 }, {
				duration: 1500,
				step: function() {
					var num = numberWithCommas(this.val.toFixed(1)); //소수 (첫째자리까지)
					$(".count3").text(num);
				},
				complete: function() {
					var num = numberWithCommas(this.val.toFixed(1));
					$(".count3").text(num);
				}
			});
			$({ val : 0 }).animate({ val : 99.7 }, {
				duration: 1500,
				step: function() {
					var num = numberWithCommas(this.val.toFixed(1)); //소수 (첫째자리까지)
					$(".count4").text(num);
				},
				complete: function() {
					var num = numberWithCommas(this.val.toFixed(1));
					$(".count4").text(num);
				}
			});
			
			//세자리마다 숫자를 찍어주는 함수 
				function numberWithCommas(x) {
					return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
				}
			
		}
	})
	}


// const resizeFunc = function(){
// 	window.addEventListener("resize", function() {
// 		if (window.innerWidth <= 480) {
			
// 			alert('현재 브라우저 크기가 <= 480px');
// 		}
// 	})
	
// }
// resizeFunc();



// 패럴렉스
const parallaxFunc = function(){
	let scroll = 0;
	let speed = 1.1;
	let hero = document.querySelector(".hero");
	let heroInner = document.querySelector(".hero .inner");
	let heroInnerTop = heroInner.offsetTop;
	let heroBg = document.querySelector(".hero-bg");
	let fadeTxtWrap = document.querySelector(".fade-txt-wrap");
	let fadeTxt = document.querySelectorAll(".fade-txt__item");
	let fadeTxt1 = document.querySelector(".txt1");
	let fadeTxt2 = document.querySelector(".txt2");
	let fadeTxt3 = document.querySelector(".txt3");

	window.addEventListener("scroll", () => {
		scroll = window.scrollY;
		heroInner.style.transform = `translateY(${scroll/100}%)`;
		heroBg.style.marginTop = (scroll / 20 ) + "%";
		// fadeTxtWrap.style.top = (scroll / 7 ) + "%";
		// fadeTxtWrap.style.paddingTop = (scroll / 30 ) + "%";
		if(scroll > window.innerHeight / 1.5) {
			heroBg.style.marginTop = 0;
			heroBg.classList.add("active");
		}else {
			heroBg.classList.remove("active");

		}
		

			// 바운스 현상때문에 fixed된 이미지 잔상이 남음 --> absolute로 변경
			if(window.innerWidth <= 480) {
				if(scroll > window.innerHeight){
					heroBg.style.position = "absolute";
					heroInner.style.transform = `translateY(${scroll/50}%)`;
				}else {
					// heroBg.style.position = "fixed";
				}
			}
	
	})
}

// Swiper
const swiperFunc = function(){
	var swiper1 = new Swiper(".swiper-drag", {
		slidesPerView: 3,
		spaceBetween: 20,
		// grabCursor: true,
		scrollbar: {
			el: ".swiper-scrollbar",
			hide: true,
		},
		pagination: {
			el: ".swiper-pagination",
			type: "fraction",
		},
		
		breakpoints: {
			280: {
				slidesPerView: 1.2,
				// spaceBetween: 10,
			},
			480: {
				slidesPerView: 1.7,
				// spaceBetween: 20,
			},
			768: {
				slidesPerView: 2.5,
				// spaceBetween: 10,
			},
			1024: {
				slidesPerView: 3.2,
				// spaceBetween: 20,
			},
		},
	});
}

//Cursor Custom 
const cursorFunc  = function(){
	let $cursor = $(".cursor");
	let $cursorText = $(".cursor-txt");
	let $body = $("body");
	$(window).mousemove(function(e) {
		$cursor.css({
			top: e.clientY - $cursor.height() / 2,
			left: e.clientX - $cursor.width() / 2
		});
	});
	
	$(".swiper-drag")
		.mouseenter(function() {
			$cursor.css({width:"80px",	height:"80px"});
			$cursor.css({transform: "scale(2)"});
			$cursorText.css({display:"block"});
			// $body.css({cursor:"none"});
		})
		.mouseleave(function() {
			$cursor.css({width:"20px", height:"20px"});
			$cursor.css({transform: "scale(1)"});
			$cursorText.css({display:"none"});
			$body.css({cursor:"default"})
		});
}


//Sticky Header
const headerFunc = function(){
	let scroll = 0;
	let lastScrollTop = 0;
	let delta = 30;
	let header = document.querySelector(".header");
	window.addEventListener("scroll",function(){
		scroll = window.scrollY;
		// scroll down
		if(scroll > lastScrollTop + delta) {
			header.classList.add("is-sticky");
		//scroll up
		}else if(scroll < lastScrollTop) {
			header.classList.remove("is-sticky");
		}
		lastScrollTop = scroll;
	});
};

// Faq
const faqFunc = function(){
	$(".faq-list li").eq(0).addClass("is-color");
	$(".faq__btn").eq(0).addClass("is-active");
	$(".faq__txt").eq(0).css("display","block")

	$(".faq__btn").on("click",function(){
		$(this).toggleClass("is-active");
		$(this).siblings().slideToggle(200);
		$(this).parent().siblings().children('.faq__txt').slideUp(200);
		$(this).parent().siblings().children('.faq__btn').removeClass("is-active")
		$(this).parent().siblings().removeClass("is-color");
		$(this).parent().toggleClass("is-color");
	})
};

// Scroll Top btn
const scrollTopBtnFunc = function(){
	let scroll = 0;
	let scrollTopBtn = document.querySelector(".scroll-top-btn");
	let scrollTopBtn2 = document.querySelector(".scroll-top-btn2");
	let hero = document.querySelector(".hero");
	let heroHeight = hero.getBoundingClientRect().height;
	let scrollSection = document.querySelector(".scroll-section");
	let main = document.querySelector(".main");
	let bottom = main.scrollHeight - window.innerHeight; //최하단 값

	window.addEventListener("scroll",function(){
		scroll = window.scrollY;
		if(scroll > scrollSection.offsetTop) {
			scrollTopBtn.classList.add("is-show")
		}else {
			scrollTopBtn.classList.remove("is-show")
		};
	});
	scrollTopBtn.addEventListener("click",function(){
		window.scroll({
			top:0,
			left:0,
			behavior: "smooth",
		})
	})
	scrollTopBtn2.addEventListener("click",function(){
		window.scroll({
			top:0,
			left:0,
			behavior: "smooth",
		})
	})
};

// Scroll Nav
const scrollNavFunc = function(){
	let $headerHeight = $(".header").height();
	$(".gnb-link").on("click",function(){
		$(".gnb-link").removeClass("is-active");   
		$(this).addClass("is-active");
		$("html, body").stop().animate({
			scrollTop: $(
					$(this).attr("href")
				).offset().top + 10
		}, 0);
		return false;
	});

};


// Mobile Menu
const mobileMenuFunc = function(){
	$(".btn-mobile-menu--open").on("click",function(){
		$(".mobile-menu").addClass("is-show");
		$(".btn-mobile-menu--close").addClass("is-show");
		$(".btn-mobile-menu--open").addClass("is-hide");
		$("header").addClass("is-fixed")
	});
	$(".btn-mobile-menu--close").on("click",function(){
		$(".mobile-menu").removeClass("is-show");
		$(".btn-mobile-menu--close").removeClass("is-show");
		$(".btn-mobile-menu--open").removeClass("is-hide");
		$("header").removeClass("is-fixed")
	});
	$(".mobile-gnb .gnb-link").on("click",function(){
		$(".mobile-menu").removeClass("is-show");
		$(".btn-mobile-menu--close").removeClass("is-show");
		$(".btn-mobile-menu--open").removeClass("is-hide");
		$("header").removeClass("is-fixed")
	});
}


$(window).scroll(function(){

		let scroll = $(window).scrollTop();
		let scrollTop = scroll + window.outerHeight;
	
		// 프로그레스 라인 애니
		let $lineItemTop1 = $(".line-item").eq(0).offset().top
		let $lineItemTop2 = $(".line-item").eq(1).offset().top
		let $lineItemTop3 = $(".line-item").eq(2).offset().top
		let $lineItemTop4 = $(".line-item").eq(3).offset().top
		let $lineItemTop5 = $(".line-item").eq(4).offset().top
		let $lineItemHeight1 = $(".line-item").eq(0).outerHeight();
		let $lineItemHeight2 = $(".line-item").eq(1).outerHeight();
		let $lineItemHeight3 = $(".line-item").eq(2).outerHeight();
		let $lineItemHeight4 = $(".line-item").eq(3).outerHeight();
		let $lineItemHeight5 = $(".line-item").eq(4).outerHeight();

		if(scroll > $lineItemTop1 / 1.02 && $lineItemTop1 / 1.02 + $lineItemHeight1){
			$(".line1").addClass("is-active");
			$(".list-type3__number").eq(0).addClass("is-active");
		}else {
			$(".line1").removeClass("is-active");
			$(".list-type3__number").eq(0).removeClass("is-active");
		}
		if(scroll > $lineItemTop2 / 1.02 && $lineItemTop2 / 1.02 + $lineItemHeight2){
			$(".line2").addClass("is-active");
			$(".list-type3__number").eq(1).addClass("is-active");
		}else {
			$(".line2").removeClass("is-active");
			$(".list-type3__number").eq(1).removeClass("is-active");
		}
		if(scroll > $lineItemTop3 / 1.02 && $lineItemTop3 / 1.02 + $lineItemHeight3){
			$(".line3").addClass("is-active");
			$(".list-type3__number").eq(2).addClass("is-active");
		}else {
			$(".line3").removeClass("is-active");
			$(".list-type3__number").eq(2).removeClass("is-active");
		}
		if(scroll > $lineItemTop4 / 1.02 && $lineItemTop4 / 1.02 + $lineItemHeight4){
			$(".line4").addClass("is-active");
			$(".list-type3__number").eq(3).addClass("is-active");
		}else {
			$(".line4").removeClass("is-active");
			$(".list-type3__number").eq(3).removeClass("is-active");
		}
		if(scroll > $lineItemTop5 / 1.02 && $lineItemTop5 / 1.02 + $lineItemHeight5){
			$(".line5").addClass("is-active");
			$(".list-type3__number").eq(4).addClass("is-active");
		}else {
			$(".line5").removeClass("is-active");
			$(".list-type3__number").eq(4).removeClass("is-active");
		}
})

// Fixed Content | 윈도우창 이미지
const fixedContentFunc = function(){
	let scroll = 0;
	let sectionintroduce = document.querySelector(".section-introduce")
	let sectionintroduceInner = document.querySelector(".section-introduce .inner");
	let hero = document.querySelector(".hero");
	let fixedCont = document.querySelector(".fixed-content");
	let fixedContentItem = document.querySelectorAll(".fixed-content .item");
	let fixedContentItem1 = document.querySelector(".fixed-content .item1");
	let fixedContentItem2 = document.querySelector(".fixed-content .item2");
	let fixedContentItem3 = document.querySelector(".fixed-content .item3");
	let fixedContentItem4 = document.querySelector(".fixed-content .item4");
	let fixedContentItem5 = document.querySelector(".fixed-content .item5");
	let heroBg = document.querySelector(".hero-bg");
	
	window.addEventListener("scroll",function(){
		scroll = window.scrollY;
		// scroll down
		if(scroll > hero.clientHeight) {
			sectionintroduceInner.classList.add("is-fixed");
			
		//scroll up
		}else {
			// fixedCont.classList.remove("is-fixed");
			sectionintroduceInner.classList.remove("is-fixed");
			
		};
		if(scroll > hero.clientHeight + sectionintroduce.clientHeight / 1.2) {
			heroBg.style.display = "none";

		}else {
			heroBg.style.display = "block";

		}

			
			let delta = 3000;
			let delta2 = 2000;
			let delta1 = 1000;
			if(scroll > (hero.clientHeight * 0.5)) {
				// heroBg.style.marginTop = (scroll / 200 ) + "%";
				fixedContentItem1.style.transform = `scale(${scroll / delta1})`;
				// fixedContentItem1.classList.add("is-active");
				// 스케일1이되면 더 안커지게
				if(scroll / delta1 >= 1) {
					fixedContentItem1.style.transform = `scale(1)`;
				}
			}

			// else if(fixedContentItem1.style.scale == 1){
			// 	fixedContentItem1.style.transform = `scale(1)`;
			// }
			else {
				// fixedContentItem1.style.transform = `scale(${scroll / 4000})`;
				fixedContentItem1.style.transform = `scale(0)`;
				// fixedContentItem1.classList.remove("is-active");
			}

			if(scroll > (hero.clientHeight * 1.2)) {
				fixedContentItem2.style.transform = `scale(${scroll / delta1})`;
				// fixedContentItem2.classList.add("is-active");
				// 스케일1이되면 더 안커지게
				if(scroll / delta1 >= 1) {
					fixedContentItem2.style.transform = `scale(1)`;
				}
			}else {
				fixedContentItem2.style.transform = `scale(0)`;
				// fixedContentItem2.classList.remove("is-active");
				// fixedContentItem2.style.transform = `scale(${scroll / 4000})`;
			}

			if(scroll > (hero.clientHeight * 1.6)) {
				fixedContentItem3.style.transform = `scale(${scroll / delta2})`;
				// 스케일1이되면 더 안커지게
				if(scroll / delta2 >= 1) {
					fixedContentItem3.style.transform = `scale(1)`;
				}
			}else {
				fixedContentItem3.style.transform = `scale(0)`;
			}

			if(scroll > (hero.clientHeight * 2)) {
				fixedContentItem4.style.transform = `scale(${scroll / delta})`;
				// 스케일1이되면 더 안커지게
				if(scroll / delta >= 1) {
					fixedContentItem4.style.transform = `scale(1)`;
				}
			}else {
				fixedContentItem4.style.transform = `scale(0)`;
			}

			if(scroll > (hero.clientHeight * 2.4)) {
				fixedContentItem5.style.transform = `scale(${scroll / delta})`;
				// 스케일1이되면 더 안커지게
				if(scroll / delta >= 1) {
					fixedContentItem5.style.transform = `scale(1)`;
				}
			}else {
				fixedContentItem5.style.transform = `scale(0)`;
			}
	});
};

const draggableFunc = function(){
	$(".draggable .item").css("cursor","move")
	$(".draggable .item").draggable({
		
		// containment : 'parent' 
	})
	// $(".draggable .item").draggable({
	// 	containment : 'parent' // 부모요소 안에 종속
	// })
}

function init(){
	countFunc ()
	draggableFunc();
	fixedContentFunc();
	headerFunc();
	faqFunc();
	scrollTopBtnFunc();
	scrollNavFunc();
	mobileMenuFunc();
	parallaxFunc();
	cursorFunc()
	swiperFunc();
}
init();


})(window, window.jQuery);


// AOS
AOS.init();


// http 접속시 https로 자동 접속하기
// if (document.location.protocol == 'http:') {
// 	document.location.href = document.location.href.replace('http:', 'https:');
// }
	



