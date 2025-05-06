const axios = require("axios");

const getRandomQuote = async () => {
  try {
    const response = await axios.get("https://zenquotes.io/api/random");
    const { q: content, a: author } = response.data[0];
    return `${content} --${author}`;
  } catch (err) {
    console.log("Error fetching quote", err.message);
    return "Oops! Couldn't fetch a quote. Try again later!";
  }
};

module.exports = getRandomQuote;
