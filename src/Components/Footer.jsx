import { scrollToTop } from "../utils/utils";

export const Footer = () => {
  return (
    <>
      <button onClick={scrollToTop}>To top</button>
      <p>
        Built by
        <a href="https://www.linkedin.com/in/james-sewter/" target="_blank">James Sewter</a>
      </p>
      <p>Dec 2024</p>
    </>
  );
};
