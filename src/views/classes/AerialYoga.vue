<template lang="pug">
.root
  .overlay(
    v-show="clicking"
    @click.stop="showForm")
    feedbackForm(v-show="clicking")
  section.titleContainer
    .dot-container 
      .dot
      .title 空中瑜珈
      .eng-title Aerial Yoga
    .fade-span 向下滑動
  section.preface
    .prefaceContent 
      h2 課程介紹
      p 空中瑜珈是一種結合傳統瑜珈動作和懸吊器材的練習形式。透過將身體懸掛在吊帶或絲繩上，空中瑜珈提供了額外的挑戰和支持，同時加強了平衡、柔軟度和身體控制。這種練習形式可以增強肌肉力量、改善靈活性，同時提升身心的集中力和身體感知能力。
    .info-container
      .infoRow.row1
        .infoCard 
          h2 課程目標 
          p 藉由懸掛達到更多延伸 
            br 
            | 鍛鍊核心與全身肌力
            br 
            | 建立身體美感與自信心
        .infoCard
          h2 課程時間 
          p 請洽老師
      .infoRow.row2
        .infoCard 
          h2 課程人數 
          p 最少二人，最多五人
        .infoCard
          h2 課程收費
          p 請洽老師
  section.gallery
    v-container.w-auto(style =" border: 1px solid none; ")
      v-row.imgRow1.justify-center.align-center( style='border: 1px solid none; ')
        v-col(v-for='image in imagesR1' :key='image' cols='6' style='border: 1px solid none;')
          v-img.yogaImg.bg-grey-lighten-2.mr-2(:src='image' cover='' style='aspect-ratio: 4/3; box-shadow: -3px 3px 3px 0 rgba(0,0,0,0.3) ; width: 100%; border-radius: 5%;' lazy-src='https://picsum.photos/id/11/100/60')
            template(v-slot:placeholder='')
              .d-flex.align-center.justify-center.fill-height
                v-progress-circular(color='grey-lighten-4' indeterminate='')
      v-row.imgRow2.justify-center.align-center( style='border: 1px solid none;')
        v-col(v-for='image in imagesR2' :key='image' cols='6' style='border: 1px solid none;')
          v-img.yogaImg.bg-grey-lighten-2.mr-2(:src='image' cover='' style='aspect-ratio: 4/3; box-shadow: -3px 3px 3px 0 rgba(0,0,0,0.3) ; width: 100%; border-radius: 5%;' lazy-src='https://picsum.photos/id/11/100/60')
            template(v-slot:placeholder='')
              .d-flex.align-center.justify-center.fill-height
                v-progress-circular(color='grey-lighten-4' indeterminate='')

  section.feedback
    carouselSwiper(style="position: absolute; top: 10%;")
    v-btn(style="height: 350px; width: 250px; opacity: 0; position: absolute; z-index: 3; transform: translateY(50px);"
    @click.stop="showForm")  
      v-tooltip(
        activator="parent"
        location="start"
        style = "letter-spacing: 2px; border-radius: 20px; font-size: 16px;  white-space: wrap; padding: 50px;"
        ) 點擊！留言給卡姊
    img.role4(src="@/assets/images/vertical-role4.webp")
    .container-bar
  section.calendar 
    CalendarVue
    router-link.btnRouter(to="/contact" style="margin-bottom: 50px; margin-top: 100px;")
      v-btn.reserveBtn 預約課程
      
  section.footer
    a.prev(href="/classes/KXPilates") 機械皮拉提斯
    v-btn#pagetop(@click="toTop" variant="outlined") 回到頂端 
    a.next(href="/classes/Yoga") 瑜珈


mouseHorizontal
</template>
  
    
<style lang='sass' scoped>
* 
  cursor: default


.root 
  width: 100%
  height: auto
  position: absolute
  top: 0%
  display: flex
  flex-direction: column
  background-color: #F9F9FB
  .overlay
    width: 100%
    height: 100%
    background-color: rgba(0,0,0,0.8)
    position: absolute
    display: flex
    justify-content: center
    align-items: center
    z-index: 10
  section
    width: 100%
    display: flex
    justify-content: center
    align-items: center
    flex-direction: column
    position: relative
  .titleContainer
    height: 130vh
    .dot-container
      width: 300px
      height: 300px
      letter-spacing: 2.5px
      font-family: 'Playfair Display'
      display: flex
      justify-content: center
      align-items: center
      flex-direction: column
      .dot 
        width: 70px
        height: 70px
        background-color: #D2DA40
        border-radius: 50%
      .title
        margin-top: 95px
        font-weight: 500
        font-size: 3rem
        opacity: .5
        white-space: nowrap
      .eng-title
        font-size: 1.5rem
        font-weight: 100
        margin-top: 20px
        opacity: .5
    .fade-span
      position: absolute
      left: 50%
      transform: translateX(-50%)
      bottom: 5%
      letter-spacing: 2.5px
      opacity: .8
  .preface
    height: 100vh
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    .prefaceContent
      position: relative
      display: flex
      flex-direction: column
      width: 30%
      color: #626262
      z-index: 5
      text-align: center
      justify-content: center
      opacity: .6
      h2
        margin-bottom: 20px
      p
        font-size: 12pt
        line-height: 36px
        letter-spacing: 1.5px
        
      
    .info-container
      position: relative
      width: 100%
      display: flex
      flex-direction: column
      top: 300px

      .infoRow
        position: relative
        width: 100%
        height: 200px
        display: flex
        justify-content: center
        align-items: center
        flex-direction: row

        .infoCard
          position: relative
          width: 200px
          height: 200px
          color: #515151    
          margin: 30px
          text-align: center
          color: #626262
          letter-spacing: 3px
          font-weight: thin
          p
            line-height: 32px
            font-weight: 150
            margin-top: 10px
  
  .gallery
    height: 150vh
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    padding: 15%
    .yogaImg:hover
      opacity: .9
    .imgRow1
      flex-direction: row

  .feedback
    height: 90vh
    .role4:hover
      transform: rotate(-2deg) translateX(10px)
    .role4
      height: 75vh
      position: absolute
      top: 20%
      z-index: 2
      transform: rotate(2deg) translateX(-10px)
    .container-bar
      height: 100px
      width: 100%
      bottom: 0px
      background-color: #D8C5AD
      position: absolute

  .calendar
    background-color: #F9F9FB
    justify-content: start
    height: auto
    padding: 50px 0px
    .btnRouter
      .reserveBtn
        padding: 30px 50px
        text-align: center
        align-content: center
        letter-spacing: .8rem
        color: #626262
        font-size: 18px
        border-radius: 30px
      
  .footer
    height: 30vh
    background-color: #626262
    color: #EBEBEB
    letter-spacing: 3px
    flex-direction: row
    justify-content: center
    #pagetop
      left: 50% 
      transform: translateX(-50%) 
      position: absolute 
      letter-spacing: 6px 
      border-radius: 30px
      padding: 2% 3% 
      display: flex 
      vertical-align: center

    .prev
      position: relative
      padding-right: 1em
      text-decoration: none
      color: #EBEBEB
    .prev::after
      content: ""
      border: solid
      border-width: 0.15em 0.15em 0 0
      display: inline-block
      padding: 0.2em
      transform: translate(-150px, -25%) rotate(-135deg)
    
    .next
      position: relative
      padding-right: -5em
      margin-left: 50%
      text-decoration: none
      color: #EBEBEB
    .next::after
      content: ""
      border: solid
      border-width: 0.15em 0.15em 0 0
      display: inline-block
      padding: 0.2em
      transform: translate(20px, -25%) rotate(45deg)

@media (min-width: 790px) and (max-width: 1024px)
  .root
    .gallery
      height: 280vh
      padding: 0%
      .imgRow1, .imgRow2
        flex-direction: column


@media (min-width: 700px) and (max-width: 790px)
  .root
    .preface
      .prefaceContent
        width: 50%
        h2
          font-size: 1.25rem
        p
          font-size: .9rem
      .info-container        
        h2
          font-size: 1.25rem
        p
          font-size: .9rem
    .gallery
      height: 270vh
      padding: 0%
      .imgRow1, .imgRow2
        flex-direction: column
    .calendar
      height: 80%
      .btnRouter
        .reserveBtn
          font-size: 14px
          border-radius: 20px
          padding: 20px 20px
          letter-spacing: 8px
    .footer
      font-size: 14px
@media (min-width: 600px) and (max-width: 700px)
  .root
    .titleContainer
      .dot-container
        .dot 
          width: 60px
          height: 60px
        .title
          font-size: 2.5rem
        .eng-title
          font-size: 1rem
          margin-top: 20px
    .preface
      height: 200vh
      .prefaceContent
        width: 50%
        h2
          font-size: 1.25rem
        p
          font-size: .9rem
      .info-container
        width: 100% 
        .row2
          margin-top: 50px       
        .infoRow
          flex-direction: column
          height: 300px        

          .infoCard
            h2
              font-size: 1.25rem
            p
              font-size: .9rem
    .calendar
      height: 70%
      .btnRouter
        .reserveBtn
          font-size: 14px
          border-radius: 20px
          padding: 20px 20px
          letter-spacing: 8px
    .gallery
      height: 200vh
      justify-content: center
      padding: 0%
      .imgRow1, .imgRow2
        flex-direction: column
    .feedback
      .role4
        height: 60vh
        position: absolute
        top: 30%
        z-index: 2

    .footer
      font-size: 12px
      #pagetop
        font-size: 12px
      .prev
        position: relative
        text-decoration: none
        color: #EBEBEB
      .prev::after
        content: ""
        border: solid
        border-width: 0.15em 0.15em 0 0
        display: inline-block
        padding: 0.2em
        transform: translate(-110px, -25%) rotate(-135deg)
        
      
      .next
        position: relative
        text-decoration: none
        color: #EBEBEB
      .next::after
        content: ""
        border: solid
        border-width: 0.15em 0.15em 0 0
        display: inline-block
        padding: 0.2em
        transform: translate(10px, -25%) rotate(45deg)

@media (min-width: 470px) and (max-width: 600px)
  .root
      .titleContainer
        .dot-container
          .dot 
            width: 60px
            height: 60px
          .title
            font-size: 2.5rem
          .eng-title
            font-size: 1rem
            margin-top: 20px
      .calendar
        height: 60%
        .btnRouter
          .reserveBtn
            font-size: 14px
            border-radius: 20px
            padding: 20px 20px
            letter-spacing: 8px
      .preface
        height: 200vh
        .prefaceContent
          width: 50%
          h2
            font-size: 1.25rem
          p
            font-size: .9rem
        .info-container
          width: 100%
          .row2
            margin-top: 50px       
          .infoRow
            flex-direction: column
            height: 300px        

            .infoCard
              h2
                font-size: 1.25rem
              p
                font-size: .9rem
      .gallery
        height: 160vh
        justify-content: center
        padding: 0%
        .imgRow1, .imgRow2
          flex-direction: column
      .feedback
        .role4
          height: 60vh
          position: absolute
          top: 30%
          z-index: 2
      .footer
        font-size: 12px
        #pagetop
          font-size: 12px
          padding: 1% 3%
        .prev
          position: relative
          text-decoration: none
          color: #EBEBEB
        .prev::after
          content: ""
          border: solid
          border-width: 0.15em 0.15em 0 0
          display: inline-block
          padding: 0.2em
          transform: translate(-110px, -25%) rotate(-135deg)
        
        .next
          position: relative
          text-decoration: none
          color: #EBEBEB
        .next::after
          content: ""
          border: solid
          border-width: 0.15em 0.15em 0 0
          display: inline-block
          padding: 0.2em
          transform: translate(10px, -25%) rotate(45deg)


  
@media (min-width: 0px) and (max-width: 470px)
  .root
    .titleContainer
      .dot-container
        .dot 
          width: 60px
          height: 60px
        .title
          font-size: 2.5rem
        .eng-title
          font-size: 1rem
          margin-top: 20px
    .calendar
      height: 60%        
      .btnRouter
        .reserveBtn
          font-size: 12px
          border-radius: 20px
          padding: 18px 18px
          letter-spacing: 6px

    .preface
      height: 200vh
      .prefaceContent
        width: 50%
        h2
          font-size: 1.25rem
        p
          font-size: .9rem
      .info-container
        width: 100% 
        // border: 1px solid black
        .row2
          margin-top: 50px       
        .infoRow
          flex-direction: column
          height: 300px        

          .infoCard
            h2
              font-size: 1.25rem
            p
              font-size: .9rem
    .gallery
      height: 160vh
      justify-content: center
      padding: 0%
      .imgRow1, .imgRow2
        flex-direction: column
    .feedback
      .role4
        height: 60vh
        position: absolute
        top: 30%
        z-index: 2
    .footer
      font-size: 12px
      padding: 0px 10%
      #pagetop
        font-size: 12px
        transform: translateX(-25px)
        padding: 1% 3%
      .prev
        position: relative
        text-decoration: none
        color: #EBEBEB
        white-space: nowrap
      .prev::after
        content: ""
        border: solid
        border-width: 0.15em 0.15em 0 0
        display: inline-block
        padding: 0.2em
        transform: translate(-100px, -25%) rotate(-135deg)
      
      .next
        position: relative
        text-decoration: none
        color: #EBEBEB
        white-space: nowrap
      .next::after
        content: ""
        border: solid
        border-width: 0.15em 0.15em 0 0
        display: inline-block
        padding: 0.2em
        transform: translate(5px, -25%) rotate(45deg)


</style>




<script setup>


import { onMounted, onUnmounted, ref, onBeforeUnmount  } from 'vue';

import { RouterLink } from 'vue-router';
import router from '@/router/router';

import carouselSwiper from '@/components/carouselSwiper.vue'
import feedbackForm from '@/components/feedbackForm.vue';
import CalendarVue from '@/components/calendarVue.vue';
import mouseHorizontal from '@/components/mouseHorizontal.vue';

// image URL

const imagesR1 = [
  new URL('../../assets/images/AerialYoga/image1.webp', import.meta.url).href,
  new URL('../../assets/images/AerialYoga/image2.webp', import.meta.url).href,
];

const imagesR2 = [
  new URL('../../assets/images/AerialYoga/image3.webp', import.meta.url).href,
  new URL('../../assets/images/AerialYoga/image4.webp', import.meta.url).href
];


// back to top


const scTimer = ref(0);
const scY = ref(0);

const handleScroll = () => {
  if (scTimer.value) return;
  scTimer.value = setTimeout(() => {
    scY.value = window.scrollY;
    clearTimeout(scTimer.value);
    scTimer.value = 0;
  }, 100);
};

const toTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});


// animation

import gsap from 'gsap';

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

let dotAnimation;


onMounted(() => {

  dotAnimation = gsap.to(".dot", {
    scale: 12,
    scrollTrigger: {
      trigger: '.dot',
      pin: true,
      scrub: true,
      // markers: true,
      start: "-200px 10%",
      end: "+=3500px",
    },
    ease: 'power2.out'
  });


    gsap.fromTo(
    ".fade-span",
    { opacity: .9 },
    { 
      opacity: 0,
      scrollTrigger: {
        trigger: ".fade-span",
        start: "-150px 50%",
        // markers: true,
        duration: 2
      }
    }
  );

  gsap.fromTo(
    ".prefaceContent", 
    { opacity: 0, y: 0 },
    { 
      opacity: .9,
      y: -50,
      scrollTrigger: {
        trigger: ".prefaceContent",
        start: "-50% 50%",
        // markers: true,
        toggleActions: "play pause resume reverse",
        duration: 5
      }
    }
  );

  gsap.fromTo(
    ".row1", 
    { opacity: 0, y: -150 },
    { 
      opacity: .9,
      y: -200,
      scrollTrigger: {
        trigger: ".row1",
        start: "-200% 50%",
        // markers: true,
        toggleActions: "play pause resume reverse",
        duration: 5
      }
    }
  );

  gsap.fromTo(
    ".row2", 
    { opacity: 0, y: -150 },
    { 
      opacity: .9,
      y: -200,
      scrollTrigger: {
        trigger: ".row2",
        start: "-200% 50%",
        // markers: true,
        toggleActions: "play pause resume reverse",
        duration: 5
      }
    }
  );

  
  gsap.fromTo(
    ".role4", 
    { opacity: 0, x: 100 },
    { 
      opacity: 1,
      x: 0,
      scrollTrigger: {
        trigger: ".role4",
        start: "-400px 50%",
        // markers: true,
        toggleActions: "play pause resume reverse",
        duration: 5
      }
    }
  );

  gsap.fromTo(
    ".imgRow1", 
    { opacity: 0, x: 200 },
    { 
      opacity: 1,
      x: 0,
      scrollTrigger: {
        trigger: ".imgRow1",
        start: "-150px 80%",
        // markers: true,
        toggleActions: "play pause resume reverse",
        duration: 10
      }
    }
  );


  gsap.fromTo(
    ".imgRow2", 
    { opacity: 0, x: -200 },
    { 
      opacity: 1,
      x: 0,
      scrollTrigger: {
        trigger: ".imgRow2",
        start: "-150px 80%",
        // markers: true,
        toggleActions: "play pause resume reverse",
        duration: 10
      }
    }
  );
  } 
)



// form

const clicking = ref(false);

const showForm = () => {
  clicking.value = !clicking.value;
  // console.log(`showform :  ${clicking.value}`);
}


</script>