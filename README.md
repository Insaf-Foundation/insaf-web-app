Insaf Foundation Web App
Welcome to the Insaf Foundation Web App repository! This project is a web application designed to support the Insaf Foundation's charitable activities. The Insaf Foundation is committed to a range of humanitarian efforts including:

Technical education
Relief distribution to flood victims
Raising and educating orphans
Sadaqah Jariyah (ongoing charity)
Distribution of winter clothes
Plantation program
Iftar and Ramadan food distribution
Distribution of books and leaflets
Sacrifice for all
About This Project
This web app is developed using the following technologies:

Frontend: React.js
Backend: Node.js with Express.js
Database: MongoDB
Payment Integration: SSLCommerz for secure transactions
For more information about the Insaf Foundation and its initiatives, please visit our official website: www.insaffoundation.org.

Repository
The source code for the Insaf Foundation Web App can be found on GitHub: Insaf Foundation Web App Repository

Getting Started
To get started with the development of the Insaf Foundation Web App, follow these instructions:

Prerequisites
Make sure you have the following software installed:

Node.js (v14 or higher)
npm (Node Package Manager)
MongoDB
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/Insaf-Foundation/insaf-web-app.git
Navigate to the project directory:

bash
Copy code
cd insaf-web-app
Install dependencies for both frontend and backend:

bash
Copy code
# For backend
cd backend
npm install

# For frontend
cd ../frontend
npm install
Set up environment variables:

Create a .env file in the backend directory and add your MongoDB URI and SSLCommerz credentials. An example .env file might look like this:

env
Copy code
MONGODB_URI=mongodb://localhost:27017/insafdb
SSL_COMMERECE_KEY=your_ssl_commerce_key
SSL_COMMERECE_SECRET=your_ssl_commerce_secret
Run the application:

bash
Copy code
# Start the backend server
cd backend
npm start

# Start the frontend server
cd ../frontend
npm start
The application should now be running on http://localhost:3000 (frontend) and http://localhost:5000 (backend).

Contributing
We welcome contributions to improve the Insaf Foundation Web App. To contribute:

Fork the repository on GitHub.
Create a new branch for your changes.
Commit your changes and push them to your forked repository.
Submit a pull request describing your changes.
Code of Conduct
Please follow our Code of Conduct while contributing to this repository.

License
This project is licensed under the MIT License.

Contact
For any questions or support, please contact us through our website: www.insaffoundation.org.

Thank you for your interest in supporting the Insaf Foundation's mission!
