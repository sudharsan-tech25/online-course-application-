
CREATE TABLE users (
  user_id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100),
  email VARCHAR(100),
  password VARCHAR(100)
);

CREATE TABLE courses (
  course_id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(200),
  description TEXT,
  duration VARCHAR(50),
  price DECIMAL(10,2)
);

CREATE TABLE enrollment (
  enroll_id INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT,
  course_id INT,
  status VARCHAR(50),
  FOREIGN KEY (user_id) REFERENCES users(user_id),
  FOREIGN KEY (course_id) REFERENCES courses(course_id)
);
