USE master
GO 

IF NOT EXISTS (SELECT * FROM sys.databases WHERE name = 'testdb') 
BEGIN 
	CREATE DATABASE testdb
END