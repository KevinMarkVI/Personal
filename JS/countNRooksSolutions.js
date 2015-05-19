window.countNRooksSolutions = function(n) {
  var solutionCount;

  var board = new Board({n:n});

  var findSolution = function (rowsLeft) {

    // if all rows exhausted
    if (rowsLeft === 0) {
      solutionCount++;
      return;
    }
      //inrement solutionCount
      //stop

    for (var i = 0; i < n; i++) {
      board.togglePiece(row,i);

      if ( !board.hasAnyRooksConflicts() ) {
        findSOlution(rowsLeft +1);
      }

      board.togglePiece(row, i);
    }


  }
  findSolution(0);
}


