function largestNameIsFriend(params) {
  let bestFriend = friends[0];
  for (let i = 0; i < params.length; i++) {
    const friend = params[i];
    if (bestFriend.length > friend.length === false) {
      bestFriend = friend;
    }
  }
  return bestFriend;
}

const friends = [
  "Abir Biswas",
  "Shishir Paul",
  "Tushar Saha",
  "Mintu Paul",
  "Rintu Sur",
  "Arpita Paul",
  "Pew Paul",
  "Supti Paul",
  "Madhumala Karmakar",
];
const result = largestNameIsFriend(friends);
console.log(`My best friend is: ${result}`);
