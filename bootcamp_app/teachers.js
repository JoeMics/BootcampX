const { Pool } = require('pg');

const pool = new Pool({
  user: 'labber',
  password: 'labber',
  host: 'localhost',
  database: 'bootcampx'
});

const cohortMonth = process.argv[2];

pool.query(`
SELECT 
  teachers.name AS teacher,
  cohorts.name AS cohort,
  COUNT(*) AS total_assistances
FROM assistance_requests
JOIN students ON student_id = students.id
JOIN cohorts ON cohort_id = cohorts.id
JOIN teachers ON teacher_id = teachers.id
WHERE cohorts.name = '${cohortMonth}'
GROUP BY teachers.name, cohorts.name
ORDER BY teacher;

`)
.then(res => {
  res.rows.forEach(teacher => {
    console.log(`${teacher.cohort}: ${teacher.teacher}`);
  })
})
.catch(err => {
  console.error('query error', err.stack);
});