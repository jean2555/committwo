const menuBtn = document.querySelector(".menuBtn")
const existBtn = document.querySelector(".exist")


let t1 = gsap.timeline({ paused: true })
t1.to(".menu", { opacity: 1, duration: 1, top: 0 , ease: Power2.easeInOut})
t1.to(".nav", { opacity: 1, duration: 1, stragger: 0.1, marginTop: 0, ease: Power2.easeInOut }, ">-0.5")

menuBtn.addEventListener("click", () => {
    t1.play().timeScale(1);

})

existBtn.addEventListener("click", () => {
    t1.timeScale(3);
    t1.reverse();

})

const words = ["Jesse.", "A Father.", "A Husband.", "A Developer."]

let cursor = gsap.to('.cursor', {opacity:0, ease: "power2.inOut", repeat:-1})
let masterTl = gsap.timeline({repeat: -1}).pause()
let boxTl = gsap.timeline()

boxTl.to('.box', {duration:1, width:"17vw", delay: 0.5, ease: "power4.inOut"})
  .from('.hi', {duration:1, y:"7vw", ease: "power3.out"})
  .to('.box', {duration:1, height:"7vw", ease: "elastic.out", onComplete: () => masterTl.play() })
  .to('.box', {duration:2, autoAlpha:0.7, yoyo: true, repeat: -1, ease:"rough({ template: none.out, strength:  1, points: 20, taper: 'none', randomize: true, clamp: false})"})
words.forEach(word => {
  let tl = gsap.timeline({repeat: 1, yoyo: true, repeatDelay:1})
  tl.to('.text', {duration: 1, text: word})
  masterTl.add(tl)
})