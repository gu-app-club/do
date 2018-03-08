export function scoreToString(scoreObj) {
  return JSON.stringify(scoreObj);
}

export function scoreFromString(scoreStr) {
  return JSON.parse(scoreStr);
}

/**
 * Adds up an array of score objects
 * 
 * @example
 * total([
 *  { html: 0.5, css: -1}, 
 *  { html: 0.5, css: 1 }
 * ]) == { html: 1, css: 0 }
 */
export function total(ledger) {
  const totals = {};

  // Iterate through evert 
  ledger.forEach(scores => {
    
    // Iterate through every item in the score object
    Object.entries(scores).forEach(([key, score]) => {
      if (!totals[key]) {
        totals[key] = score; // Initialize new score 
        return
      } 

      totals[key] += score;
    });
  })

  return totals;
}
