"use client";

import Image from "next/image";
import { GridContainer } from "./grid";

import gsap from "gsap";
import { useEffect, useRef } from "react";
import iconFile from "../../public/icon-file.svg";
import iconHand02 from "../../public/icon-hand-02.svg";
import iconHand from "../../public/icon-hand.svg";
import iconMockup from "../../public/mockup.svg";

export function SectionHero() {
  const textHeroRef = useRef(null);
  const mockupLeftRef = useRef(null);
  const mockupRightRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      textHeroRef.current,
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power4.out",
      }
    );

    gsap.fromTo(
      mockupLeftRef.current,
      {
        rotate: 0,
      },
      {
        rotate: -10,
        duration: 1,
      }
    );
    gsap.fromTo(
      mockupRightRef.current,
      {
        rotate: 0,
      },
      {
        rotate: 10,
        duration: 1,
      }
    );
  }, []);

  return (
    <section
      className="relative w-full h-section-hero bg-hero bg-no-repeat bg-top
    bg-green-primary border-t border-t-green-border pt-16 overflow-hidden"
    >
      <GridContainer className="flex flex-col items-center">
        <div
          className="w-full max-w-text-hero text-center opacity-0"
          ref={textHeroRef}
        >
          <h3 className="text-xl font-medium text-green-active mb-4">
            Novo curso focado na prática
          </h3>
          <h3 className="text-white text-7xl/normal font-semibold mb-2">
            Destrave suas habilidades
          </h3>
          <div className="flex items-center justify-center gap-10">
            <button className="flex items-center gap-4">
              <Image src={iconFile} alt="icone file" />
              <span className="text-white font-medium">
                Assinar listda de espera
              </span>
            </button>
            <button className="py-4 px-5 bg-green-btn rounded-full text-green-primary font-bold">
              Começar agora
            </button>
          </div>
        </div>
        <div className="relative w-full max-w-area-icon h-28 mt-4">
          <Image
            src={iconHand}
            alt="icone hand"
            className="absolute left-0 bottom-0"
          />
          <Image
            src={iconHand02}
            alt="icone hand"
            className="absolute top-0 right-0"
          />
        </div>
        <div className="absolute -bottom-64 w-full max-w-area-mockups flex justify-between">
          <Image
            src={iconMockup}
            alt="mockup"
            className="relative top-[1.1rem] left-[3.3rem]"
            ref={mockupLeftRef}
          />

          <Image
            src={iconMockup}
            alt="mockup"
            className="relative top-[1.1rem] right-[3.3rem]"
            ref={mockupRightRef}
          />
        </div>
      </GridContainer>
    </section>
  );
}
