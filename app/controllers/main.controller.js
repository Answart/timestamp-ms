var path = require('path');


module.exports = {
  showHome: (req, res) => {
    res.sendFile('index.html', { root: path.join(__dirname, '../../public') });
  }
};
