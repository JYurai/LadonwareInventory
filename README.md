Create a SQL DB and table with the following query
Create Database:
USE [master]
GO

/****** Object:  Database [InventoryDB]    Script Date: 7/29/2021 11:24:20 AM ******/
CREATE DATABASE [InventoryDB]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'InventoryDB', FILENAME = N'F:\Program Files\MSSQL15.MSSQLSERVER\MSSQL\DATA\InventoryDB.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'InventoryDB_log', FILENAME = N'F:\Program Files\MSSQL15.MSSQLSERVER\MSSQL\DATA\InventoryDB_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO

IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [InventoryDB].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO

ALTER DATABASE [InventoryDB] SET ANSI_NULL_DEFAULT OFF 
GO

ALTER DATABASE [InventoryDB] SET ANSI_NULLS OFF 
GO

ALTER DATABASE [InventoryDB] SET ANSI_PADDING OFF 
GO

ALTER DATABASE [InventoryDB] SET ANSI_WARNINGS OFF 
GO

ALTER DATABASE [InventoryDB] SET ARITHABORT OFF 
GO

ALTER DATABASE [InventoryDB] SET AUTO_CLOSE OFF 
GO

ALTER DATABASE [InventoryDB] SET AUTO_SHRINK OFF 
GO

ALTER DATABASE [InventoryDB] SET AUTO_UPDATE_STATISTICS ON 
GO

ALTER DATABASE [InventoryDB] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO

ALTER DATABASE [InventoryDB] SET CURSOR_DEFAULT  GLOBAL 
GO

ALTER DATABASE [InventoryDB] SET CONCAT_NULL_YIELDS_NULL OFF 
GO

ALTER DATABASE [InventoryDB] SET NUMERIC_ROUNDABORT OFF 
GO

ALTER DATABASE [InventoryDB] SET QUOTED_IDENTIFIER OFF 
GO

ALTER DATABASE [InventoryDB] SET RECURSIVE_TRIGGERS OFF 
GO

ALTER DATABASE [InventoryDB] SET  ENABLE_BROKER 
GO

ALTER DATABASE [InventoryDB] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO

ALTER DATABASE [InventoryDB] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO

ALTER DATABASE [InventoryDB] SET TRUSTWORTHY OFF 
GO

ALTER DATABASE [InventoryDB] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO

ALTER DATABASE [InventoryDB] SET PARAMETERIZATION SIMPLE 
GO

ALTER DATABASE [InventoryDB] SET READ_COMMITTED_SNAPSHOT OFF 
GO

ALTER DATABASE [InventoryDB] SET HONOR_BROKER_PRIORITY OFF 
GO

ALTER DATABASE [InventoryDB] SET RECOVERY FULL 
GO

ALTER DATABASE [InventoryDB] SET  MULTI_USER 
GO

ALTER DATABASE [InventoryDB] SET PAGE_VERIFY CHECKSUM  
GO

ALTER DATABASE [InventoryDB] SET DB_CHAINING OFF 
GO

ALTER DATABASE [InventoryDB] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO

ALTER DATABASE [InventoryDB] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO

ALTER DATABASE [InventoryDB] SET DELAYED_DURABILITY = DISABLED 
GO

ALTER DATABASE [InventoryDB] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO

ALTER DATABASE [InventoryDB] SET QUERY_STORE = OFF
GO

ALTER DATABASE [InventoryDB] SET  READ_WRITE 
GO

Create Table :
USE [InventoryDB]
GO

/****** Object:  Table [dbo].[Products]    Script Date: 7/29/2021 11:24:42 AM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Products](
	[ProductId] [int] IDENTITY(1,1) NOT NULL,
	[ProductName] [varchar](500) NOT NULL,
	[Category] [varchar](500) NOT NULL,
	[Price] [varchar](500) NULL,
	[Quantity] [varchar](500) NULL,
	[Inventory] [varchar](500) NOT NULL,
	[Material1] [varchar](500) NOT NULL,
	[Material2] [varchar](500) NOT NULL,
	[PhotoFileName] [nvarchar](500) NULL
) ON [PRIMARY]
GO

2. Cambiar El localhost en el archivo "F:\Users\Julio\Documents\WebApplication\ui\InventoryUI\src\app\shared.service.ts"
  "readonly APIUrl = 'http://localhost:56073/api';
    readonly PhotoUrl = 'http://localhost:56073/Photos/';"
  Por el localhost de su ordenador (El localhost que aparece al correr el WebApi)

3. Correr el WebAPI (la carpeta F:\Users\Julio\Documents\WebApplication\WebAPI\WebAPI.sln en IIS Express ("Su browser de preferencia"))

4. Debe tener instalado el node.js y el Angular (con npm install) versiones utilizadas:
Angular CLI: 12.1.2
Node: 16.4.2 (Unsupported) 
Package Manager: npm 7.18.1

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1201.2
@angular-devkit/build-angular   12.1.2
@angular-devkit/core            12.1.2
@angular-devkit/schematics      12.1.2
@schematics/angular             12.1.2
rxjs                            6.6.7
typescript                      4.3.5

5. Dependencias a instalar
npm install rxjs
ng add @ng-bootstrap/ng-bootstrap
npm install ng2-currency-mask --save

6. Correr el UI en Angular con ng serve --open
