import Link from "next/link";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo">
        <Link href="/">Anup's Portfolio</Link>
      </div>
      <a
        href="https://docs.google.com/document/d/1AOROhtwKECMlV3v9yneLuBT6jGLq_3s-/edit?usp=drive_link&ouid=104085456920813938243&rtpof=true&sd=true"
        className="cta-btn"
      >
        Resume
      </a>
    </div>
  );
};

export default Navbar;
