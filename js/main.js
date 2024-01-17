/* 🎀 메인메뉴의 움직이는 바 */
$('.gnb li a').mouseenter(function () {
    let bar = $(this).position().left;
    // .position() : jquery메서드 중 하나로, 요소의 위치정보(top,left)를 반환한다.
    console.log(bar)
    let widnum = $(this).width();
    //$('.bar').animate({실행문},시간)
    $('.bar').animate({
        'left': bar + "px",
        'width': widnum + "px",
        'opacity': 1,
    }, 300)

})


// 🎀 전체 애니메이션
$('.animate').scrolla({
    // default
    mobile: false, // 모바일에서 활성화
    once: false, // 스크롤시 한번 또는 여러번 실행할 건지 설정
    animateCssVersion: 4 // 애니메이션 버전
});


// path의 총 길이(px단위)를 알아내기
let pathH = document.querySelector('.st0')
let pathHeight = pathH.getTotalLength();
console.log(pathHeight)


// menuOpen 오른쪽 버튼 누르면 메뉴 나옴
$('.menuOpen .open').click(function (e) {
    e.preventDefault();
    $('.menuOpen .menuWrap').addClass('on')
})

$('.menuOpen .close').click(function (e) {
    e.preventDefault();
    $('.menuOpen .menuWrap').removeClass('on')
})



// 🎀 service 영역 배경 바꾸기
$(window).scroll(function () {
    let scrollTop = $(this).scrollTop();
    // $(this) = window
    console.log(scrollTop);
    let offset = $('.service').offset().top
    // 제일 위에 닿는 스크롤 위치. 전체 문서에서 서비스 영역 전까지의 높이값을 추출

    if (scrollTop > offset) {
        
        $('body').addClass('on')
    } else {
        $('body').removeClass('on')
    }
})