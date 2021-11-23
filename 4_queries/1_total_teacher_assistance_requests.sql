SELECT COUNT(*) AS total_assistances, name
FROM assistance_requests
JOIN teachers ON teacher_id = teachers.id
WHERE teacher_id = (
  SELECT id
  FROM teachers
  WHERE name = 'Waylon Boehm'
)
GROUP BY teachers.name;