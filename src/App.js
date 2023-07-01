import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/HomePage';

const App = () => {
  const projects = [
    {
      id: 1,
      name: 'PlanAway',
      description: 'PlanAway is an application that helps travelers plan their itinerary in the most optimal route saving time and money. It relies on Google Map API to get map details of the originating location of a user, the stopovers, and the routes. Travel Advisor from Rapid API was used to fetch restaurants and attractive places of visit surrounding the users\' originating location. We created an algorithm to split these activities or selected places into the number of days for their visits based on distances.',
      stack: ['TypeScript', 'JavaScript', 'React', 'Material UI'],
      image: '/images/PlanAway-Thumbnail2.png',
      source_code: 'https://github.com/udeaghad/PlanAway/',
      demo: 'https://planawaywifi.netlify.app/',
    },
    {
      id: 2,
      name: 'Basic Bank App',
      description: 'This fantastic product is specifically designed to handle all your basic payment needs, from transferring funds to receiving them and checking your transaction details and history. With our secure and reliable system, you can be assured of a hassle-free payment experience.',
      stack: ['TypeScript', 'NodeJS', 'ExpressJS', 'MySQL'],
      image: '/images/Basic-bank-App.png',
      source_code: 'https://github.com/udeaghad/Basic-Bank-App/',
      demo: 'https://documenter.getpostman.com/view/22522406/2s93eSZF1B',
    },
    {
      id: 3,
      name: 'Pick And Drop App',
      description: 'This app enables companies/individuals in small-scale delivery businesses to subscribe, receive, monitor, and update orders received from their clients. The clients can also create orders on the app and select any company for delivery services.',
      stack: ['TypeScript', 'JavaScript', 'Node.js', 'MongoDB'],
      image: '/images/pick-and-drop-app.png',
      source_code: 'https://github.com/udeaghad/Pick-and-drop',
      demo: 'https://pick-and-drop.onrender.com/api-docs',
    },    
    {
      id: 4,
      name: 'Crypto Tracker',
      description: 'This project is about building a mobile web application to check a list of metrics (numeric values) which I created using React and Redux. I selected an API that provides numeric data about cryptocurrency exchange and then developed the web app using the API.',
      stack: ['React', 'Redux', 'Jest', 'JavaScript'],
      image: '/images/crypto-app.png',
      source_code: 'https://github.com/udeaghad/crypto-market-app',
      demo: 'https://crypto-exchange-market.netlify.app/',
    },

    {
      id: 5,
      name: 'Game of throne movie app',
      description: 'This project is about building a mobile web application to check a list of movies and their details using React and Redux. I selected an API that provides numeric data about movies and then built the web app around it.',
      stack: ['HTML', 'CSS', 'JavaScript', 'Webpack', 'Jest'],
      image: '/images/movie-app.png',
      source_code: 'https://github.com/udeaghad/Movie-app',
      demo: 'https://game-of-throne-movie.netlify.app/',
    },

    {
      id: 6,
      name: "Space Travelers' Hub",
      description: 'In this Project, We worked with live data from the SpaceX API. We built a web application for a company that provides commercial and scientific space travel services. The application will allow users to book rockets and join selected space missions.',
      stack: ['React', 'Redux', 'HTML/CSS', 'JavaScript'],
      image: '/images/space-travellers-app.png',
      source_code: 'https://github.com/udeaghad/space-travelers-hub',
      demo: 'https://galaxy-travellers.netlify.app/',
    },
    {
      id: 7,
      name: 'Hotel Reservation App',
      description: 'This web application allows users to find their favorite Hotel around the world and reserve it for a specific date, find information about a hotel on the details page, and cancel a reservation. The project was to learn how to work and collaborate in large teams as obtained in real-world situations.',
      stack: ['React', 'Redux', 'Postgres', 'RSpec', 'Rails'],
      image: '/images/hotel-reservation-app.png',
      source_code: 'https://github.com/udeaghad/group-project-hotel-reservation',
      demo: 'https://hotel-reservation-i2st.onrender.com/',
    },

    {
      id: 8,
      name: 'Budget App(Xpenda)',
      description: 'This Ruby on Rails project is about building a mobile web application to manage your budget: you have a list of transactions associated with a category and see how much money is spent and on what. I created an application allowing the user to register and log in so that the data is private.',
      stack: ['Ruby', 'Rails', 'Postgres', 'RSpec'],
      image: '/images/budget-app.png',
      source_code: 'https://github.com/udeaghad/Xpenda-App-v2',
      demo: 'https://xpenda-app.onrender.com/',

    },


    {
      id: 9,
      name: 'Maths Calculator',
      description: 'This project was to learn React components, React props, and React state. It was later updated to Handle events in a React app, use React life cycle methods, and understand the mechanism of the lifting state. Also, React hooks were used to refactor the components, and Routing was implemented for this SPA.',
      stack: ['HTML/CSS', 'JavaScript', 'React'],
      image: '/images/maths-calculator-app.png',
      source_code: 'https://github.com/udeaghad/my-maths-calculator',
      demo: 'https://my-maths-calculator.netlify.app/',
    },
  ];

  return (

    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage projects={projects} />} />
      </Routes>
    </div>
  );
};

export default App;
