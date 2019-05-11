const baitSound = require('./files/bait.ogg');
const gameOverSound = require('./files/game-over.ogg');

export default {
  bait: new Audio(baitSound),
  gameOver: new Audio(gameOverSound),
};
