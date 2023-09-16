
function loco(){
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });


    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
}

loco();


gsap.to('#page2 img',{
    height:'100vh',
    width:'100%',
    scrollTrigger:{
        trigger:'#page2 img',
        scroller:'#main',
        start:'top 70%',
        end:'top top',
        scrub:2
    }
})
let lt_main = gsap.timeline();

lt_main
.from('.page1-header',{opacity:0,y:80,ease:'none'})
.from('.page1-content',{opacity:0,y:30,ease:'none'},"-=0.2")
.from('#page2 img',{opacity:0,y:40,ease:'none'},"-=0.3")


gsap.from('#part-1 h2',{
    y:500,
    opacity:0,
    scrollTrigger:{
        trigger:'#part-1',
        scroller:'#main',
        start:'top 20%',
        end:'top 30%',
        scrub:4,
    }
})


// hover effect
const page3 = document.querySelector('.page3-content');
let imgs =  gsap.utils.toArray(".moving-img") ;
let divs =document.querySelectorAll('.page3-row');
divs.forEach((div,index) => {
  div.addEventListener('mouseenter',(e)=>{
    imgs[index].style.opacity = 1;
  });
  div.addEventListener('mouseleave',(e)=>{
    imgs[index].style.opacity = 0;
  });
});


let tilt= 0;
let diffTilt = 0;
page3.addEventListener('mousemove', (e) => { 
  let adjust = [0,5,10]
  let rect = page3.getBoundingClientRect();
  diffTilt = e.clientX-tilt;
  tilt = e.clientX-rect.left;
  imgs.forEach((img,index) => {
    gsap.to(img,{
      top:e.clientY - rect.top + adjust[index],
      left:e.clientX - rect.left,
      rotate:gsap.utils.clamp(40,-40,diffTilt*1)
    })
    });

});


var page3_timeline = gsap.timeline({
   scrollTrigger:{
      trigger:'#page3',
      scroller:'#main',
      start:'top 55%',
      end:'top 35%',
      scrub:5,
  }
})


page3_timeline
.to('.dotted',{
  width:'30%',
  opacity:1,
  duration:5,
  ease:'none'
})
.to('.dotted',{
  width:'50%',
  duration:5,
  ease:'none'
})
.to('.dotted',{
  width:'80%',
  duration:5,
  ease:'none'
})
.to('.dotted-text',{
  y:-45,
  opacity:1,
  duration:5
})
.from('.page3-row',{opacity:0,delay:3,duration:10})



var page4_timeline = gsap.timeline({
  scrollTrigger:{
     trigger:'#page4',
     scroller:'#main',
     start:'top 45%',
     end:'top 10%',
     scrub:2,
     ease: "none",
 }
})

page4_timeline
.from('.page4-one',{opacity:0,y:10,ease: "none",})
.from('.page4-two',{opacity:0,y:10,ease: "none",})
.from('.page4-three',{opacity:0,y:10,ease: "none",})



var page5_timeline = gsap.timeline({
  scrollTrigger:{
     trigger:'#page5',
     scroller:'#main',
     start:'top 50%',
     end:'top 30%',
     scrub:4,
 }
})

page5_timeline
.from('.full-div-1',{width:'0%'})
.from('.full-div-2',{width:'0%'})
.from('.half-div-1',{height:'0%'})
.from('.page5-inner-1',{opacity:0,y:20},'page5_timeline1')
.from('.page5-inner-2',{opacity:0,y:20},'page5_timeline1')


var page6_timeline = gsap.timeline({
  scrollTrigger:{
     trigger:'#page6',
     scroller:'#main',
     start:'top 10%',
     end:'top 0%',
     scrub:2,

 }
})

page6_timeline
.from('.page6-inner-1',{opacity:0,y:50,ease:'none',duration:5})
.from('.page6-inner-2-one',{opacity:0,y:50,delay: 2,ease:'none'})
.from('.page6-inner-2-two',{opacity:0,y:30,ease:'none'})
.from('.page6-inner-2-three',{opacity:0,y:10,ease:'none'})

gsap.to('.page6-inner-3 img',{rotate:360,duration:5,repeat:-1,ease: "none",})


gsap.from('#page7 h4',{
  opacity:0,
  y:80,
  ease: "none",
  scrollTrigger:{
    trigger:'#page7 h4',
    scroller:'#main',
    start:'top 47%',
    end:'top 40%',
    scrub:2
}
})

gsap.from('.part-3-inner-1',{
  opacity:0,
  y:80,
  ease: "none",
  scrollTrigger:{
    trigger:'.part-3-inner-1',
    scroller:'#main',
    start:'top 47%',
    end:'top 40%',
    scrub:2
}
})
gsap.from('.part-3-inner-left-effect h4',{
  opacity:0,
  y:80,
  ease: "none",
  scrollTrigger:{
    trigger:'.part-3-inner-left-effect h4',
    scroller:'#main',
    start:'top 47%',
    end:'top 40%',
    scrub:2
}
})


gsap.from('#page8 h4',{
  opacity:0,
  y:80,
  ease: "none",
  scrollTrigger:{
    trigger:'#page8 h4',
    scroller:'#main',
    start:'top 47%',
    end:'top 40%',
    scrub:2
}
})


var tl = gsap.timeline({
    scrollTrigger:{
        trigger:'#part-2',
        start:'0% 90%',
        end:'180% 90%',
        scrub:true,
        scroller:`#main`
    }
})

tl
    .to('.strip-l',{
        marginLeft:"-50%"
    },'a')

    .to('.strip-r',{
        marginLeft:'-50%'
    },'a')
    .to('.strip:nth-child(5)',{
        marginLeft:'-60%'
    },'a')
    .to('.strip:nth-child(2)',{
        marginLeft:'-40%'
    },'a')




    
// hover effect

let imgs2 =  gsap.utils.toArray(".part-3-inner-img") ;
let divs2 =document.querySelectorAll('.part-3-inner-left-effect h4');
divs2.forEach((div,index) => {
  div.addEventListener('mouseenter',(e)=>{
    imgs2[index].style.opacity = 1;
  });
  div.addEventListener('mouseleave',(e)=>{
    imgs2[index].style.opacity = 0;
  });
});

let page8 = document.querySelector('.part-3-inner-2');


function updateAnimation(e) {
  let rect = page8.getBoundingClientRect();
  imgs2.forEach(img => {
    gsap.to(img, {
      xPercent: -50,
      yPercent: -50,
      rotate: 20,
      top: e.clientY  - rect.top,
      left: e.clientX  - rect.left,
    })
  });
}

// Add mousemove event listener to page8
page8.addEventListener('mousemove', updateAnimation);





gsap.from(".page9-img", {
  opacity:0,
  y:150,
  stagger: 1,
  duration:5,
  ease: Power3. easeOut,
  scrollTrigger: {
    trigger: ".page9-img",
    start: "top 70%",
    end: "top 0%",
    scrub: 2,
    scroller:'#main'
  }
});