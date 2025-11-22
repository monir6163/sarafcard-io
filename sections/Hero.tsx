import BrandedCards from "@/components/BrandedCards";
import { motion } from "framer-motion";
import React from "react";

// New Starfield component for the premium galaxy background
const Starfield = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <div id="stars" />
      <div id="stars2" />
      <div id="stars3" />
      <div id="shooting-star-1" />
      <div id="shooting-star-2" />
      <div id="shooting-star-3" />
      <div id="shooting-star-1" />
      <div id="shooting-star-2" />
      <div id="shooting-star-3" />
      <style jsx>{`
        @function random_range($min, $max) {
          $rand: random();
          $random_range: $min + floor($rand * (($max - $min) + 1));
          @return $random_range;
        }

        #stars {
          width: 1px;
          height: 1px;
          background: transparent;
          box-shadow: 1904px 906px #fff, 849px 1339px #fff, 1503px 127px #fff,
            1257px 1018px #fff, 1133px 93px #fff, 1146px 664px #fff,
            151px 1136px #fff, 1146px 1354px #fff, 1265px 432px #fff,
            508px 1283px #fff, 71px 105px #fff, 34px 1319px #fff,
            1072px 137px #fff, 1238px 1393px #fff, 935px 1078px #fff,
            1016px 119px #fff, 1398px 109px #fff, 344px 1060px #fff,
            1876px 1118px #fff, 600px 376px #fff, 1032px 34px #fff,
            1416px 86px #fff, 1378px 1137px #fff, 1114px 439px #fff,
            1809px 427px #fff, 1494px 914px #fff, 1308px 505px #fff,
            1235px 1218px #fff, 1836px 774px #fff, 1162px 934px #fff,
            429px 1433px #fff, 1083px 45px #fff, 132px 1421px #fff,
            1199px 112px #fff, 400px 735px #fff, 1184px 695px #fff,
            1813px 441px #fff, 343px 1434px #fff, 110px 1003px #fff,
            1536px 393px #fff, 397px 446px #fff, 1837px 1380px #fff,
            1279px 1192px #fff, 1297px 803px #fff, 1324px 1357px #fff,
            219px 926px #fff, 1693px 1191px #fff, 1630px 103px #fff,
            1819px 583px #fff;
          animation: animStar 50s linear infinite;
        }

        #stars2 {
          width: 2px;
          height: 2px;
          background: transparent;
          box-shadow: 1841px 117px #fff, 182px 738px #fff, 1037px 590px #fff,
            148px 1325px #fff, 1022px 1029px #fff, 1109px 1326px #fff,
            1210px 73px #fff, 1530px 1113px #fff, 888px 1391px #fff,
            1319px 1238px #fff, 1022px 1432px #fff, 126px 1222px #fff,
            115px 337px #fff, 1888px 58px #fff, 689px 1007px #fff,
            479px 802px #fff, 1205px 1114px #fff, 269px 1152px #fff,
            1341px 839px #fff, 313px 495px #fff, 1009px 106px #fff,
            1445px 1002px #fff, 103px 1217px #fff, 119px 132px #fff,
            1481px 1332px #fff, 646px 1093px #fff, 1619px 1234px #fff,
            1735px 972px #fff, 1095px 1394px #fff, 335px 233px #fff,
            1606px 410px #fff, 584px 1419px #fff, 1802px 572px #fff,
            1492px 953px #fff, 1282px 1224px #fff, 1050px 1009px #fff,
            1459px 1422px #fff, 1274px 287px #fff, 1091px 956px #fff,
            747px 544px #fff, 1804px 914px #fff, 582px 28px #fff,
            303px 1133px #fff, 1188px 633px #fff, 731px 1102px #fff,
            50px 520px #fff, 1200px 486px #fff, 1551px 542px #fff;
          animation: animStar 100s linear infinite;
        }

        #stars3 {
          width: 3px;
          height: 3px;
          background: transparent;
          box-shadow: 1018px 1297px #fff, 110px 133px #fff, 1208px 873px #fff,
            317px 892px #fff, 1788px 1090px #fff, 1618px 1324px #fff,
            354px 1136px #fff, 1732px 304px #fff, 1194px 1079px #fff,
            1826px 742px #fff, 1035px 395px #fff, 1193px 803px #fff,
            502px 1383px #fff, 1438px 1092px #fff, 1599px 1134px #fff,
            1834px 134px #fff, 120px 472px #fff, 1530px 303px #fff,
            1195px 690px #fff, 1884px 96px #fff, 1025px 338px #fff,
            1381px 1406px #fff, 1673px 223px #fff, 1526px 819px #fff,
            1870px 1029px #fff, 329px 1105px #fff, 1779px 618px #fff,
            1539px 1027px #fff, 1411px 133px #fff, 744px 113px #fff,
            1594px 58px #fff, 137px 227px #fff, 532px 635px #fff,
            1830px 1432px #fff, 144px 1374px #fff, 1242px 64px #fff,
            1409px 1012px #fff, 93px 512px #fff, 1251px 905px #fff,
            1801px 1014px #fff, 622px 1027px #fff, 100px 1335px #fff,
            381px 906px #fff, 1073px 839px #fff, 536px 998px #fff,
            1559px 515px #fff;
          animation: animStar 150s linear infinite;
        }

        /* Shooting Stars */
        #shooting-star-1 {
          position: absolute;
          top: 20%;
          left: -100px;
          width: 2px;
          height: 2px;
          background: linear-gradient(45deg, #fff, #c0c0c0);
          border-radius: 50%;
          box-shadow: 0 0 6px 2px rgba(255, 255, 255, 0.8);
          animation: shootingStar1 8s ease-in-out infinite;
        }

        #shooting-star-1::before {
          content: "";
          position: absolute;
          top: 0;
          left: -60px;
          width: 60px;
          height: 1px;
          background: linear-gradient(
            to right,
            transparent,
            rgba(255, 255, 255, 0.8),
            transparent
          );
          transform: rotate(-45deg);
          transform-origin: right center;
        }

        #shooting-star-2 {
          position: absolute;
          top: 60%;
          left: -100px;
          width: 2px;
          height: 2px;
          background: linear-gradient(45deg, #fff, #c0c0c0);
          border-radius: 50%;
          box-shadow: 0 0 6px 2px rgba(255, 255, 255, 0.8);
          animation: shootingStar2 12s ease-in-out infinite;
          animation-delay: 4s;
        }

        #shooting-star-2::before {
          content: "";
          position: absolute;
          top: 0;
          left: -80px;
          width: 80px;
          height: 1px;
          background: linear-gradient(
            to right,
            transparent,
            rgba(255, 255, 255, 0.8),
            transparent
          );
          transform: rotate(-30deg);
          transform-origin: right center;
        }

        #shooting-star-3 {
          position: absolute;
          top: 40%;
          left: -100px;
          width: 2px;
          height: 2px;
          background: linear-gradient(45deg, #fff, #c0c0c0);
          border-radius: 50%;
          box-shadow: 0 0 6px 2px rgba(255, 255, 255, 0.8);
          animation: shootingStar3 15s ease-in-out infinite;
          animation-delay: 8s;
        }

        #shooting-star-3::before {
          content: "";
          position: absolute;
          top: 0;
          left: -70px;
          width: 70px;
          height: 1px;
          background: linear-gradient(
            to right,
            transparent,
            rgba(255, 255, 255, 0.8),
            transparent
          );
          transform: rotate(-60deg);
          transform-origin: right center;
        }

        @keyframes animStar {
          from {
            transform: translateY(0px);
          }
          to {
            transform: translateY(-2000px);
          }
        }

        @keyframes shootingStar1 {
          0% {
            transform: translateX(-100px) translateY(0px);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          20% {
            transform: translateX(calc(100vw + 100px)) translateY(-200px);
            opacity: 1;
          }
          21% {
            opacity: 0;
          }
          100% {
            transform: translateX(calc(100vw + 100px)) translateY(-200px);
            opacity: 0;
          }
        }

        @keyframes shootingStar2 {
          0% {
            transform: translateX(-100px) translateY(0px);
            opacity: 0;
          }
          15% {
            opacity: 1;
          }
          25% {
            transform: translateX(calc(100vw + 100px)) translateY(-150px);
            opacity: 1;
          }
          26% {
            opacity: 0;
          }
          100% {
            transform: translateX(calc(100vw + 100px)) translateY(-150px);
            opacity: 0;
          }
        }

        @keyframes shootingStar3 {
          0% {
            transform: translateX(-100px) translateY(0px);
            opacity: 0;
          }
          12% {
            opacity: 1;
          }
          18% {
            transform: translateX(calc(100vw + 100px)) translateY(-300px);
            opacity: 1;
          }
          19% {
            opacity: 0;
          }
          100% {
            transform: translateX(calc(100vw + 100px)) translateY(-300px);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

const Hero: React.FC = () => {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[50vh] md:min-h-[70vh] px-4 sm:px-6 lg:px-8 pt-36 sm:pt-40 lg:pt-44 pb-4 sm:pb-8 text-center text-white bg-black overflow-hidden">
      {/* Premium Starfield Background */}
      <Starfield />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center max-w-7xl mx-auto w-full">
        {/* Animated SarafCard Title - Hidden on mobile, visible on desktop */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden md:block heading-xl mb-2"
          style={{
            background:
              "linear-gradient(135deg, #E5E5E5 0%, #C0C0C0 25%, #F5F5F5 50%, #C0C0C0 75%, #E5E5E5 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            textShadow:
              "0 4px 8px rgba(192, 192, 192, 0.3), 0 8px 16px rgba(0, 0, 0, 0.2)",
            filter: "drop-shadow(0 4px 8px rgba(192, 192, 192, 0.4))",
            transform: "perspective(1000px) rotateX(5deg)",
          }}
        >
          SarafCard
        </motion.h1>

        {/* Animated "200+ Countries" text - Mobile Responsive */}
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-0.5 sm:mt-2 text-body font-medium text-gray-400"
        >
          Virtual Visa & Mastercard • Worldwide Spending Freedom • 200+
          Countries
        </motion.p>

        {/* Animated Premium Badge - Mobile Responsive */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-1 sm:mt-3"
        >
          <span className="px-3 sm:px-4 py-2 text-caption text-white border border-white/20 rounded-full bg-white/10 backdrop-blur-sm">
            ● Premium Banking Experience
          </span>
        </motion.div>

        {/* Animated Main Slogan - Mobile Responsive */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-1 sm:mt-4 heading-lg font-light tracking-wide leading-tight px-2"
        >
          Be Your Own Bank —{" "}
          <span className="font-medium text-silver">With Principles.</span>
        </motion.h2>

        {/* Branded VISA and MasterCard Component - Mobile Responsive */}
        <div className="mt-2 sm:mt-6 lg:mt-8 w-full">
          <BrandedCards />
        </div>

        {/* Elegant tagline - Mobile Responsive */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.0 }}
          className="mt-1 sm:mt-6 text-center px-4"
        >
          <p className="text-body text-gray-400">
            Global Access.{" "}
            <span className="text-silver">Unmatched Prestige.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
