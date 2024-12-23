import { motion } from "framer-motion";
import { styles } from "../styles";

const Hero = () => {
  return (
    <section className="relative w-full  mx-auto height-adjust overflow-hidden">
      <div
        className={`${styles.paddingX} small-adjust absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start md:justify-between gap-2 xs:gap-10`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#60d4dc]" />

          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white hero-head`}>
            Interested in{" "}
            <span className="text-[#60d4dc]">Forming a Company in Dubai?</span>
          </h1>
          <p
            className={`${styles.heroSubText} mt-6 text-white-100 hero-subtext`}
          >
            Check our solutions for mainland.
            <br className="sm:block hidden" /> Explore our packages in the UAE
            for foreign and local companies
          </p>
        </div>
        <div className="w-[50%] object-contain lg:block hidden">
          <picture>
            <source
              srcSet="/hero.avif"
              media="(min-width: 1200px)"
              width="100%"
              height="600px"
            />
            <source
              srcSet="/hero.avif"
              media="(min-width: 768px)"
              width="100%"
              height="550px"
            />
            <source
              srcSet="/hero.avif"
              media="(max-width: 767px)"
              width="100%"
              height="450px"
            />
            <img
              src="/hero.avif"
              alt="The leading link"
              fetchpriority="high"
              lazy="true"
              decoding="async"
              className="responsiveImage"
            />
          </picture>
        </div>
      </div>

      <div className="absolute md:bottom-0 mouse-container w-full flex justify-center items-center ">
        <a href="#contact">
          <div className="height-mouse rounded-3xl border-2 sm:border-4  border-secondary flex justify-center items-start p-1">
            <motion.div
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-[4px] h-[4px] sm:w-[7px] sm:h-[7px]  rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
