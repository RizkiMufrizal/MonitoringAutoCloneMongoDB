/**
 * LogController
 *
 * @description :: Server-side logic for managing logs
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  getLogs: function(req, res) {
    Log.find({}, function(err, logs) {
      if (err) {
        return res.send(err);
      }

      res.view('homepage', {
        data: logs
      });
    });
  }
};
