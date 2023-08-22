function score(dice) {
  const triples = [1, 2, 3, 4, 5, 6];
  let rolls = {};
  let score = 0;

  console.log(dice);

  dice.forEach((roll) => {
    if (!rolls[roll]) rolls[roll] = 1;
    else rolls[roll]++;
  });

  triples.forEach((number) => {
    if (rolls[number] >= 3) {
      if (number === 1) {
        score += 1000;
      } else {
        score += number * 100;
      }
      rolls[number] -= 3;
    }
    if (number === 5 || number === 1)
      while (rolls[number] > 0) {
        score += rolls[number] * number === 5 ? 50 : 100;
        rolls[number]--;
      }
  });

  return score;
}

console.log(score([1, 1, 1, 3, 3]));
