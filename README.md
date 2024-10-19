# Whirl-wind

## Table Of Contents

- [Project Description](#projectdescription)
- [Technologies Used](#technologiesused)
- [Key Features](#keyfeatures)
- [Installation](#installation)
- [Usage](#usage)
- [Contributors](#contributors) 
- [Credits](#credits)
- [License](#license)

## Project Description

As a travel enthusiast, there are many resources available to help plan trips. Between flight aggregators, online travel agencies, and endless accomodation options, the choices can be overwhelming. Whirlwind was created to simplify the process of planning vacations and connecting travelers. The app was designed to allow registered users to enter information about their travels, such as their destination, budget, lodging, activities, trip rating, and overall experience. 

## Technologies Used

-- MVC file structure
-- Node.js
-- Express.js
-- PostgresSQL
-- Sequelize ORM
-- HTML
-- CSS & Bootstrap CSS
-- Javascript & Handlebars.js
-- Bootstrap Carousel

## Key Features

Whirlwind requires the user to login or sign up for access to travel blog content. Once signed in, they are directed to a homepage listing all existing travel blogs, as well as a form to create a new blog post. When they navigate to their dashboard, they will see all the posts that they have created.

## Installation

In order to use this app locally, the user must install Node.js and PostgreSQL. 

GitHub repository:
https://github.com/qbres333/Project-2-Whirlwind

## Usage

To use the app locally, the user can do the following:
    -- right click on 'db' folder and open in the terminal
    -- enter 'psql -U postgres', then password
    -- type '\i schema.sql and press ENTER
    -- right click on 'server.js' file and open in the terminal
    -- run the following commands: npm i, npm run seed, node server.js
    -- In your browser, go to 'localhost:3001' and enjoy!

![login page](/img/homepage.png) 
![landing page after sign in](/img/blogs.png)
![profile](/img/profile.png)

## Contributors

![Yin-Wu](https://github.com/yinwu173)

## Credits

Bootstrap:
https://getbootstrap.com/docs/5.0/getting-started/introduction/

Bootstrap Carousel:
https://getbootstrap.com/docs/4.0/components/carousel/

Handlebars.js:
https://handlebarsjs.com/guide/

Express Routing:
https://expressjs.com/en/guide/routing.html

Content Security Policy (CSP) for ExpressJS (to allow public files in Render):
https://content-security-policy.com/examples/express-js/

## License

MIT License - see the LICENSE file for details.
