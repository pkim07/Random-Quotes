let quotes = [
  " “Be yourself; everyone else is already taken.” ",
  "“We are all in the gutter, but some of us are looking at the stars.” ",
  " “It is never too late to be what you might have been.” ",
  " “Everything you can imagine is real.”  ",
  " “Life isn't about finding yourself. Life is about creating yourself.”  ",
  " “Success is not final, failure is not fatal: it is the courage to continue that counts.” ",
  " “Nothing is impossible. The word itself says Im possible!'” ",
  " “There is nothing impossible to they who will try.” ",
  " “Believe you can and you’re halfway there.” ",
];

const randomQuotes = () => {
  let random = Math.floor(Math.random() * quotes.length);
  return quotes[random];
};

console.log(randomQuotes());
