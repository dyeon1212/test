$(document).ready(function () {


  //index
  //메인페이지 배너 슬라이드
  const mb = new Swiper('.mb', {

    // 자동 슬라이드 설정, 활성화 : true, / 비활성화 : false,
    autoplay: {
      delay: 5000,  // 슬라이드 지속 시간, 1000 = 1초
      disableOnInteraction: false,  // false는 스와이프 후 자동 재생이 비활성화 되지 않음
    },

    // 방향 버튼 지정
    navigation: {
      nextEl: '.swiper-button-next',  // 다음 버튼
      prevEl: '.swiper-button-prev',  // 이전 버튼
    },

    // 페이저 버튼 지정
    pagination: {
      el: '.swiper-pagination',  // 버튼 태그 설정
      type: 'bullets',  // 버튼 종류 설정 'bullets' : 알약 모양 | 'fraction' :  | 'progressbar' : 상단 바 모양
      clickable: true,  // 버튼 클릭 여부
    },

    loop: true,  // 슬라이드 반복 여부
    speed: 1000  // 슬라이드 동작 속도


  });


  //메인페이지 베개 슬라이드
  const pillows_list = new Swiper('.pillows_list', {

    autoplay: {
      delay: 5000,  //5000=5초
      disableOnInteraction: false,  // false : 자동 재생이 비활성화 X
    },

    // 방향 버튼 지정
    navigation: {
      nextEl: '.swiper-button-next',  // 다음 버튼
      prevEl: '.swiper-button-prev',  // 이전 버튼
    },

    // 스크롤바 여부
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: false,
    },


    spaceBetween: 40,  // 슬라이드 사이 공간
    centeredSlides: true,  // 첫번째 슬라이드 가운데 배치
    slidesPerView: '2',  // 한 슬라이드에 보여줄 갯수
    loop: true,  // 슬라이드 반복 여부
    speed: 1000,  // 슬라이드 동작 속도

    // 반응형 슬라이드
    breakpoints: {
      1024: {  // 가로해상도가 640px 이상일 경우
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1600: {  // 가로해상도가 768px 이상일 경우
        slidesPerView: 5,
        spaceBetween: 40,
      },
    },


  }); // 옵션


  //메인페이지 매트리스 탭메뉴
  // .mattress_list li 중 첫번째 요소에는 active 클래스를 먼저 추가
  // .mattress_list li에 클릭했을 때 클릭한 요소에 active라는 클래스 추가
  // 클릭한 요소의 형제 요소들에는 active라는 클래스를 제거
  $('.mattress_list li:first-child').addClass('active');

  $('.mattress_list li').click(function () {
    $(this).addClass('active').siblings().removeClass('active'); //.이 들어가지 않음 
  });

  $('.original_txt, .sensation_txt').hide();



  $('.mattress_list li:last-of-type').click(function () {
    $('.original_txt, .cloud_txt').hide();
    $('.sensation_txt').fadeIn();
  });

  $('.mattress_list li:nth-of-type(2)').click(function () {
    $('.original_txt, .sensation_txt').hide();
    $('.cloud_txt').fadeIn();
  });

  $('.mattress_list li:first-of-type').click(function () {
    $('.cloud_txt, .sensation_txt').hide();
    $('.original_txt').fadeIn();
  });


  //depth2
  $('.depth2').hide();

  $('.gnb > li').mouseenter(function () {
    $(this).find('.depth2').stop().fadeIn();
    $('.depth2_bg').stop().fadeIn();
  });

  $('.gnb > li').mouseleave(function () {
    $(this).find('.depth2').stop().fadeOut();
    $('.depth2_bg').stop().fadeOut();
  });



  //sub2
  //메인페이지 베개 슬라이드
  const original_list = new Swiper('.original_list', {

    autoplay: {
      delay: 5000,  //5000=5초
      disableOnInteraction: false,  // false : 자동 재생이 비활성화 X
    },

    // 방향 버튼 지정
    navigation: {
      nextEl: '.swiper-button-next',  // 다음 버튼
      prevEl: '.swiper-button-prev',  // 이전 버튼
    },

    spaceBetween: 40,  // 슬라이드 사이 공간
    centeredSlides: true,  // 첫번째 슬라이드 가운데 배치
    slidesPerView: '2',  // 한 슬라이드에 보여줄 갯수
    loop: true,  // 슬라이드 반복 여부
    speed: 1000,  // 슬라이드 동작 속도

    // 반응형 슬라이드
    breakpoints: {
      1024: {  // 가로해상도가 640px 이상일 경우
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1600: {  // 가로해상도가 768px 이상일 경우
        slidesPerView: 3,
        spaceBetween: 40,
      },
    },

  }); // 옵션


  // 스와이퍼 공통 버튼
  // prev            
  $(".swiper-button-prev.shape1").mouseover(function () {
    $(".swiper-button-prev.shape1").find("path").attr("d", "M 40 10 Q 10 65 40 140");
  });
  $(".swiper-button-prev.shape1").mouseleave(function () {
    $(".swiper-button-prev.shape1").find("path").attr("d", "M 40 10 Q 40 65 40 140");
  });

  //next
  $(".swiper-button-next.shape2").mouseover(function () {
    $(".swiper-button-next.shape2").find("path").attr("d", "M 10 10 Q 40 65 10 140");
  });

  $(".swiper-button-next.shape2").mouseleave(function () {
    $(".swiper-button-next.shape2").find("path").attr("d", "M 10 10 Q 10 65 10 140");
  });

});




