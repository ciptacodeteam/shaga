"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { motion } from "framer-motion";

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
    <section className="mb-36 lg:max-w-7xl w-11/12 mx-auto">
      <div className="flex flex-col justify-center items-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-primary text-2xl lg:text-5xl mb-6 lg:w-3/4 leading-tight text-center font-manrope [&>span]:text-secondary"
          dangerouslySetInnerHTML={{
            __html: t.raw("title"),
          }}
        ></motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-primary mb-20 font-manrope lg:w-1/2 text-center"
        >
          {t("subtitle")}
        </motion.p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-10 lg:gap-x-10 lg:gap-y-16 justify-items-center">
        {industries.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: index * 0.05, duration: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.08 }}
            className="flex flex-col items-center gap-4 transition-all duration-300"
          >
            <motion.div
              whileHover={{
                boxShadow: "0 0 20px rgba(0, 255, 128, 0.3)",
              }}
              className="flex items-center justify-center"
            >
              <Image
                src={item.icon}
                alt={item.key}
                width={72}
                height={72}
                className="object-contain bg-[#CBFFE3] p-3.5 rounded-xl"
              />
            </motion.div>
            <p className="lg:mt-2 mt-1 text-lg font-medium text-primary font-manrope text-center">
              {t(`industries.${item.key}`)}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
