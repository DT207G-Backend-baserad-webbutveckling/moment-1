-- Skapa databasen om den inte redan finns
CREATE DATABASE IF NOT EXISTS cv;

-- Använd databasen
USE cv;

-- Skapa tabellen 'courses' om den inte redan finns
CREATE TABLE IF NOT EXISTS courses (
    id INT AUTO_INCREMENT PRIMARY KEY,
    coursecode VARCHAR(255) NOT NULL,
    coursename VARCHAR(255) NOT NULL,
    syllabus TEXT,
    progression CHAR(1) NOT NULL
);

-- Infoga kursdata om tabellen är tom

-- År 1
INSERT INTO courses (coursecode, coursename, syllabus, progression)
SELECT * FROM (SELECT 'DT057G', 'Webbutveckling I', 'https://...', 'A') AS tmp
WHERE NOT EXISTS (
    SELECT coursecode FROM courses WHERE coursecode = 'DT057G'
) LIMIT 1;

INSERT INTO courses (coursecode, coursename, syllabus, progression)
SELECT * FROM (SELECT 'DT084G', 'Introduktion till programmering i JavaScript', 'https://...', 'A') AS tmp
WHERE NOT EXISTS (
    SELECT coursecode FROM courses WHERE coursecode = 'DT084G'
) LIMIT 1;

INSERT INTO courses (coursecode, coursename, syllabus, progression)
SELECT * FROM (SELECT 'DT200G', 'Grafisk teknik för webb', 'https://...', 'A') AS tmp
WHERE NOT EXISTS (
    SELECT coursecode FROM courses WHERE coursecode = 'DT200G'
) LIMIT 1;

INSERT INTO courses (coursecode, coursename, syllabus, progression)
SELECT * FROM (SELECT 'DT068G', 'Webbanvändbarhet', 'https://...', 'B') AS tmp
WHERE NOT EXISTS (
    SELECT coursecode FROM courses WHERE coursecode = 'DT068G'
) LIMIT 1;

INSERT INTO courses (coursecode, coursename, syllabus, progression)
SELECT * FROM (SELECT 'DT003G', 'Databaser', 'https://...', 'A') AS tmp
WHERE NOT EXISTS (
    SELECT coursecode FROM courses WHERE coursecode = 'DT003G'
) LIMIT 1;

INSERT INTO courses (coursecode, coursename, syllabus, progression)
SELECT * FROM (SELECT 'DT211G', 'Frontend-baserad webbutveckling', 'https://...', 'B') AS tmp
WHERE NOT EXISTS (
    SELECT coursecode FROM courses WHERE coursecode = 'DT211G'
) LIMIT 1;

INSERT INTO courses (coursecode, coursename, syllabus, progression)
SELECT * FROM (SELECT 'DT207G', 'Backend-baserad webbutveckling', 'https://...', 'B') AS tmp
WHERE NOT EXISTS (
    SELECT coursecode FROM courses WHERE coursecode = 'DT207G'
) LIMIT 1;

INSERT INTO courses (coursecode, coursename, syllabus, progression)
SELECT * FROM (SELECT 'DT208G', 'Programmering i TypeScript', 'https://...', 'B') AS tmp
WHERE NOT EXISTS (
    SELECT coursecode FROM courses WHERE coursecode = 'DT208G'
) LIMIT 1;

-- År 2
INSERT INTO courses (coursecode, coursename, syllabus, progression)
SELECT * FROM (SELECT 'IK060G', 'Projektledning', 'https://...', 'A') AS tmp
WHERE NOT EXISTS (
    SELECT coursecode FROM courses WHERE coursecode = 'IK060G'
) LIMIT 1;

INSERT INTO courses (coursecode, coursename, syllabus, progression)
SELECT * FROM (SELECT 'DT071G', 'Programmering i C#.NET', 'https://...', 'A') AS tmp
WHERE NOT EXISTS (
    SELECT coursecode FROM courses WHERE coursecode = 'DT071G'
) LIMIT 1;

INSERT INTO courses (coursecode, coursename, syllabus, progression)
SELECT * FROM (SELECT 'DT193G', 'Fullstack-utveckling med ramverk', 'https://...', 'B') AS tmp
WHERE NOT EXISTS (
    SELECT coursecode FROM courses WHERE coursecode = 'DT193G'
) LIMIT 1;

INSERT INTO courses (coursecode, coursename, syllabus, progression)
SELECT * FROM (SELECT 'DT209G', 'Webbutveckling för WordPress', 'https://...', 'B') AS tmp
WHERE NOT EXISTS (
    SELECT coursecode FROM courses WHERE coursecode = 'DT209G'
) LIMIT 1;

INSERT INTO courses (coursecode, coursename, syllabus, progression)
SELECT * FROM (SELECT 'DT191G', 'Webbutveckling med .NET', 'https://...', 'B') AS tmp
WHERE NOT EXISTS (
    SELECT coursecode FROM courses WHERE coursecode = 'DT191G'
) LIMIT 1;

INSERT INTO courses (coursecode, coursename, syllabus, progression)
SELECT * FROM (SELECT 'DT210G', 'Fördjupad frontend-utveckling', 'https://...', 'B') AS tmp
WHERE NOT EXISTS (
    SELECT coursecode FROM courses WHERE coursecode = 'DT210G'
) LIMIT 1;

INSERT INTO courses (coursecode, coursename, syllabus, progression)
SELECT * FROM (SELECT 'DT140G', 'Självständigt arbete', 'https://...', 'B') AS tmp
WHERE NOT EXISTS (
    SELECT coursecode FROM courses WHERE coursecode = 'DT140G'
) LIMIT 1;