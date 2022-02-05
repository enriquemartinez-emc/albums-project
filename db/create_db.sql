CREATE DATABASE [MusicCatalog]
GO

USE [MusicCatalog];
GO

CREATE TABLE Album (
	AlbumId uniqueidentifier PRIMARY KEY,
	Name NVARCHAR(200),
	Description NVARCHAR(200),
	ArtistName NVARCHAR(200),
	CoverUrl NVARCHAR(200)
);
GO

INSERT INTO [Album] (AlbumId, Name, Description, ArtistName, CoverUrl)
VALUES 
(NEWID(), 'Synchronicity', '1983 album', 'The Police', 'http://coverart.com'),
(NEWID(), 'Marching Ants', '1993 album', 'Dave Matthews Band', 'http://coverart.com'); 
GO