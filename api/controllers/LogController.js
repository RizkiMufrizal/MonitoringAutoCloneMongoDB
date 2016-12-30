/**
 * LogController
 *
 * @description :: Server-side logic for managing logs
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var moment = require('moment');

module.exports = {
  getLogs: function(req, res) {
    Log.find({}, function(err, logs) {
      if (err) {
        return res.send(err);
      }

			var hasil = [];
			logs.map(function(val){
				hasil.push({
					id: val.id,
					tanggal: moment(val.tanggal).format('YYYY DD MMMM h:mm:ss a')
				});
			});		

      res.view('homepage', {
        data: hasil
      });
    });
  }
};
