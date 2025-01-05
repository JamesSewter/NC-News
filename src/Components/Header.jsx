import { formatGreeting } from "../utils/utils";
import { scrollToTop } from "../utils/utils";

export const Header = () => {
  const greetingMsg = formatGreeting(Date.now())

  return (
    <article id="header" onClick = {scrollToTop}>
      <h1>NC-News</h1>
      <h2 id="greeting">{greetingMsg} jessjelly! </h2>
    </article>
  );
};
