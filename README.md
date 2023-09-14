# Lunch Location Randomizer - FE
## Problem Statement
Team members often face the challenge of collectively deciding on a lunch location. This process can be time-consuming and may lead to disagreements, especially when there are varying preferences within the team. To streamline this decision-making process, we have developed a Lunch Location Randomizer application.
## Technologies Used
- ⚛️ React
- 🧰 TypeScript
- 📡 Axios
- 📦 MUI
## Description / Features
The Lunch Location Randomizer FE is a web application that allows a team to quickly and fairly select a lunch location. This application works together with a Spring-boot application that serves as the BE. Here's how it works:

- <b>Input Lunch Options:</b> One team member will input all the options each team member has. These options could be different restaurants or food places they'd like to consider for lunch.
    - <b>Displaying options input: </b> The application will also display options inputted by the team members.
    - <b>Removing options</b>: The application also allows removing of inputted options in case the team memebrs wanted to remove one of the options.

- <b>Randomize Selection:</b> Once all team members have agreeded on the lunch options and , the application randomly selects one of the options as the final lunch location. This eliminates the need for lengthy discussions and ensures a fair selection process.

- <b>Past Records</b>: The application keeps a record of past lunch choices, making it easy to track where the team has previously gone for lunch.
    - <b> Clearing all Past Record </b> : The application also allows clearing of all the past records.

## Usage
To Run the application in you local machine, follow these steps
### Prerequisites
Make sure you have the following installed:

<b>Node.js</b>: If you don't have Node.js installed, download it from [nodejs.org](https://nodejs.org/) and follow the installation instructions.

<b>npm</b>: npm is the package manager for Node.js, and it comes bundled with Node.js. You can check if it's installed by running `npm -v` in your command prompt.

### Installation & Setup
1. Open Command Prompt:
    - Press the Windows symbol key, type `cmd` and hit Enter to open Command Prompt.
2. Clone the Repository
    - Use teh `git clone` command to clone the Lunch Location Randomizer FE repository to your local machine:
    ```sh
    git clone <respository URl>
    ```
3. Navigate to the Project Folder
    - Change your current directory to the project folder:
    ```sh
    cd <project folder>
    ```
4. Install Dependencies:
    - Use `npm` to install the project's dependencies:
    ```sh
    npm install
    ```
### Running the Application
Start the Development Server:
- Run the following command to start the development server:
    ```sh
    npm run dev
    ```
Once the development server is running, open your web browser and go to http://localhost:3000 to access the Lunch Location Randomizer application.

## Room For Improvement / Future Features
There are many ways that this app can be improved upon! Here is a list of some ideas for future improvements:
- Adding location link for the final location
    - When click upon, would open google map to nearest location
- Allowing input across multiple devices

## Author
- Name : Chester Ng
- Email : chesternyk19@gmail.com
- LinkedIn Profile : https://www.linkedin.com/in/chester-ng-b81222214

