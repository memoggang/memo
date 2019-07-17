const School = require('./school.js')
const school = new School();
var express = require('express');
var app = express();

school.init(School.Type.HIGH, School.Region.JEONBUK, 'P100000425');

const Gupsik = async function(){
  const meal = await school.getMeal()

  var accountObj = {
    today: `${meal.month} ${meal.day}`,
    meal1: `${meal.today}`,
    meal2: `${meal.tomorrow}`,
  };
  module.exports = app =>{
    app.post('/', function(req, res){
      res.json({
        "version": "2.0",
        "template": {
          "outputs": [
            {
              "simpleText": {
                "text": accountStr
              }
            }
          ]
        }
      })
    })
  }
}
Gupsik();
