'use strict';

var moment = require('moment');


function formatUnix(date) {
  return moment(date, "MMMM D, YYYY").format("X");
}

function formatNatural(unix) {
  return moment.unix(unix).format("MMMM D, YYYY");
}


module.exports = function(query, cb) {
  var data = {
    natural: null,
    unix: null
  };
  var unix;

  if (Number(query) >= 0) {
    unix = Number(query);
  } else if (isNaN(+query) && moment(query, "MMMM D, YYYY").isValid()) {
    unix = Number(formatUnix(query));
  } else {
    return cb(new Error(`Invalid query: ${query}`), data);
  }
  data.natural = formatNatural(unix);
  data.unix = unix;

  return cb(null, data);
};
