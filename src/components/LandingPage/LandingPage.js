import React from "react";
import {
  Homepage1_main,
  Homepage1_sub,
  Homepage1_content,
  Homepage1_image,
  Homepage1_heading,
  Homepage1_phone,
  Homepage1_description,
  Button1,
  Button2,
  Image,
  Cloud,
} from "./LandingPage.element";
import imagezeta from "../../images/zetamonk_front.svg";
import { motion } from "framer-motion";
import {Link} from 'react-router-dom';
function Homepage1() {
  return (
    <Homepage1_main>
      <Homepage1_sub>
        <Homepage1_image>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 625.66 586.28"
          >
            <defs>
              <style
                dangerouslySetInnerHTML={{
                  __html:
                    ".cls-1{fill:#dbeaff;}.cls-1,.cls-2{stroke:#000;stroke-width:0.05px;}.cls-1,.cls-10,.cls-11,.cls-12,.cls-13,.cls-14,.cls-15,.cls-16,.cls-17,.cls-18,.cls-19,.cls-2,.cls-20,.cls-3,.cls-4,.cls-5,.cls-6,.cls-7,.cls-8,.cls-9{stroke-miterlimit:10;}.cls-2,.cls-40{fill:#172182;}.cls-10,.cls-12,.cls-13,.cls-14,.cls-15,.cls-16,.cls-17,.cls-18,.cls-19,.cls-20,.cls-23,.cls-3,.cls-4,.cls-5,.cls-6,.cls-8{fill:none;}.cls-3,.cls-8,.cls-9{stroke:#e72e9b;}.cls-3{stroke-width:4px;}.cls-10,.cls-11,.cls-4{stroke:#b7cff5;}.cls-4,.cls-5{stroke-width:3px;}.cls-5,.cls-6,.cls-7{stroke:#3a68ff;}.cls-10,.cls-6,.cls-7,.cls-8{stroke-width:2px;}.cls-7{fill:#3a68ff;}.cls-35,.cls-9{fill:#e72e9b;}.cls-11{fill:#b7cff5;}.cls-12{stroke:#2442bc;}.cls-13{stroke:#fff;}.cls-14{stroke-width:29px;stroke:url(#linear-gradient);}.cls-15{stroke-width:16px;stroke:url(#linear-gradient-2);}.cls-16{stroke-width:13px;stroke:url(#linear-gradient-3);}.cls-17{stroke-width:25px;stroke:url(#linear-gradient-4);}.cls-18{stroke-width:30px;stroke:url(#linear-gradient-5);}.cls-19{stroke-width:43px;stroke:url(#linear-gradient-6);}.cls-20{stroke-width:40px;stroke:url(#linear-gradient-7);}.cls-21{fill:#ff0094;}.cls-22{fill:#73aaff;}.cls-24{fill:#fff;}.cls-25{fill:#192c87;}.cls-26{fill:#edeef6;}.cls-27{fill:#94aad7;}.cls-28{fill:#a3b5db;}.cls-29{fill:#e7f3ff;}.cls-30{fill:#7fc0ff;}.cls-31{fill:#d1e7fb;}.cls-32{fill:url(#radial-gradient);}.cls-33{fill:#bad1f6;}.cls-34{fill:#e2f0ff;}.cls-36{fill:#c72c94;}.cls-37{fill:#578cce;}.cls-38{fill:#95bde5;}.cls-39{fill:#356aba;}.cls-41{fill:#2848bd;}.cls-42{fill:#c2dbff;}.cls-43{fill:#91beff;}.cls-44{fill:#cae0ff;}.cls-45{fill:#f8fbff;}.cls-46{fill:#598ed0;}.cls-47{fill:url(#linear-gradient-8);}",
                }}
              />
              <linearGradient
                id="linear-gradient"
                x1="-329.43"
                y1="2836.27"
                x2="-300.43"
                y2="2836.27"
                gradientTransform="matrix(0, 1, 1, 0, -2665.75, 551.96)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset={0} stopColor="#f0f" />
                <stop offset="0.06" stopColor="#d0f" />
                <stop offset="0.16" stopColor="#a0f" />
                <stop offset="0.26" stopColor="#7c00ff" />
                <stop offset="0.37" stopColor="#5600ff" />
                <stop offset="0.48" stopColor="#3700ff" />
                <stop offset="0.59" stopColor="#1f00ff" />
                <stop offset="0.71" stopColor="#0d00ff" />
                <stop offset="0.84" stopColor="#0300ff" />
                <stop offset={1} stopColor="blue" />
              </linearGradient>
              <linearGradient
                id="linear-gradient-2"
                x1="-323.71"
                y1="2853.32"
                x2="-307.71"
                y2="2853.32"
                xlinkHref="#linear-gradient"
              />
              <linearGradient
                id="linear-gradient-3"
                x1="-324.54"
                y1="2870.32"
                x2="-311.54"
                y2="2870.32"
                xlinkHref="#linear-gradient"
              />
              <linearGradient
                id="linear-gradient-4"
                x1="-341.1"
                y1="2881.63"
                x2="-316.1"
                y2="2881.63"
                xlinkHref="#linear-gradient"
              />
              <linearGradient
                id="linear-gradient-5"
                x1="-354.6"
                y1="2900.63"
                x2="-324.6"
                y2="2900.63"
                xlinkHref="#linear-gradient"
              />
              <linearGradient
                id="linear-gradient-6"
                x1="-373.1"
                y1="2917.63"
                x2="-330.1"
                y2="2917.63"
                xlinkHref="#linear-gradient"
              />
              <linearGradient
                id="linear-gradient-7"
                x1="-374.6"
                y1="2933.63"
                x2="-334.6"
                y2="2933.63"
                xlinkHref="#linear-gradient"
              />
              <radialGradient
                id="radial-gradient"
                cx="374.35"
                cy="270.86"
                r="10.68"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.06" stopColor="#f2f2f2" />
                <stop offset="0.27" stopColor="#e5ecf5" />
                <stop offset="0.58" stopColor="#d2e2fb" />
                <stop offset="0.68" stopColor="#c6ddfe" />
                <stop offset="0.77" stopColor="#c2dbff" />
              </radialGradient>
              <linearGradient
                id="linear-gradient-8"
                x1="311.79"
                y1="961.88"
                x2="312.16"
                y2="961.88"
                gradientTransform="matrix(1, 0, 0, -1, 0, 1227.16)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset={0} stopColor="#c2dbff" />
                <stop offset="0.27" stopColor="#c8defd" />
                <stop offset="0.64" stopColor="#dae6f9" />
                <stop offset={1} stopColor="#f2f2f2" />
              </linearGradient>
            </defs>
            <g id="Layer_2" data-name="Layer 2">
              <g id="Layer_1-2" data-name="Layer 1">
                <motion.path
                  initial={{ y: -30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 3 }}
                  className="cls-1"
                  d="M133.13,128.24l227-81s5-5,10,7V196.63s3,7.61-13,13.61l-217,79s-4.24,5-14.12-7l1.65-137.42S125.13,139.24,133.13,128.24Z"
                />
                <motion.polygon
                  initial={{ y: -30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 3 }}
                  className="cls-2"
                  points="135.68 138.05 360.68 55.05 360.68 200.08 135.68 281.43 135.68 138.05"
                />
                <motion.path
                  initial={{ y: -30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 3 }}
                  className="cls-3"
                  d="M319.46,151.46c10.1-6.63,12.83-19.88,7-29-5-7.8-15.43-11.32-25-7.92"
                />
                <motion.path
                  initial={{ y: -30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 3 }}
                  className="cls-4"
                  d="M306.46,113.46a21.05,21.05,0,0,0-4.29,1c-10.53,3.54-17.3,14.74-17.62,25-.08,2.61-.17,5.66,1.65,9,4.57,8.28,16.66,9.82,17.46,9.91.5.06.91.09,1.19.11"
                />
                <motion.path
                  initial={{ y: -30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 3 }}
                  className="cls-5"
                  d="M304.68,158.87s9.3-.54,15.08-8.22"
                />
                <motion.polyline
                  initial={{ y: -30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 3 }}
                  className="cls-6"
                  points="313.95 156.96 316.95 165.96 321.95 164.96"
                />
                <motion.polygon
                  initial={{ y: -30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 3 }}
                  className="cls-7"
                  points="325.94 160.46 325.94 165.76 342.99 160.46 342.99 154.4 325.94 160.46"
                />
                <motion.polyline
                  initial={{ y: -30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 3 }}
                  className="cls-8"
                  points="321.6 120.46 325.45 110.46 330.45 108.46"
                />
                <motion.polygon
                  initial={{ y: -30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 3 }}
                  className="cls-9"
                  points="332.95 105.46 347.95 99.46 347.95 104.86 332.95 110.72 332.95 105.46"
                />
                <motion.polyline
                  initial={{ y: -30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 3 }}
                  className="cls-10"
                  points="287.95 128.96 283.95 122.96 278.95 124.96"
                />
                <motion.polygon
                  initial={{ y: -30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 3 }}
                  className="cls-11"
                  points="260.29 129.96 275.86 123.96 275.86 129.96 260.29 134.97 260.29 129.96"
                />
                <motion.path
                  initial={{ y: -30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 3 }}
                  className="cls-12"
                  d="M160.35,182.66c6.27,3.54,11.29-1.83,15-6.43,2.92-3.65,6.51-6.85,8.82-11,2.82-5,.7-9.84,2.65-14.76,1.33-3.36,5.38-4.55,8.63-3.34s6,2.85,9,.6c4.49-3.28,6.69-10.88,13.49-8.6,5.45,1.83,8.17,7.25,13,9.92,1.89,1,3.9,1.33,5.83,2.14,2.63,1.12,3.25,3.49,5.07,5.49a11.16,11.16,0,0,0,9.67,3.88c8-1,8.66-11.58,13.59-16.18a6.69,6.69,0,0,1,6.4-1.83"
                />
                <motion.path
                  initial={{ y: -30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 3 }}
                  className="cls-13"
                  d="M161.7,200.46S169,201,170,183s0-1.6,0-1.58c.35-5.8,2.68-16.8,8.44-20,2.69-1.46,4.94.42,7.18,1.86,3.51,2.25,5.77,5.09,8.61,8,1.34,1.39,2.28,1.88,4.1.72,5.63-3.61,5.34-10.55,9.35-15.26a9.17,9.17,0,0,1,7.38-3.34,11.26,11.26,0,0,1,6.11,1.82c1.24.93,1.92,2.43,3.1,3.47a13,13,0,0,0,10.48,2.71c2.46-.35,3.35-1.65,5.16-3.18,3.51-3,9.62-7.61,14.44-5,0,0,8.65,8.67,16.65,5.67"
                />
                <motion.line
                  initial={{ y: -30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 3 }}
                  className="cls-14"
                  x1="172.15"
                  y1="237.03"
                  x2="168.9"
                  y2="237.03"
                />
                <motion.line
                  initial={{ y: -30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 3 }}
                  className="cls-15"
                  x1="189.2"
                  y1="236.25"
                  x2="185.95"
                  y2="236.25"
                />
                <motion.line
                  initial={{ y: -30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 3 }}
                  className="cls-16"
                  x1="206.2"
                  y1="233.92"
                  x2="202.95"
                  y2="233.92"
                />
                <motion.line
                  initial={{ y: -30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 3 }}
                  className="cls-17"
                  x1="217.51"
                  y1="223.37"
                  x2="214.26"
                  y2="223.37"
                />
                <motion.line
                  initial={{ y: -30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 3 }}
                  className="cls-18"
                  x1="236.51"
                  y1="212.37"
                  x2="233.26"
                  y2="212.37"
                />
                <motion.line
                  initial={{ y: -30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 3 }}
                  className="cls-19"
                  x1="253.51"
                  y1="200.37"
                  x2="250.26"
                  y2="200.37"
                />
                <motion.line
                  initial={{ y: -30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 3 }}
                  className="cls-20"
                  x1="269.51"
                  y1="197.37"
                  x2="266.26"
                  y2="197.37"
                />
                <motion.polygon
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 2, delay: 8 }}
                  className="cls-21"
                  points="442.71 0 451.71 2 443.71 32 434.71 30 442.71 0"
                />
                <motion.polygon
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 2, delay: 8 }}
                  className="cls-21"
                  points="453.71 13 461.71 15 456.71 35 447.71 33 453.71 13"
                />
                <motion.rect
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 2, delay: 8 }}
                  className="cls-22"
                  x="460.07"
                  y="27.89"
                  width="12.37"
                  height="8.25"
                  transform="translate(322.08 476.57) rotate(-75.96)"
                />
                <polyline
                  className="cls-23"
                  points="22 233.37 21.91 233.24 16.62 225.31 16 224.37"
                />
                <motion.ellipse
                  initial={{ y: -100, x: -100, opacity: 0 }}
                  animate={{ x: 0, y: 0, opacity: 1 }}
                  transition={{ duration: 2, delay: 10 }}
                  className="cls-22"
                  cx={21}
                  cy="232.87"
                  rx={21}
                  ry="20.5"
                />
                <path
                  className="cls-24"
                  d="M34.37,217.06l-4.73,7.69a11.47,11.47,0,0,0-15.36-.82l-5.47-7.75A21.4,21.4,0,0,1,34.37,217.06Z"
                />
                <motion.circle
                  initial={{ y: -100, x: -100, opacity: 0 }}
                  animate={{ x: 0, y: 0, opacity: 1 }}
                  transition={{ duration: 2, delay: 10 }}
                  className="cls-25"
                  cx="21.5"
                  cy="232.37"
                  r={11}
                />
                <polyline
                  className="cls-23"
                  points="604.75 133.34 604.87 133.23 612.28 127.23 613.15 126.53"
                />
                <motion.ellipse
                  initial={{ y: -100, x: -100, opacity: 0 }}
                  animate={{ x: 0, y: 0, opacity: 1 }}
                  transition={{ duration: 2, delay: 12 }}
                  className="cls-21"
                  cx="605.14"
                  cy="132.35"
                  rx="20.5"
                  ry={21}
                  transform="translate(-9.68 56.79) rotate(-5.33)"
                />
                <path
                  className="cls-24"
                  d="M622.14,144.14l-8.1-4a11.49,11.49,0,0,0-.61-15.37l7.21-6.16a21.4,21.4,0,0,1,1.5,25.53Z"
                />
                <circle className="cls-25" cx="605.7" cy="132.75" r={11} />
                <polygon
                  className="cls-22"
                  points="87.65 365.76 96.65 367.76 88.65 397.76 79.65 395.76 87.65 365.76"
                />
                <polygon
                  className="cls-22"
                  points="98.65 378.76 106.65 380.76 101.65 400.76 92.65 398.76 98.65 378.76"
                />
                <rect
                  className="cls-21"
                  x="104.97"
                  y="393.68"
                  width="12.37"
                  height="8.25"
                  transform="translate(-301.73 409.14) rotate(-75.96)"
                />
                <motion.polygon
                  initial={{ x: -500 }}
                  animate={{ x: 0 }}
                  transition={{ duration: 2 }}
                  className="cls-26"
                  points="80.08 324.86 248.94 387.36 519.45 281.51 359.6 214.83 80.08 324.86"
                />
                <motion.polygon
                  initial={{ x: -500 }}
                  animate={{ x: 0 }}
                  transition={{ duration: 2 }}
                  className="cls-27"
                  points="79.65 333.06 79.65 324.5 250.28 387.66 250.28 396.23 79.65 333.06"
                />
                <motion.path
                  initial={{ x: -500 }}
                  animate={{ x: 0 }}
                  transition={{ duration: 2 }}
                  className="cls-28"
                  d="M249.86,386.89,519,281.58q.21,4.65.43,9.3L250.28,396.23Z"
                />
                <motion.path
                  initial={{ y: -30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 2 }}
                  className="cls-29"
                  d="M229.38,327.47l106.26-40,34.08,13.07L263.09,342S240,335.68,229.38,327.47Z"
                />
                <motion.polygon
                  initial={{ y: -30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 2 }}
                  className="cls-30"
                  points="229.67 331.39 229.67 327.73 261.91 340.18 261.91 343.48 229.67 331.39"
                />
                <motion.polygon
                  initial={{ y: -30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 2 }}
                  className="cls-31"
                  points="261.46 340.4 369.71 300.35 369.71 303.43 261.46 343.48 261.46 340.4"
                />
                <motion.path
                  initial={{ y: -30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 2 }}
                  className="cls-32"
                  d="M361.86,269.61s.41-8,10.17-7.15c0,0,9.48-1.79,14.56,10a7.48,7.48,0,0,1,0,3.85,8.66,8.66,0,0,1-.69,3Z"
                />
                <motion.polygon
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 2, delay: 6 }}
                  className="cls-24"
                  points="385.02 422.66 485.47 460.04 584.74 422.66 489.17 385.29 385.02 422.66"
                />
                <motion.polygon
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 2, delay: 6 }}
                  className="cls-33"
                  points="383.99 548.35 383.99 421.94 485.43 459.31 485.43 586.27 383.99 548.35"
                />
                <motion.polygon
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 2, delay: 6 }}
                  className="cls-34"
                  points="584.82 421.94 584.82 548.9 485.55 586.27 485.55 459.31 584.82 421.94"
                />
                <path
                  className="cls-26"
                  d="M377.75,271.72c-.05-.07-.1-.14-.14-.21v-.05A2.15,2.15,0,0,1,377.75,271.72Z"
                />
                <motion.path
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 2, delay: 4 }}
                  className="cls-35"
                  d="M450.77,145.52l2,8s-9.18-3-10.2-12c0,0,0-15,17.34-22,0,0,19.38-9,31.62-3,0,0,14.28,3,21.42,16a36.83,36.83,0,0,1,4.08,30s-2,15-12.24,22c.74,1.51-4.17,2.7-7.14,4-1.31.57-12.89,1.08-13.78,0l-11.72-11s2-14-1-17c0,0-3.06-6-8.16-1,.51-.51-1.14-3.44-1.37-4-1.1-2.42-2.07-4.94-3.3-7.3-.92-1.76-2.31-3.75-4.51-3.75C453.83,144.52,450.77,144.52,450.77,145.52Z"
                />
                <motion.path
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 2, delay: 4 }}
                  className="cls-36"
                  d="M491.61,188.52s3-24-6-27c0,0-10-11-12-10s-10-15-8-14-15-7-16-1c0,0-6,5-3,10,1.46,2.43,2.88,6.62,6,7a4.18,4.18,0,0,0,1,0l-2-6a2.67,2.67,0,0,1,1-1,3.45,3.45,0,0,1,2.17-.26c1.61.29,4.9,5.57,8.23,13.26,0,0,5.38-5.26,7,1.87,0,0,4.61,4.13,1.61,15.13l12,10Z"
                />
                <motion.path
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 2, delay: 4 }}
                  className="cls-37"
                  d="M453.61,152.52l-2-4c-.89-1.79,1.1-6.29,6-2,0,0,5,7,6,13-1.13-1.93,5.49-5.57,6.7,0,0,0,5.3,10,1.3,17l13,11v5l1,2c-1.66,2.23-3.33,4.57-5,7q-2.1,3-4,6c.3,1,1.33,5-1,8a5.91,5.91,0,0,1-1,1c-3.56,2.6-10.6-1.75-11-2l5.5-5.33V195.31a7.92,7.92,0,0,1-9.5-.79c-5-4-8-21-8-21s-2-11,2-13C453.61,160.52,452.61,152.52,453.61,152.52Z"
                />
                <motion.path
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 2, delay: 4 }}
                  className="cls-38"
                  d="M453,150.24c6.43,2.72,7.58,12.28,7.58,12.28a13.61,13.61,0,0,0-3.79,14.2s-.21,10.8,4.79,14.8c0,0,0,3,5,4l2.48-.36,4.52-.64v11.1s-3,8.9-4,8.9v1l-1.25.68s-4.55-1.59-4.65-1.64h-.1l5.5-5.33V195.65s-5.77,3.7-10.13-1.72-7-18.47-7.19-19.44-1.18-13,1.82-14c0,0-1-8,0-8Z"
                />
                <motion.path
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 2, delay: 4 }}
                  className="cls-39"
                  d="M465.61,166.52s-.5-6.29,2.75-5.15c0,0,2.25,1.15,2.25,6.15,0,0,0,6-1,6A7.92,7.92,0,0,1,465.61,166.52Z"
                />
                <motion.path
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 2, delay: 4 }}
                  className="cls-23"
                  d="M484.61,189.15s13.36,2.37,19.68-.63c0,0,2.32,2,2.32,3s-2,6-20,3C486.61,194.52,483.61,193.79,484.61,189.15Z"
                />
                <motion.path
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 2, delay: 4 }}
                  className="cls-35"
                  d="M475.85,216.2a16.88,16.88,0,0,1-.62-5.34c.43-8.79,7.9-14.3,9.38-15.34a30.92,30.92,0,0,0,22-4s17.57-.11,23.79,3.94a30,30,0,0,1,19.21,14.06s5,7-3,16c0,0-6,10-1,16,0,0,8,8,10,12,0,0,4,11,1,17,0,0,0,7-8,11,0,0-7,7-17,5,0,0-12-1-20-10,0,0-21-4-21-5s-12-2-12-11c0,0-2-2,0-11,0,0,6-10,10-12,0,0,1-8-5-11Z"
                />
                <motion.path
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 2, delay: 4 }}
                  className="cls-36"
                  d="M489.61,197.52a35.62,35.62,0,0,1,14,22s7,31,3,37c0,0-1,16-3,17,0,0-14,3-24-13,0,0-2-16,10-23,0,0,3.59-4.58-3.2-10.29a21.18,21.18,0,0,1-8.73-22Z"
                />
                <motion.path
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 2, delay: 4 }}
                  className="cls-40"
                  d="M457.61,225.52a47.94,47.94,0,0,1,4,9c5.17,15.87.6,30.4-2,37l-4,9-8,18s16.72,21.46,16.86,39.73c0,0,1.14,26.27-7.86,38.27,0,0-3,13,28,11,0,0,9-7,7-21,0,0-2-29,2-37,0,0,17-34,13-39l23,1s1-3.28,0-4.64-13-3.36-18-10.36c-13.73-2.73-23.91-6.62-28-10a15.41,15.41,0,0,1-4-5,13.43,13.43,0,0,1-1-7,26.32,26.32,0,0,1,2-7,27.31,27.31,0,0,1,9-11,28.2,28.2,0,0,0-2-6A29.39,29.39,0,0,0,478,219.1c-2.51-.46-10.86-1.69-17.42,3.42A17,17,0,0,0,457.61,225.52Z"
                />
                <motion.path
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 2, delay: 4 }}
                  className="cls-41"
                  d="M463.61,214.52a68.13,68.13,0,0,0-18,13,13.34,13.34,0,0,1,4.72-1.75,13.55,13.55,0,0,1,7.1.75s1.49-5,7.84-5.49a30.94,30.94,0,0,1,6.05-1c4.26-.28,6.84.45,7.29-.48.24-.5-.09-1.53-3-4a12.88,12.88,0,0,1-12-1Z"
                />
                <motion.path
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 2, delay: 4 }}
                  className="cls-41"
                  d="M506.61,290.52c2.87-.08,5.88-.09,9,0,5,.14,9.73.5,14.1,1,0,0-.9,31.68,0,31.34s12.9,29.66,11.9,43.66c0,0-2,20-54,21-2.06.6-2.74.33-3,0-.94-1.22,2.72-4.59,5-10a26.56,26.56,0,0,0,2-9c-3.25-12-4.25-25.94,2-39,.34-.72.53-1.06,1-2A136.31,136.31,0,0,0,506.61,290.52Z"
                />
                <motion.path
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 2, delay: 4 }}
                  className="cls-38"
                  d="M439.61,233.52s6.25-11.4,19.62-6.7a30.88,30.88,0,0,1,5.22,19c-.84,10.74,0,.7,0,.7s-1.43,18.76-4.63,24.4c0,0-9.19,26.64-12.19,27.64,0,0-8,18-11,19,0,0-5,13-8,14,0,0-28,4-29,3q-7.9-.45-15.82-1c-3.9-.27-7.8-.56-11.7-.91-2.16-.2-5.2,0-7.22-.93-3.23-1.44-6.58-1.79-10-2.15a79.17,79.17,0,0,1-8.13-.86c-2.6-.27-5.2-.57-7.81-.84a25.52,25.52,0,0,0-2.62-.25c-2.27,0-4.34,1.26-6.6,1.44a20.26,20.26,0,0,1-4.92-.28c-2.8-.47-5.34,1.3-7.93,2-2.82.79-5.73,1.27-8.58,2-2.36.58-4.77.67-6.62-1.18a9.25,9.25,0,0,1-2.62-5,5.36,5.36,0,0,1,1.39-3.91c.58-.78,2-1.86,1.84-3-.17-1.41-1.82-.39-2.52-.1a6,6,0,0,1-5,.19,1.5,1.5,0,0,1-.94-1.24c0-.56.53-1,1-1.27a25.89,25.89,0,0,1,5.65-2.55,13.65,13.65,0,0,0-2.71.89,29.39,29.39,0,0,1,12.45-4c2.2-.25,4.41-.34,6.61-.37,1.08,0,2.15-.17,3.23-.15s2,.7,3,.49c1.5-.32.76-1.69,0-2.37a15.32,15.32,0,0,0-5.07-2.43c.24.08,1.52-.64,1.85-.73a9.21,9.21,0,0,1,2.16-.29,10.57,10.57,0,0,1,3.37.71,17.87,17.87,0,0,1,3.51,1.37c1,.58,1.54,1.55,2.5,2.08s1.79.71,2.65,1.14,1.38,1.35,2,1.59a4.45,4.45,0,0,0,1.36-.07l5.83-.33,19.9-1.12,23-1.41,17.07-1c1.13-.06,2.31-.05,3.44-.19a19.67,19.67,0,0,0,3.56-.78,8.33,8.33,0,0,0,2.47-1.11,3.08,3.08,0,0,0,.93-1.65,8.76,8.76,0,0,1,1.45-2.3,48.67,48.67,0,0,0,3.63-5.45,19.22,19.22,0,0,0,1.06-3.13c.27-.77,1.12-1.56,1-2.41-.34-1.77-2.73-2.16-4.16-2.54a43.27,43.27,0,0,1-7.24-2.65c-2.67-1.25-5.34-2.52-8-3.7a13.24,13.24,0,0,0-3.8-.61,23.11,23.11,0,0,1-6.58-1.32,7.22,7.22,0,0,0-2-.75c-.62-.08-.88-.08-1.67-.15a16.57,16.57,0,0,1-2.61-.45,8.38,8.38,0,0,1-3-1,4.45,4.45,0,0,0-1.08-.75,5,5,0,0,0-.92-.25,5.34,5.34,0,0,1-1.76-.94c-2.1-1.5-3.28-2.45-3.4-3.73a1.39,1.39,0,0,1,.67-1.4c.7-.33,1.76.13,2.49.31,1,.24,1.93.48,2.9.7,1.15.27,2.28.6,3.44.82.68.13,1.6.45,2.23,0,1.28-.84.86-3.17.1-4.19a34.47,34.47,0,0,0-7-6.38,7.82,7.82,0,0,0-4.15-1.53c-1.54.05-2.66,1.2-4,1.71a4.4,4.4,0,0,1-2.35.26,1.39,1.39,0,0,1-.92-.52,1.59,1.59,0,0,1,0-1.35c1.29-4,4.39-5.71,8.15-6.9a36.53,36.53,0,0,1,9.13-1.94c2.25-.13,5.33,0,7.42,1a13.4,13.4,0,0,1,2.44,2,31.74,31.74,0,0,1,4.26,4.64,14.9,14.9,0,0,1,1.63,2.85,22.06,22.06,0,0,0,1.24,3.35,13.24,13.24,0,0,0,1.6,2.12c2.31,2.52,5.58,3,8.76,3.53l8.88,1.57,5.26.93s6-21,7-21S433.61,240.52,439.61,233.52Z"
                />
                <motion.path
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 2, delay: 4 }}
                  className="cls-42"
                  d="M539.72,370.94a44.54,44.54,0,0,1-11.11,8.58c-2.11,1.14-6,3-15,5a135,135,0,0,1-23,3c-.56.59-7.07,7.73-4.87,16.8a17.61,17.61,0,0,0,5.87,9.2,190.78,190.78,0,0,0,20,1,186,186,0,0,0,19-1,41.16,41.16,0,0,0,11.06-18.29Z"
                />
                <motion.path
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 2, delay: 4 }}
                  className="cls-43"
                  d="M232.61,485.52s9,15,21,15c0,0,36-34,47-46,0,0,19-23,22-29,0,0,11-20.81,11-21,0-3,8-11,10-9l1,72.77a60.14,60.14,0,0,0,27.28,2.76,116.51,116.51,0,0,1,4.39-41.22q1.79-5.22,3.58-10.45.86-5.43,1.73-10.86c1.09.78,2.25,1.56,3.49,2.35,1.8,1.14,3.55,2.14,5.22,3,10,3.58,21,7,33,10a345,345,0,0,0,50.25,8.62s30-1,38-10c0,0,16.41-3.1,20.21-9,0,0-33.22,1-33.71,0-1.06-2-6-.24-8.85-2.83-4.28-3.87-3.91-10.6-3.65-13.12,1.63-2.77,5.42-9.28,5.17-9.79a.68.68,0,0,0-.17-.21c-.12-.09-.28-.12-1,0h-1c-.53,0-6.4-.6-27-2.88a6.49,6.49,0,0,1-2.49-1.44c-1.25-1.15-2.5-3.18-2.5-6.68,0,0-44-1-83-14,0,0-25-4-29-6l-18,5s-23,18-24,16c0,0-14,28-18,32Z"
                />
                <motion.path
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 2, delay: 4 }}
                  className="cls-43"
                  d="M366.61,347.52l33-13a46.94,46.94,0,0,1,24-1,24.5,24.5,0,0,1,9,2,25.77,25.77,0,0,1,12,11c4.14,6.79,5,13,2.41,15.38a4.47,4.47,0,0,1-2.78,1.08Z"
                />
                <motion.path
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 2, delay: 4 }}
                  className="cls-42"
                  d="M419.26,332.79l9.35-1.27,2.9-3.22,33,9.95a66.16,66.16,0,0,1-2.9,27.27l-17-3a16.92,16.92,0,0,0,2.09-10.19C445.43,342.79,434.45,334.42,419.26,332.79Z"
                />
                <motion.path
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 2, delay: 4 }}
                  className="cls-23"
                  d="M344.61,354.52l22-7,81,15.46,12,2.54a21.72,21.72,0,0,1-4.75,10.94S365.61,364.52,344.61,354.52Z"
                />
                <motion.path
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 2, delay: 4 }}
                  className="cls-44"
                  d="M353.65,345.16l13,2.36L399,334.61a64.33,64.33,0,0,0-8.89-1.2,65,65,0,0,0-7.9,0Z"
                />
                <motion.path
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 2, delay: 4 }}
                  className="cls-45"
                  d="M352.4,329.4c3.24.31,6.52.68,9.86,1.08,6.89.84,13.54,1.83,19.95,2.92l-78.57,32.08a27.71,27.71,0,0,1,6.15-11.85,28.69,28.69,0,0,1,17.2-9.11s14.62-1,17.62,0a14.42,14.42,0,0,1,.87-7.71A14.78,14.78,0,0,1,352.4,329.4Z"
                />
                <motion.path
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 2, delay: 4 }}
                  className="cls-42"
                  d="M303.64,365.48q-15,25.15-30.41,50.54-13.31,21.93-26.62,43.5s-12,19-14,18.52,0,7.48,0,7.48q20.23-28.45,40.43-57.85,8-11.7,15.94-23.35l14.29-24.92a102.91,102.91,0,0,1,11.42-8.86A76.66,76.66,0,0,1,330,362.18c5.38-2.13,8.57-3.46,13.19-3.67,1.85-.08,2.49.08,13.51,2.11,10.85,2,11.11,2,13.63,2.57,5.91,1.3,5.81,1.53,11.31,2.65a81.74,81.74,0,0,1,8.11,1.86c1.67.49,1.72.58,6,2,3.55,1.17,5.32,1.75,7.14,2.24,2.46.66,4,.93,7,1.47,6.77,1.24,4.3.91,14.15,2.75,6.37,1.18,9.55,1.78,11.4,2.06,15,2.29,18.2.83,19.79-.14a14.17,14.17,0,0,0,5.22-6c2.09-4,1.8-5.72,1.15-6.55-1.06-1.36-3.29-.6-7.88-1.19-2.68-.35-2.25-.65-7.15-1.79-3.61-.84-4.15-.74-12.23-2.19-2.9-.53-5.05-.94-7.23-1.35,0,0-5.44-1-11.13-2.22-16.11-3.32-43.45-10.9-59.31-11.57C344.46,344.69,326.47,347.75,303.64,365.48Z"
                />
                <motion.path
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 2, delay: 4 }}
                  className="cls-46"
                  d="M232.14,485.78,230,488.84s-1,1,0,3c0,0,11.1,8,12.05,8h8.06Z"
                />
                <motion.path
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 2, delay: 4 }}
                  className="cls-46"
                  d="M343.87,466.78c3.69,8.27,11.05,13,18.62,11.85,1.48,2.75,4.53,3.72,6.61,2.63,2.4-1.26,2.18-5.05,2.11-6.41s-.12-2.47-.86-3.3c-1.39-1.55-4.57-1.54-7.86.12C359.78,471.37,356.7,470.86,343.87,466.78Z"
                />
                <motion.path
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 2, delay: 4 }}
                  className="cls-24"
                  d="M232.82,484.58s-.11-1.94-2.11.06,1.06-.91,1.06-.91-10.06,7.91-10.06,6.91c0,0-17,3-17,2l-17.32.2s-3.68-.2-4.68,4.8c0,0,10,11,21,11,0,0,3,2,17,1,0,0,18,12,28,6,0,0,2,0,4-4v-13H242.17s-11.46-7-11.46-8-1.46-2.22.77-4.11Z"
                />
                <motion.path
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 2, delay: 4 }}
                  className="cls-24"
                  d="M346.27,470.17s9,9,17,7c3.44-.86,5.93-1.75,8.24-.21,2.93,2,3.66,7.31,3.32,10.66a31.93,31.93,0,0,0-.55,4.68c0,3.22.79,4.24.28,5.22-.62,1.17-3,2.09-11.29.43a21.85,21.85,0,0,1-16.86-5c-3,0-6.16-.06-9.51-.3-2.31-.17-4.53-.39-6.64-.65a15.56,15.56,0,0,1-10.47-6.12,14.46,14.46,0,0,1-2.52-6.7s-1-6,4-5c0,0,16.92,2.25,19,.62C340.27,474.79,347.27,472.17,346.27,470.17Z"
                />
                <motion.path
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 2, delay: 4 }}
                  className="cls-43"
                  d="M376.21,495.87a6.45,6.45,0,0,1-8.57,8.9c-4.7-1.46-8.54-2.67-11.2-3.51l-12.17-3.87h0c-2,1-16-1-16-1-8-3-13-18-13-18,1-2,2-.93,2-.93s-1.95,18.69,28.54,14.7.5,0,.5,0a12.54,12.54,0,0,0,2.86,2.63c3.6,2.37,7.36,2,14.12,1.63C366.21,496.25,370.63,496,376.21,495.87Z"
                />
                <motion.path
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 2, delay: 4 }}
                  className="cls-43"
                  d="M183.23,494.79s4.48,16.72,37.48,13.72c0,0,22.14,15.59,31.57,2.79l.43,5.77s0,4.44-10,4.44h-1l-34-9s-22-6-26-14c0,0,0-4.31,1-4.16s.73,0,.73,0"
                />
                <motion.path
                  initial={{ y: -30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 3 }}
                  className="cls-47"
                  d="M229.26,254.28l59-20-6,23s-5,6,8,13l14,8-51,18s-12,0-13-3l-15-6s-5-4-1-12Z"
                />
                <motion.path
                  initial={{ y: -30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 3 }}
                  className="cls-43"
                  d="M229.71,253.78l-4,2-5,23s-1,8,4.5,10.5l21.5,9.5s7,0,10-2l49-17v-3.5l-48,17.5s-4,5-14,0l-19-7s-2.21-3-.6-10.5Z"
                />
              </g>
            </g>
          </svg>
        </Homepage1_image>
        <Homepage1_content>
          <Homepage1_heading
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 2 }}
          >
            We Are ZetaMonk
          </Homepage1_heading>

          <Homepage1_description  initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 2,delay:2 }}>
            Custom Product & Software Development Focused On Your Success
          </Homepage1_description>
          <Homepage1_phone>
          <Link to='/contactus' style={{textDecoration:'none'}}>
          <Button1>
              <Button2 initial={{ opacity: 0 }}
            animate={{  opacity: 1 }}
            transition={{ duration: 4 }} >Get Quote</Button2>
            </Button1>
          </Link>
          </Homepage1_phone>
        </Homepage1_content>
        <Cloud>
          <svg className='svg2'
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 302.8 1072.5"
            style={{ enableBackground: "new 0 0 302.8 1072.5" }}
            xmlSpace="preserve"
          >
            <style
              type="text/css"
              dangerouslySetInnerHTML={{
                __html: "\n\t.st0{fill:#91BDFF;}\n\t.st1{fill:#FF0094;}\n",
              }}
            />
            <motion.path
              className="st0"
              initial={{ y: -250, x: 0 }}
              animate={{ y: 200, x: -10, rotate: 300 }}
              transition={{
                duration: 10,
                repeat: Infinity,
                repeatType: "reverse",
                type: "spring",
                stiffness: 10,
              }}
              d="M66.3,84.5C91.2,66.9,119.4,56,148,43.8c25.7-10.9,58.1-17.3,82.3,0.6c23.8,17.5,35.4,53.9,34.4,82.7
	c-1.7,47.4-48.8,54.5-85.8,63.4c-30.4,7.4-60.1,18.8-92.3,18.5c-22.6-0.2-53-1.3-66.7-22.9c-19.7-31,4.9-65,27.5-86.3
	C53.5,94.2,59.8,89.1,66.3,84.5z"
            />
            <path className="st0" d="M-565.7,278.2" />
            <path className="st1" d="M-374.5,698.6" />
            <path className="st1" d="M127.3,768.4" />
            <motion.path
              className="st1"
              initial={{ y: 300, x: 0 }}
              animate={{ y: 0, x: -10, rotate: 300 }}
              transition={{
                duration: 10,
                delay: 10,
                repeat: Infinity,
                repeatType: "reverse",
                type: "spring",
                stiffness: 10,
              }}
              d="M30,868.9c8.5-16.4,21.3-27.3,35-39c3-2.6,15.1-12.7,33-23c12.2-7,22-11.1,24-12c3.7-1.6,16.8-6.9,40-12
	c18.6-4.1,30.1-6.6,46-7c21.4-0.5,39.7-0.9,56,11c12.3,8.9,17.7,20.7,22,30c9.6,20.8,9.3,39.6,9,53c-0.3,10-0.9,28.6-10,50
	c-12.2,28.6-32,44.6-40,51c-50.5,40-112.8,30.7-123,29c-21.4-3.5-78.4-13-96.6-58.1C11.2,906.6,29,870.8,30,868.9z"
            />
          </svg>
        </Cloud>
      </Homepage1_sub>
    </Homepage1_main>
  );
}

export default Homepage1;

// import React from 'react';
// import imagezeta from '../../images/zetamonk_front.svg';
// import pink from '../../images/pcloud.svg';
// import {Landingsection,Image,Image2,Landingheader, Landingpageheading, Landingdescription, Landingbutton,Button} from './LandingPage.element'
// function LandingPage() {
//     return (
//       <Landingsection>

//         <Image2 src={pink}>

//         </Image2>

//         <Landingheader>
//         <Landingpageheading>
//         Solve business challenges with it

//         </Landingpageheading>
//         <Landingdescription>
//           we are previlige to work at 100 of it companies in this field
//         </Landingdescription>
//         <Landingbutton>
//         <Button>Learn more</Button>
//         </Landingbutton>
//         </Landingheader>

//       </Landingsection>
//     )
// }

// export default LandingPage
