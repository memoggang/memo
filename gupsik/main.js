<<<<<<< HEAD
const express = require('express');
const app = express();
const logger = require('morgan');
const bodyParser = require('body-parser');
const School = require('./school.js')
const PORT = process.env.PORT;
const http = require("http");
const school = new School();
let meal1_str;
let meal2_str;

school.init(School.Type.HIGH, School.Region.JEONBUK, 'P100000425');

const Gupsik = async function(){
  const meal = await school.getMeal()

  let accountObj = {
    today: `${meal.month} ${meal.day}`,
    meal1: `${meal.today}`,
    meal2: `${meal.tomorrow}`,
  };

  console.log("오늘 급식");
  console.log(accountObj.meal1);
  console.log("내일 급식");
  console.log(accountObj.meal2);

  meal1_str = JSON.stringify(accountObj.meal1)
  meal2_str = JSON.stringify(accountObj.meal2)
 }

const apiRouter = express.Router();

app.use(logger('dev', {}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use('/api', apiRouter);

apiRouter.post('/meal_today', function(req, res) {

  const responseBody = {
    "version": "2.0",
    "data" : {
      "today" : meal1_str
    }
  };

  res.status(200).send(responseBody);
});

apiRouter.post('/meal_tom', function(req, res) {
  console.log(req.body);

  const responseBody = {
    "version": "2.0",
    "data" : {
      "tomorrow" : meal2_str
    }
  };

  res.status(200).send(responseBody);
});

app.listen(PORT, function() {
  console.log("asdfasdf");
  Gupsik();
});
=======
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
>>>>>>> 6e7ffe78d05d40e7845f0554365c61a9e9b24ca2
