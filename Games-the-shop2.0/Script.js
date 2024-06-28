(function () {
    const locomotiveScroll = new LocomotiveScroll();
})();
let audio = new Audio('gun-3.wav')

window.addEventListener('click', () => {
    audio.play()
})

document.querySelector('.main').addEventListener('mousemove',(dets)=>{
    gsap.to('.crsr',{
        top: dets.y,
        left: dets.x
    })
})
let clutter = ''
let arr = [
    {
        img: 'https://cdn2.unrealengine.com/ac2-gamename-store-landscape-2560x1440-2560x1440-aa944fa0e8c6.jpg',
        text: "assassin's creed"
    },
    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbWpfzGWZ3ATXrGwFHuvMCBi1wXrUBYpzC_Q&s',
        text: "f1 24"
    },
    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIcfN89t4BhIFHq_P59eKlZLFkScpmEAzOwA&s',
        text: "star wars outlaws"
    },
    {
        img: 'https://i0.wp.com/lbcommuter.com/wp-content/uploads/2023/06/resident-evil-4-image-june-2023.jpg?fit=1280%2C720&ssl=1',
        text: "resident evil 4"
    },
    {
        img: 'https://media.contentapi.ea.com/content/dam/ea/fc/fc-24/articles/fc-24-soundtrack/common/fc24-sountrack-page-thumbnail-16x9.jpg.adapt.crop191x100.1200w.jpg',
        text: "fc 24"
    },
]


arr.forEach((dets, i) => {
    clutter += ` <div class="game-con" data-img=${dets.img} key=${i}>
    <div class="game">
        <img src=${dets.img} alt="">
    </div>
    <h1>${dets.text}</h1>
</div>`
})

document.querySelector('.bottom').innerHTML = clutter
let gamCon = document.querySelectorAll('.game-con')

gamCon.forEach((dets) => {
    let data = dets.getAttribute('data-img')
    let h1 = dets.querySelector('h1')
    dets.addEventListener('click', () => {
        document.querySelector('.game-img').style.backgroundImage = `url(${data})`
        document.querySelector('.game-details').style.backgroundImage = `url(${data})`
        document.querySelector('.game-details h1').innerHTML = h1.innerHTML
        gsap.to('.game-details', {
            right: 0
        })
    })
})
document.querySelector('.game-details h3').addEventListener('click', () => {
    gsap.to('.game-details', {
        right: '-100%',
        duration: 1
    })
})

let menu = document.querySelector('.menu')
let menup = document.querySelector('.menu p')
let sidebar = document.querySelector('.sidebar')
let video = document.querySelector('.left video')
let sidegame = document.querySelector('.game-details img')
let flag = 0
menu.addEventListener('click', () => {
    if (flag == 0) {
        gsap.to(sidebar, {
            top: 0
        })
        menup.innerHTML = 'Close'
        flag = 1
        video.play()
    } else {
        gsap.to(sidebar, {
            top: ' -100%'
        }),
            menup.innerHTML = 'Menu'
        flag = 0
    }
    video.stop()
})
let homeh1 = document.querySelector('.top h1')
h1text = homeh1.textContent
let splited = h1text.split("")
let h1clutter = ""
splited.forEach(function (goku) {
    h1clutter += `<span>${goku}</span>`
})
homeh1.innerHTML = h1clutter
let tl = gsap.timeline()
tl.from('.top h1 span', {
    delay: .5,
    y: 400,
    stagger: .12
})
tl.from('.game-con', {
    y: 400,
    stagger: .2
})
gsap.to('.back', {
    scrollTrigger: {
        trigger: '.page-2',
        start: "top top",
        end: "bottom top",
        scrub: 1,
    },
    scale: 2
})
tl.to('.back', {
    scrollTrigger: {
        trigger: '.page-2',
        start: "top top",
        end: "bottom top",
        scrub: 1,
    },
    "--clip": "40%"
})
gsap.to('.back h1', {
    scrollTrigger: {
        trigger: '.page-2',
        start: "top top",
        end: "bottom top",
        scrub: 1,
    },
    opacity: 1,
    top: '50%'
})


gsap.to('.front', {
    scrollTrigger: {
        trigger: '.page-2',
        start: "top top",
        end: "bottom top",
        scrub: 1,
    },
    scale: 5
})
gsap.to('.page-2', {
    scrollTrigger: {
        trigger: '.page-2',
        start: "top top",
        end: "bottom top",
        scrub: 1,
        pin: true
    },
})

gsap.to('.con-h1 h1', {
    scrollTrigger: {
        trigger: '.page-3',
        start: "top top",
        end: "bottom top",
        scrub: 1,
    },
    top: '-50%'
})
tl.to('.page-3', {
    scrollTrigger: {
        trigger: '.page-3',
        start: "top top",
        end: "bottom top",
        scrub: 1,
        pin: true
    },
    opacity: 0

})
gsap.to('.con-h14 h1', {
    scrollTrigger: {
        trigger: '.page-4',
        start: 'top top',
        end: 'bottom top',
        scrub: 1
    },
    top: '-50%'
})
tl.to('.page-4', {
    scrollTrigger: {
        trigger: '.page-4',
        start: "top top",
        end: "bottom top",
        scrub: 1,
        pin: true
    },
    opacity: 0

})

gsap.to('.con-h15 h1', {
    scrollTrigger: {
        trigger: '.page-5',
        start: 'top top',
        end: 'bottom top',
        scrub: 1
    },
    top: '-50%'
})
tl.to('.page-5', {
    scrollTrigger: {
        trigger: '.page-5',
        start: "top top",
        end: "bottom top",
        scrub: 1,
        pin: true
    },
    opacity: 0
})
gsap.to('.slide', {
    scrollTrigger: {
        trigger: '.page-6',
        start: "top top",
        end: "bottom top",
        scrub: 1,
    },
    xPercent: -300,
    ease: Power4
})
gsap.to('.con-1,.con-3', {
    scrollTrigger: {
        trigger: '.page-6',
        start: "top top",
        end: "bottom top",
        scrub: 1,
    },
    yPercent: 100,
    ease: Power4
})
gsap.to('.con-2', {
    scrollTrigger: {
        trigger: '.page-6',
        start: "top top",
        end: "bottom top",
        scrub: 1,
    },
    yPercent: -100,
    ease: Power4
})
gsap.to('.box-con', {
    scrollTrigger: {
        trigger: '.page-6',
        start: '45% top',
        end: '45% top',
        scrub: .5
    },
    xPercent: -100,
    ease: "sine.out",
})
let arr2 = [
    {
        cardImg: "https://www.zebrs.com/uploads/zebrs/products/noise-colorfit-pro-4-alpha-1-78-amoled-display-281651_l.jpg",
        title: "ColorFit Pulse 4",
        subTitle: "1.92 Amoled BT Calling",
        price: "2,499",
        strike: "5,999",
        rating: "4.5"
    },
    {
        cardImg: "https://hamrobazaar.blr1.cdn.digitaloceanspaces.com/User/Posts/2024/02/07/fdaf299a-2513-cb56-24b6-4ee9f612878f.webp?x-image-process=image/resize,m_lfit,h_300,w_300",
        title: "Buds Xero",
        subTitle: "Adaptive ANC",
        price: "4,499",
        strike: "6,999",
        rating: "4.9"
    },
    {
        cardImg: "https://www.gonoise.com/cdn/shop/files/Artboard1copy_0a18624b-da50-4110-9c37-d0af8eacdaca.png?v=1714461815",
        title: "ColorFit Pro 5 Max AMOLED",
        subTitle: "1.96 Amoled ColorFit VO Max",
        price: "4,499",
        strike: "9,999",
        rating: "4.9"
    },
    {
        cardImg: "https://rukminim2.flixcart.com/image/850/1000/xif0q/headphone/u/9/7/-original-imagshf7aszzz7y8.jpeg?q=90&crop=false",
        title: "Buds Combat Z",
        subTitle: "gaming with ultra low latency",
        price: "1,299",
        strike: "3,999",
        rating: "5.0"
    },
    {
        cardImg: "https://cdn.shopify.com/s/files/1/0997/6284/files/image_2023_08_05T05_02_19_762Z_480x480.png?v=1691215012",
        title: "Luna Rings",
        subTitle: "gaming with ultra low latency",
        price: "19,999",
        strike: "21,999",
        rating: "4.9"
    },
    {
        cardImg: "https://m.media-amazon.com/images/I/714lWnTOKhL.jpg",
        title: "One true bass",
        subTitle: "gaming with ultra low latency",
        price: "1,299",
        strike: "3,999",
        rating: "5.0"
    },
    {
        cardImg: "https://www.bajaao.com/cdn/shop/files/noise-bluetooth-speakers-noise-vibe-5w-wireless-bluetooth-speaker-23141610946739_500x.jpg?v=1688047786",
        title: "Vibe 2 5Wl",
        subTitle: "gaming with ultra low latency",
        price: "1,499",
        strike: "3,499",
        rating: "3.0"
    },
    {
        cardImg: "https://www.jiomart.com/images/product/original/493838766/noise-noisefit-mettle-smart-watch-elite-silver-digital-o493838766-p603480304-1-202308020525.jpeg?im=Resize=(420,420)",
        title: "NoiseFit Mettle Smart Watch",
        subTitle: "gaming with ultra low latency",
        price: "2,199",
        strike: "7,999",
        rating: "5.0"
    },
]
let clutetr2 = ""
arr2.forEach((dets) => {
    clutetr2 += ` <div class="card">
    <div class="card-img">
        <img src=${dets.cardImg} alt="">
    </div>
    <div class="card-details">
        <h1>${dets.title}</h1>
        <h3>${dets.subTitle}</h3>
        <div style="display: flex; align-items: center; justify-content: space-between;">
            <div class="part-1" style="display: flex; align-items: center; gap: 1rem;">
                <h1>₹ ${dets.price}</h1>
            <strike>${dets.strike}</strike>
            </div>
            <div class="part-2">
                <i class="ri-star-s-fill"></i>
                <h3>${dets.rating}</h3>
            </div>
        </div>
    </div>
</div>`
})
document.querySelector(".card-container").innerHTML = clutetr2
document.querySelector(".side-con").innerHTML = clutetr2

let ps5 = [
    {
        img5: 'https://s3-ap-southeast-1.amazonaws.com/cdn.gamestheshop.com/boxart/8b91fece-5d90-4bba-86e3-9e03b75d90e1.jpg'
    },
    {
        img5: 'https://s3-ap-southeast-1.amazonaws.com/cdn.gamestheshop.com/boxart/99e0c667-4f73-4017-9ef8-e6e6801fb5ab.jpg'
    },
    {
        img5: 'https://s3-ap-southeast-1.amazonaws.com/cdn.gamestheshop.com/boxart/5cfa04a0-dd2b-42c2-b81b-f3c69ccae353.jpg'
    },
    {
        img5: 'https://s3-ap-southeast-1.amazonaws.com/cdn.gamestheshop.com/boxart/f85414d3-be28-4086-9b28-763e9d7b8a79.png'
    },
    {
        img5: 'https://s3-ap-southeast-1.amazonaws.com/cdn.gamestheshop.com/boxart/fde0daa5-a783-4b6f-8e5c-cbbfae5c36bd.jpg'
    },
    {
        img5: 'https://s3-ap-southeast-1.amazonaws.com/cdn.gamestheshop.com/boxart/c1dedd99-00d0-4a91-a5cf-fc8cbb9232f0.jpg'
    },
]


let clutetr3 = ""
ps5.forEach((dets) => {
    clutetr3 += ` <div class="bottom-card">
    <img src=${dets.img5} alt="">
</div>`
})
document.querySelector(".cont").innerHTML = clutetr3
let flag2 = 0
document.querySelector('.icon').addEventListener('click', () => {
    if (flag2 == 0) {
        gsap.to('.bottom-card', {
            x: -410
        })
        gsap.to('.icon', {
            rotate: 180
        })
        flag2 = 1
    } else {
        gsap.to('.bottom-card', {
            x: 0
        })
        gsap.to('.icon', {
            rotate: 0
        })
        flag2 = 0
    }
})
let tog = 0
let twoSide = document.querySelectorAll('.two-side h1')
twoSide.forEach((dets) => {
    dets.addEventListener('click', () => {
        if (tog == 0) {
            gsap.to('.side', {
                x: 150
            })
            gsap.to('.side-con', {
                left: 0
            })
            tog = 1
        }
        else {
            gsap.to('.side', {
                x: 0
            })
            gsap.to('.side-con', {
                left: '100%'
            })
            tog = 0
        }
    })
})
let tl10 = gsap.timeline({
    scrollTrigger: {
        trigger: '.page-10',
        start: 'top bottom',
        end: 'top top',
        scrub: 1,
        // pin: ture
    }
})
tl10.from('.background-image', {
    // y: -400,
    scale: 5,
    opacity: 0,
},'e')
tl10.from('.background-text h1', {
    y: 400,
    stagger: .2
},'e')
gsap.to('.album',{
    scrollTrigger: {
        trigger: '.page-11',
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
    },
    rotate: 15,
    scale: 2,
    opacity: 0
})
gsap.to('.page-11',{
    scrollTrigger: {
        trigger: '.page-11',
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
        pin: true
    },
})
let element = document.querySelector('.right-pannel i')
element.addEventListener('click',()=>{
    element.style.animation = 'none'; // Reset the animation
    // Trigger reflow to restart the animation
    element.offsetHeight; // This forces the reflow
    element.style.animation = 'user ease 1s '
})