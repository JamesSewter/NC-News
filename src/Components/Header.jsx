import { formatGreeting } from "../utils/utils";

export const Header = () => {
  const greetingMsg = formatGreeting(Date.now())

  return (
    <>
      <h1>NC-News</h1>
      <h3 id="greeting">{greetingMsg} jessjelly! </h3>
    </>
  );
};
