import React from 'react';
import { motion } from 'framer-motion';
import BrandedCards from '@/components/BrandedCards';

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
          box-shadow: 1904px 906px #FFF, 849px 1339px #FFF, 1503px 127px #FFF, 1257px 1018px #FFF, 1133px 93px #FFF, 1146px 664px #FFF, 151px 1136px #FFF, 1146px 1354px #FFF, 1265px 432px #FFF, 508px 1283px #FFF, 71px 105px #FFF, 34px 1319px #FFF, 1072px 137px #FFF, 1238px 1393px #FFF, 935px 1078px #FFF, 1016px 119px #FFF, 1398px 109px #FFF, 344px 1060px #FFF, 1876px 1118px #FFF, 600px 376px #FFF, 1032px 34px #FFF, 1416px 86px #FFF, 1378px 1137px #FFF, 1114px 439px #FFF, 1809px 427px #FFF, 1494px 914px #FFF, 1308px 505px #FFF, 1235px 1218px #FFF, 1836px 774px #FFF, 1162px 934px #FFF, 429px 1433px #FFF, 1083px 45px #FFF, 132px 1421px #FFF, 1199px 112px #FFF, 400px 735px #FFF, 1184px 695px #FFF, 1813px 441px #FFF, 343px 1434px #FFF, 110px 1003px #FFF, 1536px 393px #FFF, 397px 446px #FFF, 1837px 1380px #FFF, 1279px 1192px #FFF, 1297px 803px #FFF, 1324px 1357px #FFF, 219px 926px #FFF, 1693px 1191px #FFF, 1630px 103px #FFF, 1819px 583px #FFF;
          animation: animStar 50s linear infinite;
        }

        #stars2 {
          width: 2px;
          height: 2px;
          background: transparent;
          box-shadow: 1841px 117px #FFF, 182px 738px #FFF, 1037px 590px #FFF, 148px 1325px #FFF, 1022px 1029px #FFF, 1109px 1326px #FFF, 1210px 73px #FFF, 1530px 1113px #FFF, 888px 1391px #FFF, 1319px 1238px #FFF, 1022px 1432px #FFF, 126px 1222px #FFF, 115px 337px #FFF, 1888px 58px #FFF, 689px 1007px #FFF, 479px 802px #FFF, 1205px 1114px #FFF, 269px 1152px #FFF, 1341px 839px #FFF, 313px 495px #FFF, 1009px 106px #FFF, 1445px 1002px #FFF, 103px 1217px #FFF, 119px 132px #FFF, 1481px 1332px #FFF, 646px 1093px #FFF, 1619px 1234px #FFF, 1735px 972px #FFF, 1095px 1394px #FFF, 335px 233px #FFF, 1606px 410px #FFF, 584px 1419px #FFF, 1802px 572px #FFF, 1492px 953px #FFF, 1282px 1224px #FFF, 1050px 1009px #FFF, 1459px 1422px #FFF, 1274px 287px #FFF, 1091px 956px #FFF, 747px 544px #FFF, 1804px 914px #FFF, 582px 28px #FFF, 303px 1133px #FFF, 1188px 633px #FFF, 731px 1102px #FFF, 50px 520px #FFF, 1200px 486px #FFF, 1551px 542px #FFF;
          animation: animStar 100s linear infinite;
        }

        #stars3 {
          width: 3px;
          height: 3px;
          background: transparent;
          box-shadow: 1018px 1297px #FFF, 110px 133px #FFF, 1208px 873px #FFF, 317px 892px #FFF, 1788px 1090px #FFF, 1618px 1324px #FFF, 354px 1136px #FFF, 1732px 304px #FFF, 1194px 1079px #FFF, 1826px 742px #FFF, 1035px 395px #FFF, 1193px 803px #FFF, 502px 1383px #FFF, 1438px 1092px #FFF, 1599px 1134px #FFF, 1834px 134px #FFF, 120px 472px #FFF, 1530px 303px #FFF, 1195px 690px #FFF, 1884px 96px #FFF, 1025px 338px #FFF, 1381px 1406px #FFF, 1673px 223px #FFF, 1526px 819px #FFF, 1870px 1029px #FFF, 329px 1105px #FFF, 1779px 618px #FFF, 1539px 1027px #FFF, 1411px 133px #FFF, 744px 113px #FFF, 1594px 58px #FFF, 137px 227px #FFF, 532px 635px #FFF, 1830px 1432px #FFF, 144px 1374px #FFF, 1242px 64px #FFF, 1409px 1012px #FFF, 93px 512px #FFF, 1251px 905px #FFF, 1801px 1014px #FFF, 622px 1027px #FFF, 100px 1335px #FFF, 381px 906px #FFF, 1073px 839px #FFF, 536px 998px #FFF, 1559px 515px #FFF;
          animation: animStar 150s linear infinite;
        }

        /* Shooting Stars */
        #shooting-star-1 {
          position: absolute;
          top: 20%;
          left: -100px;
          width: 2px;
          height: 2px;
          background: linear-gradient(45deg, #FFF, #C0C0C0);
          border-radius: 50%;
          box-shadow: 0 0 6px 2px rgba(255, 255, 255, 0.8);
          animation: shootingStar1 8s ease-in-out infinite;
        }

        #shooting-star-1::before {
          content: '';
          position: absolute;
          top: 0;
          left: -60px;
          width: 60px;
          height: 1px;
          background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.8), transparent);
          transform: rotate(-45deg);
          transform-origin: right center;
        }

        #shooting-star-2 {
          position: absolute;
          top: 60%;
          left: -100px;
          width: 2px;
          height: 2px;
          background: linear-gradient(45deg, #FFF, #C0C0C0);
          border-radius: 50%;
          box-shadow: 0 0 6px 2px rgba(255, 255, 255, 0.8);
          animation: shootingStar2 12s ease-in-out infinite;
          animation-delay: 4s;
        }

        #shooting-star-2::before {
          content: '';
          position: absolute;
          top: 0;
          left: -80px;
          width: 80px;
          height: 1px;
          background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.8), transparent);
          transform: rotate(-30deg);
          transform-origin: right center;
        }

        #shooting-star-3 {
          position: absolute;
          top: 40%;
          left: -100px;
          width: 2px;
          height: 2px;
          background: linear-gradient(45deg, #FFF, #C0C0C0);
          border-radius: 50%;
          box-shadow: 0 0 6px 2px rgba(255, 255, 255, 0.8);
          animation: shootingStar3 15s ease-in-out infinite;
          animation-delay: 8s;
        }

        #shooting-star-3::before {
          content: '';
          position: absolute;
          top: 0;
          left: -70px;
          width: 70px;
          height: 1px;
          background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.8), transparent);
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
            background: 'linear-gradient(135deg, #E5E5E5 0%, #C0C0C0 25%, #F5F5F5 50%, #C0C0C0 75%, #E5E5E5 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            textShadow: '0 4px 8px rgba(192, 192, 192, 0.3), 0 8px 16px rgba(0, 0, 0, 0.2)',
            filter: 'drop-shadow(0 4px 8px rgba(192, 192, 192, 0.4))',
            transform: 'perspective(1000px) rotateX(5deg)',
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
          Virtual Visa & Mastercard • Worldwide Spending Freedom • 200+ Countries
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
          Be Your Own Bank — <span className="font-medium text-silver">With Principles.</span>
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
            Global Access. <span className="text-silver">Unmatched Prestige.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
