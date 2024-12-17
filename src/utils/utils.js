
export const convertDate = (date) => {
  const [year, month, day] = date.slice(0, 10).split("-");

  const numericDay = parseInt(day);
  const numericMonth = parseInt(month);

  const suffixes = { 1: "st", 2: "nd", 3: "rd" };
  const lastDigit = numericDay % 10;
  const isAnnoying = numericDay >= 11 && numericDay <= 13;
  const ord = isAnnoying ? "th" : suffixes[lastDigit] || "th";

  const months = {
    1: "Jan",
    2: "Feb",
    3: "Mar",
    4: "Apr",
    5: "May",
    6: "Jun",
    7: "Jul",
    8: "Aug",
    9: "Sep",
    10: "Oct",
    11: "Nov",
    12: "Dec",
  };
  const rightMonth = months[numericMonth];

  const formattedDate = `${numericDay}${ord} ${rightMonth} ${year}`;
  return formattedDate;
};

export const capitaliseFirstLetter = (word) => {
  const capitalisedWord = word.split("");
  capitalisedWord[0] = capitalisedWord[0].toUpperCase();
  return capitalisedWord.join("");
};

export const addEmoji = (votes) => {
  if (votes >= 0) {
    return `👍${votes}`;
  } else {
    const formatVotes = votes.toString().slice(1);
    return `👎${formatVotes}`;
  }
};

export const addAdjective = (articleVotes) => {
  if (articleVotes > 0 && articleVotes !== 1) {
    return "upvotes - what a great article. More like this below.";
  } else if (articleVotes <= -2) {
    return "downvotes - oh no!";
  }
  else if (articleVotes === 0) {
    return "upvotes - it divides opinion!";
  } else if (articleVotes === 1) {
    return "upvote - must be worth reading";
  } else {
    return "downvote - oh no!";
  }
};
