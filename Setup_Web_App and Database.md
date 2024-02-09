# Setting Up Database with Azure

## Install

- Azure Data Studio
- SQL Server Management Studio
    - I needed this to get the name of the server.  I could not find the name in Azure Data Studio in the Dropdown or 
- SQL Server Express 2022
- Visual Studio Code



- Install SQL Server Express 2022
    - Create Server - Default is **[username]\SQLExpress**
- Install SQL Server Management Studio
- Connect to Server in SSMS
- Create a Database:
```sql
CREATE DATABASE BookStore;
```

- Create a Table:
```sql
USE BookStore;

CREATE TABLE Books (
    BookID INT PRIMARY KEY,
    Title NVARCHAR(100),
    Author NVARCHAR(100)
);
```

- Populate the Database:
```sql
USE BookStore;

INSERT INTO Books (BookID, Title, Author)
VALUES
    (1, 'The Great Gatsby', 'F. Scott Fitzgerald'),
    (2, 'To Kill a Mockingbird', 'Harper Lee'),
    (3, '1984', 'George Orwell'),
    (4, 'Pride and Prejudice', 'Jane Austen'),
    (5, 'The Catcher in the Rye', 'J.D. Salinger'),
    (6, 'Animal Farm', 'George Orwell'),
    (7, 'The Hobbit', 'J.R.R. Tolkien'),
    (8, 'The Lord of the Rings', 'J.R.R. Tolkien'),
    (9, 'The Alchemist', 'Paulo Coelho'),
    (10, 'Harry Potter and the Philosopher''s Stone', 'J.K. Rowling');
```


- Create the node back end:

- Open **cmd.exe**

- Create a new directory for your backend server project.

- Initialize a new Node.js project using npm (Node Package Manager)
    - `npm init -y`

- Install Express.js as a dependency by running:
    - `npm install express`

- Install the mssql package, which is a Microsoft SQL Server client for Node.js, to enable communication with your SQL Server database. Run:
    - `npm install mssql`


- Once that is all setup you should be able to run the app