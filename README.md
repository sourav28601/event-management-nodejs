# Event Management 

This API provides a set of endpoints to manage books and orders for a bookstore.

## Initial Project Setup
Follow these steps to set up and run the project locally:

1. Clone the Repository
   * `git clone https://github.com/sourav28601/event-management-nodejs.git`
   * `cd Nodejs Backend`

2. Install Dependencies
   * Ensure that Node.js and npm are installed on your system
   * Then run: `npm install`

3. Run the Application
   * Start the server with: `npm start`
   * The API will be accessible at `http://localhost:3000`

4. Create the Database
   * Run the following command to create the database using Sequelize:: `npx sequelize db:create`
   * The API will be accessible at `http://localhost:3000/api/`
   
5. Run Migrations
   * After the database is created, run migrations to set up the tables:: `npx sequelize db:migrate`
   * For run the seeder `npx sequelize db:seed:all`
