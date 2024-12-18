export const Footer = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top:0,
      behavior: "smooth"
    })
  }
  return (
    <>
      <button onClick={scrollToTop}>To top</button>
      <p>
        Built by{" "}
        <a href="https://www.linkedin.com/in/james-sewter/" target="_blank">James Sewter</a>
      </p>
      <p>Dec 2024</p>
    </>
  );
};
