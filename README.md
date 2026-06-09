Online Course Application

Project Title

Online Course Application

Problem Statement

Students need a single platform to access course materials, enroll in courses, and track their learning progress online.

Project Objectives

- Provide online learning access.
- Enable course enrollment.
- Track student progress.
- Manage course content efficiently.
- Improve learning convenience.

Modules

1. Student Registration
2. Student Login
3. Course Management
4. Course Enrollment
5. Learning Materials Access
6. Progress Tracking
7. Admin Management
8. Logout

Front End

- HTML
- CSS
- JavaScript

Back End

- Java / Spring Boot

Database

- MySQL

Purpose

To provide an online learning platform where students can access courses and study materials anytime.

Use of the Project

This application helps students learn online, enroll in courses, and monitor their learning progress.

Use Case Diagram

                +-----------+
                |  Student  |
                +-----------+
                      |
      ----------------------------------
      |         |        |      |      |
      v         v        v      v      v
   Register   Login   Enroll  View  Track
                      Course Course Progress

                +---------+
                |  Admin  |
                +---------+
                      |
           -----------------------
           |          |          |
           v          v          v
      Add Course  Update    Manage
                  Course    Students

ER Diagram

+------------------+
|      STUDENT     |
+------------------+
| Student_ID (PK)  |
| Name             |
| Email            |
| Password         |
+------------------+
         |
         | Enrolls
         |
         v
+------------------+
|      COURSE      |
+------------------+
| Course_ID (PK)   |
| Course_Name      |
| Description      |
| Duration         |
+------------------+
         |
         | Contains
         |
         v
+------------------+
|     MATERIAL     |
+------------------+
| Material_ID (PK) |
| Course_ID (FK)   |
| Title            |
| Content          |
+------------------+

         |
         | Tracks
         |
         v
+------------------+
|     PROGRESS     |
+------------------+
| Progress_ID (PK) |
| Student_ID (FK)  |
| Course_ID (FK)   |
| Completion (%)   |
+------------------+
