// 능력치 Redar Chart 만들기
const ctx = document.getElementById('myChart').getContext('2d')
const data = {
    labels: [
        'JavaScripts',
        'HTML/CSS',
        'Vuejs',
        'Django',
        'Nodejs',
        'English Skill',
        'CS Knowledge',
    ],
    datasets: [
        {
            label: 'My Ability',
            data: [85, 95, 85, 55, 50, 80, 80],
            fill: true,
            backgroundColor: 'rgb(255, 171, 46, 0.2)',
            borderColor: 'rgb(255, 171, 46)',
            pointBackgroundColor: 'rgb(255, 171, 46)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(255, 99, 132)',
        },
    ],
}
const myChart = new Chart(ctx, {
    type: 'radar',
    data: data,
    options: {
        elements: {
            line: {
                borderWidth: 3,
            },
        },
        scales: {
            r: {
                angleLines: {
                    display: false,
                },
                suggestedMin: 0,
                suggestedMax: 100,
            },
        },
    },
})

// activity 창 띄우기
function modal(id) {
    var zIndex = 9999
    var modal = document.getElementById(id)

    // 모달 div 뒤에 희끄무레한 레이어
    var bg = document.createElement('div')
    bg.setStyle({
        position: 'fixed',
        zIndex: zIndex,
        left: '0px',
        top: '0px',
        width: '100%',
        height: '100%',
        overflow: 'auto',
        // 레이어 색갈은 여기서 바꾸면 됨
        backgroundColor: 'rgba(0,0,0,0.4)',
    })
    document.body.append(bg)

    // 닫기 버튼 처리, 시꺼먼 레이어와 모달 div 지우기
    modal
        .querySelector('.modal_close_btn')
        .addEventListener('click', function () {
            bg.remove()
            modal.style.display = 'none'
        })

    modal.setStyle({
        position: 'fixed',
        display: 'block',
        boxShadow:
            '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',

        // 시꺼먼 레이어 보다 한칸 위에 보이기
        zIndex: zIndex + 1,

        // div center 정렬
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        msTransform: 'translate(-50%, -50%)',
        webkitTransform: 'translate(-50%, -50%)',
    })
}

// Element 에 style 한번에 오브젝트로 설정하는 함수 추가
Element.prototype.setStyle = function (styles) {
    for (var k in styles) this.style[k] = styles[k]
    return this
}

function modalIdSearch(e) {
    const modalId = e.currentTarget.previousElementSibling.id
    // Swiper1
    new Swiper(`#${modalId} .swiper`, {
        slidesPerView: 1,
        spaceBetween: 100,
        centeredSlides: true,
        loop: true,
        autoplay: {
            delay: 5000,
        },
        pagination: {
            el: `#${modalId} .swiper-pagination`, // 페이지 번호 요소 선택자
            clickable: true, // 사용자의 페이지 번호 요소 제어 가능 여부
        },
        navigation: {
            prevEl: `#${modalId} .swiper-prev`,
            nextEl: `#${modalId} .swiper-next`,
        },
    })

    modal(modalId)
}

//Header & Button 요소 숨기기, 보이기

const badgeEl = document.querySelector('header')
const toTopEl = document.querySelector('#to-top')

window.addEventListener(
    'scroll',
    _.throttle(function () {
        if (window.scrollY > 200) {
            badgeEl.classList.add('show')
            //버튼 보이기!
            gsap.to(toTopEl, 0.2, {
                x: 0,
            })
        } else {
            badgeEl.classList.remove('show')
            //배지 숨기기!
            gsap.to(toTopEl, 0.2, {
                x: 100,
            })
        }
    }, 300)
)
// _.throttle(함수, 시간(밀리세컨드단위))


//Introduce 요소 생기기
const fadeEls = document.querySelectorAll('.visual .fade-in')
fadeEls.forEach(function (fadeEl, index) {
    // gsap.to(요소, 지속시간, 옵션);
    gsap.to(fadeEl, 1, {
        delay: (index + 1) * 0.7,
        opacity: 1,
    })
})


//ScrollMagic을 통해 스크롤의 상태에 따라 보여짐
const spyEls = document.querySelectorAll('.scroll-spy')
spyEls.forEach(function (spyEl) {
    new ScrollMagic.Scene({
        triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
        triggerHook: 0.8,
    })
        .setClassToggle(spyEl, 'show')
        .addTo(new ScrollMagic.Controller())
})
