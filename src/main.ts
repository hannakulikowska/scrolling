import './style.scss';

declare const gsap: any;
declare const ScrollTrigger: any;
declare const ScrollSmoother: any;
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

document.addEventListener('DOMContentLoaded', () => {
  if (ScrollTrigger.isTouch !== 1) {
    ScrollSmoother.create({
      wrapper: '.wrapper',
      content: '.content',
      smooth: 1.5,
      effects: true,
    });

    gsap.fromTo(
      '.header',
      { opacity: 1 },
      {
        opacity: 0,
        scrollTrigger: {
          trigger: '.header',
          start: 'center',
          end: '820',

          scrub: true,
        },
      }
    );

    let itemsL = gsap.utils.toArray('.gallery__left .gallery__item') as HTMLElement[];

    itemsL.forEach((item: HTMLElement) => {
      gsap.fromTo(
        item,
        {
          opacity: 0,
          x: -200,
        },
        {
          opacity: 1,
          x: 0,
          scrollTrigger: {
            trigger: item,
            start: '-850',
            end: '-100',
            scrub: true,
          },
        }
      );
    });

    let itemsR = gsap.utils.toArray('.gallery__right .gallery__item') as HTMLElement[];

    itemsR.forEach((item: HTMLElement) => {
      gsap.fromTo(
        item,
        {
          opacity: 0,
          x: 200,
        },
        {
          opacity: 1,
          x: 0,
          scrollTrigger: {
            trigger: item,
            start: '-750',
            end: '-200',
            scrub: true,
          },
        }
      );
    });
  }
});
