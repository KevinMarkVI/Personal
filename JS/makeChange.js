var makeChange = function(cost, payment) {

  var change = [];

  var changeOptions = {
    'penny': 1,
    'nickel': 5,
    'dime': 10,
    'quarter': 25
  };

  if (payment === cost) {
    return "No Change";
  }

  if (payment < cost) {
    return "Need more money";
  }

  var changeAmount = (payment - cost);
  changeAmount *= 100;

  if (changeAmount === 1 || changeAmount === 5 || changeAmount === 10 || changeAmount === 25)
    // return the single coin that matches the value of changeAmount

  if (changeAmount > 25) {
    while (changeAmount > 25) {
      change.push("quarter");
      changeAmount -= 25;
    }

  if (changeAmount < 10) {
    while (changeAmount > 10) {
      change.push('dime');
      changeAmount -= 10;
    }
  }

  if (changeAmount > 5) {
    while (changeAmount > 5) {}
    change.push('nickel');
    changeAmount -= 5;
    }
  }

  if (changeAmount > 0) {
    while (changeAmount > 0) {
      change.push('penny');
      changeAmount -= 1;
    }
  }
  return change;
};



var makeChange = function(cost, payment) {

  var change = [];

  var changeOptions = {
    1: 'penny',
    5: 'nickel',
    10: 'dime',
    25: 'quarter'
  };

  if (payment === cost) {
    return "No Change";
  }

  if (payment < cost) {
    return "Need more money";
  }

  var changeAmount = (payment - cost);
  changeAmount *= 100;

  var helper = function(changeAmount) {
    if (changeAmount > 25) {
      changeAmount -= 25;
      change.push('quarter');
      }
    } else if (changeAmount > 10) {
      changeAmount -= 10;
      change.push('dime');

      }
    } else if (changeAmount > 5) {
      changeAmount -= 5;
      change.push('nickel');

    } else if (changeAmount > 0) {
      changeAmount -= 1;
      change.push('penny')
      }
    }

    if (changeAmount > 0) {
      helper(changeAmount)
    }

  };
  helper(changeAmount);
  return change;
};




