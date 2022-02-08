CREATE DATABASE [AlbumCatalog]
GO

USE [AlbumCatalog];
GO

CREATE TABLE Album (
	Id uniqueidentifier PRIMARY KEY,
	Name NVARCHAR(200),
	Description NVARCHAR(800),
	ArtistName NVARCHAR(200),
	CoverUrl NVARCHAR(500)
);
GO

INSERT INTO [Album] (Id, Name, Description, ArtistName, CoverUrl)
VALUES 
(NEWID(), 'Synchronicity', '1983 album', 'The Police', 'https://coverartarchive.org/release/53a7e6d5-077f-31a1-bd4d-9c4081dbd8f4/4426159553.jpg'),
(NEWID(), 'Under the Table and Dreaming', '1993 album', 'Dave Matthews Band', 'https://coverartarchive.org/release/c5c9dd54-2170-4377-9d0e-7a61d988ebea/13909030336.jpg'); 
GO