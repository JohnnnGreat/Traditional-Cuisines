import "@/styles/globals.css";
import "@/styles/auth.scss";
import "@/styles/utils.scss";
import "@/styles/profile.scss";
import "@/styles/index.scss";
import "@/styles/admin.scss";

import Header from "@/layout/Header";
import Footer from "@/layout/Footer";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  const cursorSize = 15;

  const mouse = {
    x: useMotionValue(0),

    y: useMotionValue(0),
  };

  const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 };

  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),

    y: useSpring(mouse.y, smoothOptions),
  };

  const manageMouseMove = (e) => {
    const { clientX, clientY } = e;

    mouse.x.set(clientX - cursorSize / 2);

    mouse.y.set(clientY - cursorSize / 2);
  };

  useEffect(() => {
    window.addEventListener("mousemove", manageMouseMove);

    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
    };
  }, []);
  return (
    <>
      <Header />
      <motion.div
        style={{
          left: smoothMouse.x,

          top: smoothMouse.y,
        }}
        className="cursor"
      ></motion.div>
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
