import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "NIX - SCHOOL EDUCATION",
    img: "./medi.png",
    desc: "AI-driven automatic correction and question generation coupled with a seamless dashboard and comprehensive dictionary integration for enhanced learning and productivity.",
  },
  {
    id: 2,
    title: "MOVIE RECOMMENDATION SYSTEM",
    img: "./movie.jpg",
    desc: "Unlock the power of personalized movie recommendations with our Streamlit-based project, offering intuitive interface and seamless interaction. Discover your next cinematic adventure effortlessly, tailored to your preferences, with just a few clicks",
  },
  {
    id: 3,
    title: "FILE STORAGE",
    img: "./chat.png",
    desc: "Your secure cloud storage solution, offering seamless collaboration and access to your files from anywhere, anytime.",
  },
 
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;