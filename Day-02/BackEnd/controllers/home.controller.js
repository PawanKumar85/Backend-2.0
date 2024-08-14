// import data from "../Data/data";
const home = (req, res) => {
  res.send(`Welcome Express`);
};

const myData = (req, res) => {
  res.json(data);
};

const data = [
  {
    id: 1,
    setup: "I tried starting a hot air balloon business...",
    punchline: "It never took off.",
  },
  {
    id: 2,
    setup: "What do you call a lazy kangaroo?",
    punchline: "A pouch potato.",
  },
  {
    id: 3,
    setup: "I told my wife she was drawing her eyebrows too high.",
    punchline: "She seemed surprised.",
  },
  {
    id: 4,
    setup: "What do you call a fish with no eyes?",
    punchline: "Fsh.",
  },
  {
    id: 5,
    setup: "I tried to sue the airline for losing my luggage.",
    punchline: "I lost my case.",
  },
  {
    id: 6,
    setup: "What do you call a lazy kangaroo?",
    punchline: "A pouch potato.",
  },
  {
    id: 7,
    setup: "I told my wife she was drawing her eyebrows too high.",
    punchline: "She seemed surprised.",
  },
  {
    id: 8,
    setup: "What do you call a fish with no eyes?",
    punchline: "Fsh.",
  },
  {
    id: 9,
    setup: "I tried to sue the airline for losing my luggage.",
    punchline: "I lost my case.",
  },
  {
    id: 10,
    setup: "I tried to catch some fog.",
    punchline: "I mist.",
  },
];

export { home, myData };
