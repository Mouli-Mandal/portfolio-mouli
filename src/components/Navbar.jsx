function Navbar() {
  return (
    <nav className="navbar">
      {/* <h2 text color="white">My Portfolio</h2> */}
      <h2 style={{ color: "white" }}>My Portfolio</h2>

      <div>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;
