### How we worked on this project
---
The goal was to use JavaScript, React, Express and MongoDB to develop an app showing an interactive Co2 footprint. We were initially 3 people in our team, but had to manage with only two very early on due to one of us falling ill.

- We built the app based on Excalidraw designs.
- Trello was used to organise tasks throughout.
- Git was used to manage branches and pull requests.

### How to navigate the project
---
- Heavy reliance on individual component of state.
- Testing was done with node.js unit tests and Cypress.
- Highcharts (graph) and Mui (UI) libraries were used.

### Why we build the project this way
---
- We didn't use Redux to manage state as it was against the remit of the project specs, So `useState` was used.

- The goal to be to reinforce React basics and an exercise of project management within a group. And futher
explore react concepts so the design and implentation changed as we developed a deeper understanding.

- This led to a number of things we'd have liked to have fixed/changed but time and losing a group member didn't allow.

### If we had more time we would change...
---
- Design functionality around a solid API or dataset, and intergrate with tests rather than build testing later.
- Refactor code and merge redundant components that developed after adding pagination. 
- Factor in all possible design features in relation to state from the beginning. 

### Available scripts
---
- `npm install` from inside both '/client' and '/server' for dependencies. 
- `npm run seeds` Within the '/server' file enter to seed the DB.
- `npm run server:dev` within '/server' to start server. 
- `npm start` inside '/client' to start client at Localhost:3000.

