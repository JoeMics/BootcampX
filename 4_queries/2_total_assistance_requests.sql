SELECT COUNT(*) AS total_assistances, name
FROM assistance_requests
JOIN students ON students.id = student_id
GROUP BY students.name
HAVING name = 'Elliot Dickinson';