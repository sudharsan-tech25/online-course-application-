# ER Diagram - Online Course Application

```text
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

+------------------+
|      ADMIN       |
+------------------+
| Admin_ID (PK)    |
| Name             |
| Email            |
+------------------+
         |
         | Manages
         |
         v
+------------------+
|      COURSE      |
+------------------+
```
