SELECT name, email, phone
FROM students
WHERE github IS NULL
AND cohort_id IS NOT NULL;
