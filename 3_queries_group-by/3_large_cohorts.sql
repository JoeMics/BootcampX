SELECT 
  cohorts.name as cohort_name,
  COUNT(*) as student_count
FROM cohorts
JOIN students ON cohorts.id = students.cohort_id
GROUP BY cohort_name
HAVING count(*) >= 18
ORDER BY count(*);