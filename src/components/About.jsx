import { useEffect, useState } from "react";
import "./About.css";

const roles = [
  "Website Developer",
  "React Programmer",
  "Frontend Engineer",
];

function About() {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const speed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      setText((prev) =>
        isDeleting
          ? current.substring(0, prev.length - 1)
          : current.substring(0, prev.length + 1)
      );

      if (!isDeleting && text === current) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  return (
    <section id="about" className="about-3d">
      {/* LEFT PANEL */}
      <div className="about-left">

        <h1 className="about-title">

          {/* ABOUT (single line) */}
          <span className="about-line">
            <span className="letter">A</span>
            <span className="letter">B</span>
            <span className="letter">O</span>
            <span className="letter">U</span>
            <span className="letter">T</span>
          </span>

          {/* ME (second line) */}
          <span className="about-me">ME</span>
        </h1>

        <span>Get to know me !</span>

        <div className="about-rolling">
          I am a <span className="rolling-text">{text}</span>
          <span className="cursor">|</span>
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="about-right">

        <div className="about-card highlight">
          <h2>Hello 👋</h2>
          <p>
            I’m <strong>Mouli</strong>, a frontend developer who loves turning
            ideas into interactive and visually engaging web experiences.
          </p>
        </div>

        <div className="about-card highlight">
          <h2>What I Do</h2>
          <p>
            I build responsive websites and web apps using React, focusing on
            clean UI, smooth interactions, and modern design.
          </p>
        </div>

        <div className="about-card highlight">
          <h2>My Goal</h2>
          <p>
            To continuously learn, improve, and create digital products that
            feel intuitive, fast, and delightful to use.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
