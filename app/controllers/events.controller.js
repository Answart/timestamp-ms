const timestamp = require('../api/timestamp');


function showTimestamp(req, res) {
  var query = req.params.query;

  timestamp(query, (err, data) => {
    if (err) { console.error(err) };

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(data));
  });
};


module.exports = {
  showTimestamp: showTimestamp
};
