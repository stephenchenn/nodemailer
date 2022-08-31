CREATE DATABASE enrolmentSystem;

CREATE TABLE Users(
    user_id SERIAL PRIMARY KEY,
    Email VARCHAR(255),
    Password VARCHAR(255),
);

CREATE TABLE Classes(
    class_id SERIAL PRIMARY KEY,
    ClassCode VARCHAR(255),
    ClassName
    ClassType
    StartTime
    EndTime
    StartDate
);

CREATE TABLE Venues(
    user_id SERIAL PRIMARY KEY,
    EMAIL VARCHAR(255),
    Password VARCHAR(255),
);