"use client";
import { useInView } from "motion/react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useRef } from "react";
import { motion } from "framer-motion";

export default function PartnerClient() {
  const t = useTranslations();

  const partners = [
    {
      id: 1,
      name: "liqui",
      logo: "/img/logo/liquimoly.webp",
    },
    {
      id: 2,
      name: "kirana",
      logo: "/img/logo/kirana.webp",
    },
    {
      id: 3,
      name: "cocacola",
      logo: "/img/logo/cocacola.webp",
    },
    {
      id: 4,
      name: "hudaya",
      logo: "/img/logo/hudaya.webp",
    },
    {
      id: 5,
      name: "giant",
      logo: "/img/logo/gianttrasporter.png",
    },
    {
      id: 6,
      name: "wika",
      logo: "/img/logo/wika.webp",
    },
    {
      id: 7,
      name: "kawanlama",
      logo: "/img/logo/kawanlama.webp",
    },
    {
      id: 8,
      name: "pixco",
      logo: "/img/logo/pixco.png",
    },
    {
      id: 9,
      name: "yongsun",
      logo: "/img/logo/youngsun.webp",
    },
    {
      id: 10,
      name: "alltech",
      logo: "/img/logo/alltech1.webp",
    },
    {
      id: 11,
      name: "sti",
      logo: "/img/logo/sti1.png",
    },
    {
      id: 12,
      name: "realstrong",
      logo: "/img/logo/realstrong.png",
    },
    {
      id: 13,
      name: "samudera",
      logo: "/img/logo/samudera.webp",
    },
    {
      id: 14,
      name: "adhi",
      logo: "/img/logo/adhi.webp",
    },
    {
      id: 15,
      name: "camce",
      logo: "/img/logo/camce.webp",
    },
    {
      id: 16,
      name: "camc",
      logo: "/img/logo/camc.webp",
    },
    {
      id: 17,
      name: "sinohydro",
      logo: "/img/logo/sinohydro.webp",
    },
    {
      id: 18,
      name: "meulaboh",
      logo: "/img/logo/meulaboh.webp",
    },
    {
      id: 19,
      name: "mru",
      logo: "/img/logo/mru.webp",
    },
    {
      id: 20,
      name: "imiP",
      logo: "/img/logo/imiP.webp",
    },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <>
      <section ref={ref}>
        <div className="max-w-7xl mx-auto mb-24 md:mb-42 px-4 md:px-8 lg:px-6 xl:px-0">
          <div className="flex flex-col justify-center items-center text-center">
            <motion.div
              initial={{ opacity: 0, x: -4 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -4 }}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-2 mb-3"
            >
              <span className="relative flex size-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-75"></span>
                <span className="relative inline-flex size-3 rounded-full bg-secondary"></span>
              </span>
              <p className="text-sm font-medium text-primary uppercase font-manrope">
                {t("partnerClient.heading")}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8 md:mb-16"
            >
              <p
                className="font-manrope text-2xl sm:text-3xl lg:text-4xl xl:text-5xl leading-relaxed lg:leading-tight text-primary mx-auto md:max-w-3/4 [&>span]:text-secondary capitalize"
                dangerouslySetInnerHTML={{
                  __html: t.raw("partnerClient.title"),
                }}
              ></p>
            </motion.div>
          </div>

          <div>
            <div className="mx-auto grid grid-cols-2 md:flex flex-wrap justify-center gap-x-8 sm:gap-x-12 gap-y-12 items-center mt-6 md:mt-10 px-4 md:px-0 md:gap-y-16">
              {partners.map((partner) => (
                <motion.div
                  key={partner.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }
                  }
                  transition={{ duration: 0.6, delay: partner.id * 0.2 }}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center justify-center p-2 md:p-2"
                >
                  <Image
                    alt={partner.name}
                    src={partner.logo}
                    priority
                    width={180}
                    height={180}
                    className="max-h-14 md:max-h-16 max-w-full object-contain"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
