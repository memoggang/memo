const School = require('./school.js')

const school = new School();

school.init(School.Type.HIGH, School.Region.JEONBUK, 'P100000425');

const Gupsik = async function(){
  const meal = await school.getMeal()
  console.log('오늘 날짜');
  console.log(`${meal.month}월 ${meal.day}`);
  console.log(`오늘 급식`);
  console.log(meal.today||'오늘 급식 없음'+'\n');
  console.log(`내일 급식`);
  console.log(meal.tomorrow||'내일 급식 없음'+'\n');

  console.log('이번달 급식');
  console.log(meal);
  console.log(' ');


}
Gupsik();
