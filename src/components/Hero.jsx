import Image from "next/image";

const Hero = () => {
  return (
    <div className="hero-container">
      <Image
        src="/images/Profile.jpg"
        className="profile-img"
        width={300}
        height={300}
        alt="Anu personal headshot"
      />
      <div className="hero-text">
        <h1>Hey, I'm Anup 👋</h1>
        <p>
          I'm a software developer based in Bengaluru, India. I specialize in
          building (and occasionally designing) exceptional websites,
          applications, and everything in between.
        </p>
        <div className="social-icons">
          <a
            href="https://x.com/AnupRawat189675"
            aria-label="Twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a
            href="https://github.com/maverick-the-builder"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/anup-rawat-bb9442230/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
