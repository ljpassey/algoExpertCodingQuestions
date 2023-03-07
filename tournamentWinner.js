function tournamentWinner(competitions, results) {
  for ( i = 0; i < results.length; i++ ) {
    if ( results[i] === 0 ) {
        results[i] = 1
    } else {
        results[i] = 0
    }
    }
    let score = {}
    for ( i = 0; i < competitions.length; i++ ) {
        if ( results[i] === 0 ) {
            if ( score[competitions[i][0]] ) {
                score[competitions[i][0]] += 3
            } else {
                score[competitions[i][0]] = 3
            }
        } else {
            if ( score[competitions[i][1]] ) {
                score[competitions[i][1]] += 3
            } else {
                score[competitions[i][1]] = 3
            }
        }
    }
    let max = 0
    let winner = ""
    for ( i = 0; i < Object.keys(score).length; i++ ) {
        if ( score[Object.keys(score)[i]] > max ) {
            max = score[Object.keys(score)[i]]
            winner = Object.keys(score)[i]
        }
    }
    return winner
}

console.log(tournamentWinner([["HTML", "C#"], ["C#", "Python"], ["Python", "HTML"]], [0, 0, 1]))
