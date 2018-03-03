import { Mongo } from 'meteor/mongo';
import numeral from 'numeral';

// Create the collection
export const Players = new Mongo.Collection('players');

// Algorithm to calculate the players' positions
export const calculatePlayerPositions = players => {
  // Starting value for first person: MongoDB already starts us off with a descending list.
  let rank = 1;

  // Return a new array with new properties tacked on: rank & position
  return players.map((player, index) => {
    // Should we change the rank from 1st to 2nd?
    // The 1st person is always going to be 1st even if there's a tie so don't change the 0 index person in the array.
    // Is the person previous with a greater score, then increase rank. Otherwise, it must be a tie & the rank shouldn't change.
    if (index !== 0 && players[index - 1].score > player.score) {
      rank++;
    }

    // Compose the correct object.
    return {
      ...player,
      rank,
      // String value of rank, e.g. '1st'.
      position: numeral(rank).format('0o')
    };
  });
};
