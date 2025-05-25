-- 1. Users 
INSERT INTO Users (user_id, full_name, email, city, registration_date) VALUES
(1, 'Arun Kumar', 'arun.kumar@example.com', 'Chennai', '2025-01-05'),
(2, 'Divya Lakshmi', 'divya.lakshmi@example.com', 'Coimbatore', '2025-01-10'),
(3, 'Sathish Raj', 'sathish.raj@example.com', 'Madurai', '2025-01-15'),
(4, 'Kavya Ramesh', 'kavya.ramesh@example.com', 'Tiruchirappalli', '2025-02-01'),
(5, 'Praveen Kumar', 'praveen.kumar@example.com', 'Salem', '2025-02-10'),
(6, 'Janani Priya', 'janani.priya@example.com', 'Chennai', '2025-02-15'),
(7, 'Karthik Vignesh', 'karthik.vignesh@example.com', 'Madurai', '2025-02-20'),
(8, 'Vaishnavi Shree', 'vaishnavi.shree@example.com', 'Erode', '2025-03-01'),
(9, 'Muthukumar', 'muthukumar@example.com', 'Thanjavur', '2025-03-10'),
(10, 'Surya Narayanan', 'surya.narayanan@example.com', 'Vellore', '2025-03-12');


-- 2. Events
INSERT INTO Events (event_id, title, description, city, start_date, end_date, status, organizer_id) VALUES
(1, 'Tamil Tech Fest', 'Technology innovations across Tamil Nadu.', 'Chennai', '2025-07-10 09:00:00', '2025-07-10 17:00:00', 'upcoming', 1),
(2, 'AgriTech Summit', 'Technology in agriculture.', 'Coimbatore', '2025-06-15 09:00:00', '2025-06-15 16:00:00', 'completed', 2),
(3, 'Smart Madurai 2025', 'Smart city innovations.', 'Madurai', '2025-08-01 10:00:00', '2025-08-01 18:00:00', 'upcoming', 3),
(4, 'Women in AI', 'Empowering women in AI.', 'Chennai', '2025-07-20 09:00:00', '2025-07-20 15:00:00', 'upcoming', 4),
(5, 'Cybersecurity Workshop', 'Awareness and tools.', 'Salem', '2025-07-05 10:00:00', '2025-07-05 14:00:00', 'upcoming', 5),
(6, 'Data Science Bootcamp', 'Basics to advanced analytics.', 'Chennai', '2025-06-25 09:30:00', '2025-06-26 17:00:00', 'completed', 6),
(7, 'ReactJS Hands-on', 'Frontend web dev training.', 'Erode', '2025-08-10 10:00:00', '2025-08-11 16:00:00', 'upcoming', 7),
(8, 'AI & Ethics', 'Ethical implications of AI.', 'Thanjavur', '2025-08-15 11:00:00', '2025-08-15 14:00:00', 'upcoming', 8),
(9, 'Cloud Computing Basics', 'Introduction to cloud services.', 'Vellore', '2025-07-30 10:00:00', '2025-07-30 15:00:00', 'upcoming', 9),
(10, 'Open Source Meetup', 'FOSS tools and trends.', 'Madurai', '2025-08-20 09:00:00', '2025-08-20 13:00:00', 'upcoming', 10);


-- 3. Sessions
INSERT INTO Sessions (session_id, event_id, title, speaker_name, start_time, end_time) VALUES
(1, 1, 'Opening Keynote', 'Dr. Meenakshi Sundaram', '2025-07-10 09:00:00', '2025-07-10 09:45:00'),
(2, 2, 'Smart Farming with AI', 'Divya Lakshmi', '2025-06-15 09:30:00', '2025-06-15 11:00:00'),
(3, 3, 'IoT for Madurai', 'Sathish Raj', '2025-08-01 10:00:00', '2025-08-01 12:00:00'),
(4, 4, 'AI Women Leaders Panel', 'Kavya Ramesh', '2025-07-20 09:15:00', '2025-07-20 10:30:00'),
(5, 5, 'Cyber Threats and Solutions', 'Praveen Kumar', '2025-07-05 10:00:00', '2025-07-05 12:00:00'),
(6, 6, 'Python for Data Science', 'Janani Priya', '2025-06-25 09:30:00', '2025-06-25 12:00:00'),
(7, 7, 'React Hooks Workshop', 'Karthik Vignesh', '2025-08-10 10:00:00', '2025-08-10 12:30:00'),
(8, 8, 'Bias in AI Models', 'Vaishnavi Shree', '2025-08-15 11:00:00', '2025-08-15 12:30:00'),
(9, 9, 'AWS vs Azure', 'Muthukumar', '2025-07-30 10:00:00', '2025-07-30 11:30:00'),
(10, 10, 'Open Source in 2025', 'Surya Narayanan', '2025-08-20 09:00:00', '2025-08-20 10:45:00');

-- 4. Registrations
INSERT INTO Registrations (registration_id, user_id, event_id, registration_date) VALUES
(1, 1, 1, '2025-06-01'),
(2, 2, 2, '2025-06-05'),
(3, 3, 3, '2025-07-10'),
(4, 4, 4, '2025-06-20'),
(5, 5, 5, '2025-06-25'),
(6, 6, 6, '2025-06-01'),
(7, 7, 7, '2025-07-20'),
(8, 8, 8, '2025-07-25'),
(9, 9, 9, '2025-07-01'),
(10, 10, 10, '2025-07-30');


-- 5. Feedback
INSERT INTO Feedback (feedback_id, user_id, event_id, rating, comments, feedback_date) VALUES
(1, 2, 2, 5, 'Excellent session on agriculture.', '2025-06-16'),
(2, 4, 4, 4, 'Inspiring women speakers!', '2025-07-21'),
(3, 6, 6, 4, 'Very practical and hands-on.', '2025-06-26'),
(4, 3, 3, 5, 'Loved the smart city ideas.', '2025-08-02'),
(5, 5, 5, 3, 'Informative, but short.', '2025-07-05'),
(6, 8, 8, 5, 'Important topic, well presented.', '2025-08-15'),
(7, 9, 9, 4, 'Good comparison of platforms.', '2025-07-30'),
(8, 10, 10, 5, 'Loved the energy!', '2025-08-20'),
(9, 1, 1, 4, 'Good opening to the fest.', '2025-07-10'),
(10, 7, 7, 5, 'Best frontend session so far.', '2025-08-11');


-- 6. Resources
INSERT INTO Resources (resource_id, event_id, resource_type, resource_url, uploaded_at) VALUES
(1, 1, 'pdf', 'https://portal.com/resources/tamiltech2025_agenda.pdf', '2025-07-01 12:00:00'),
(2, 2, 'image', 'https://portal.com/resources/agritech_poster.jpg', '2025-06-10 09:00:00'),
(3, 3, 'link', 'https://portal.com/resources/madurai_smartcity', '2025-07-25 14:00:00'),
(4, 4, 'pdf', 'https://portal.com/resources/women_ai_speakers.pdf', '2025-07-18 13:30:00'),
(5, 5, 'pdf', 'https://portal.com/resources/cybersecurity_notes.pdf', '2025-07-03 11:00:00'),
(6, 6, 'video', 'https://portal.com/resources/datascience_bootcamp.mp4', '2025-06-24 15:30:00'),
(7, 7, 'code', 'https://portal.com/resources/reactjs_samples.zip', '2025-08-05 10:00:00'),
(8, 8, 'pdf', 'https://portal.com/resources/ai_ethics_paper.pdf', '2025-08-10 12:30:00'),
(9, 9, 'link', 'https://portal.com/resources/cloud_computing_intro', '2025-07-25 09:45:00'),
(10, 10, 'image', 'https://portal.com/resources/open_source_banner.jpg', '2025-08-15 14:00:00');
