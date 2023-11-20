function toGsap(){
    gsap.to(".card" , {
        y: 525,
        duration:1,
    })
}
function fromGsap(){
    gsap.to('.card',
    {
        scale:2,
        duration:1,
        opacity: 0,
    })
}