"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

const industries = [
  { key: "Automotive", icon: "/img/icon/automotive.webp" },
  { key: "Aerospace", icon: "/img/icon/aerospace.webp" },
  { key: "Chemical", icon: "/img/icon/chemical.webp" },
  { key: "Construction", icon: "/img/icon/construction.webp" },
  { key: "Cosmetics", icon: "/img/icon/cosmetic.webp" },
  { key: "Energy", icon: "/img/icon/energy.webp" },
  { key: "Electronics", icon: "/img/icon/electronics.webp" },
  { key: "Food and Beverage", icon: "/img/icon/fnb.webp" },
  { key: "Industrial", icon: "/img/icon/industrial.webp" },
  { key: "Plastics and Rubber", icon: "/img/icon/plastics.webp" },
  { key: "Retail", icon: "/img/icon/retail.webp" },
  { key: "Semiconductor", icon: "/img/icon/semicun.webp" },
];

export default function FeatureSection() {
  const t = useTranslations("aboutPage.featureSection");

  return (
    <>
      <section className="mb-36 lg:max-w-7xl w-11/12 mx-auto">
        <div className="flex flex-col justify-center items-center">
          <h1
            className="text-primary text-2xl lg:text-5xl mb-6 lg:w-3/4 leading-tight text-center font-manrope [&>span]:text-secondary"
            dangerouslySetInnerHTML={{
              __html: t.raw("title"),
            }}
          ></h1>
          <p className="text-primary mb-20 font-manrope lg:w-1/2 text-center">
            {t("subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-10 lg:gap-x-10 lg:gap-y-16 justify-items-center">
          {industries.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-4 hover:scale-105 transition-transform transition-300"
            >
              <div className="flex items-center justify-center">
                <Image
                  src={item.icon}
                  alt={item.key}
                  width={72}
                  height={72}
                  className="object-contain bg-[#CBFFE3] p-3.5 rounded-xl"
                />
              </div>
              <p className="lg:mt-2 mt-1 text-lg font-medium text-primary font-manrope text-center">
                {t(`industries.${item.key}`)}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
