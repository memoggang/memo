const School = require('./school.js')
const school = new School();
const express = require('express');
const app = express();
const PORT = process.env.PORT;

school.init(School.Type.HIGH, School.Region.JEONBUK, 'P100000425');

  const Gupsik = async function(){
    const meal = await school.getMeal()

    var accountObj = {
      today: `${meal.month} ${meal.day}`,
      meal1: `${meal.today}`,
      meal2: `${meal.tomorrow}`,
    };
    var accountStr = JSON.stringify(accountObj);

    console.log(accountStr);
      app.get('/', function(req, res){
        res.send(accountStr);
      })
  }
  Gupsik();
app.listen(PORT);

/*
response.writeHead(200, {'Content-Type':'text/plain; charset=utf-8'});
response.end(JSON.stringify(accountStr));
*/
