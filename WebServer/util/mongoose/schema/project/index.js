var mongoose = require("../../database/");
var Schema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  desc: String,
  createTime: Date,
  content: [
    {
      name: {
        type: String,
        required: true
      },
      plainDesc: String,
      createTime: {
        type: Date,
        required: true
      },
      global: {
        method: {
          type: String,
          required: true
        },
        version: {
          type: String,
          required: true
        }
      },
      request: {
        url: {
          type: String,
          required: true
        },
        exampleData: String,
        contentType: {
          type: String,
          required: true
        }
      },
      response: {
        exampleData: String,
        contentType: String
      }
    }
  ]
});
Schema.methods.addProject = function(project) {
  return new Promise((resolve, reject) => {
    this.save()
      .then(e => {
        resolve(e);
      })
      .catch(fail => {
        reject(fail);
      });
  });
};

module.exports = Schema;
