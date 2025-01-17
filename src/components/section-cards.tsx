"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import { useEffect, useRef } from "react";
import card01 from "../../public/image-01.png";
import card02 from "../../public/image-02.png";
import card03 from "../../public/image-03.png";
import card04 from "../../public/image-04.png";
import card05 from "../../public/image-05.png";
import card06 from "../../public/image-06.png";
import iconMockupMain from "../../public/mockup-main.png";

gsap.registerPlugin(ScrollTrigger);

export function SectionCards() {
  const mockupMainRef = useRef(null);
  const titleRef = useRef(null);
  const sectionRef = useRef(null);
  const image1Ref = useRef(null);
  const image2Ref = useRef(null);
  const image3Ref = useRef(null);
  const image4Ref = useRef(null);
  const image5Ref = useRef(null);
  const image6Ref = useRef(null);

  function animateCards(images: null[], position: number) {
    gsap.fromTo(
      images,
      {
        opacity: 0,
        x: position,
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.5,
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "70% center",
        },
      }
    );
  }

  useEffect(() => {
    gsap.fromTo(
      mockupMainRef.current,
      {
        opacity: 0,
        scale: 0.5,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power4.out",
      }
    );
    gsap.fromTo(
      titleRef.current,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "center center",
        },
      }
    );

    const leftImages = [
      image1Ref.current,
      image2Ref.current,
      image3Ref.current,
    ];
    const rightImages = [
      image4Ref.current,
      image5Ref.current,
      image6Ref.current,
    ];

    animateCards(leftImages, 50);
    animateCards(rightImages, -50);
  });

  return (
    <section className="w-full pb-20" ref={sectionRef}>
      <Image
        src={iconMockupMain}
        alt="mockup Main"
        className="sticky z-10 top-56 mx-auto -mt-[32rem] mb-16 opacity-0"
        ref={mockupMainRef}
      />
      <h2
        className="text-center text-7xl font-semibold text-black mb-56"
        ref={titleRef}
      >
        Faça <span className="text-green-title-cards">você</span> mesmo de casa
      </h2>
      <div className="relative w-full max-area-cards mx-auto h-area-cards">
        <Image
          src={card01}
          alt="card 01"
          className="absolute top-8 left-44 opacity-0"
          ref={image1Ref}
        />
        <Image
          src={card03}
          alt="card 03"
          className="absolute -left-0 bottom-32 opacity-0"
          ref={image3Ref}
        />
        <Image
          src={card02}
          alt="card 02"
          className="absolute bottom-0 left-80 opacity-0"
          ref={image2Ref}
        />
        <Image
          src={card04}
          alt="card 04"
          className="absolute top-0 right-32 opacity-0"
          ref={image4Ref}
        />
        <Image
          src={card05}
          alt="card 05"
          className="absolute right-0 bottom-28 opacity-0"
          ref={image5Ref}
        />
        <Image
          src={card06}
          alt="card 06"
          className="absolute bottom-0 right-80 opacity-0"
          ref={image6Ref}
        />
      </div>
    </section>
  );
}
