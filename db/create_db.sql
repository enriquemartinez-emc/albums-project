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
(NEWID(), 'Synchronicity', 'Synchronicity is the fifth and final studio album by English rock band the Police, released on 17 June 1983 by A&M Records', 'The Police', 'https://coverartarchive.org/release/53a7e6d5-077f-31a1-bd4d-9c4081dbd8f4/4426159553.jpg'),
(NEWID(), 'Under the Table and Dreaming', 'Under the Table and Dreaming is the debut studio album from Dave Matthews Band, released on September 27, 1994', 'Dave Matthews Band', 'https://coverartarchive.org/release/c5c9dd54-2170-4377-9d0e-7a61d988ebea/13909030336.jpg'),
(NEWID(), '90125', '90125 is the eleventh studio album by the English progressive rock band Yes, released on 7 November 1983 by Atco Records', 'Yes', 'https://coverartarchive.org/release-group/11267884-baaa-38e5-a11c-0a4907ec1b98/front'); 
GO


