import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
// import dailytasks from "../../Assets/Projects/dailytasks.jpg";
import foodrecipes from "../../Assets/Projects/foodreciepes.png"
import moviepic from "../../Assets/Projects/movies.png"
import kanban_board from "../../Assets/Projects/kanbanboard.png"
import parcel from "../../Assets/Projects/parcelpic.png"
import chatapp from "../../Assets/Projects/chatapp.png"
import tictactoe from "../../Assets/Projects/tictactoe.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={parcel}
              isBlog={false}
              title="Parcel Management System"
              description=" Implemented dual-login functionality for admin and staff roles, allowing admins to efficiently manage staff and branches, while
staff could create and update parcels, streamlining operations and reducing administrative overhead by 20 hours per month.
Resulted in improved workflow efficiency, halving the time Admins spend managing staff and branches. Staff members now
handle parcel creation and updates 30% faster. "
              ghLink="https://github.com/Rajesh1120/CourierManagementSystem"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kanban_board}
              isBlog={false}
              title="Kanban Board"
              description="A Kanban board project is an agile project management tool designed to visualize work, limit work-in-progress, and maximize efficiency. It typically involves a board with columns representing different stages of the workflow, such as To Do, In Progress, and Done.Each task or work item is represented by a card that moves through these columns as it progresses.  "
              ghLink="https://github.com/Rajesh1120/Kanban_Board"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={foodrecipes}
              isBlog={false}
              title="Food Recipies"
              description="The chat application is a real-time communication tool built using ReactJS, MongoDB, ExpressJS, WebSockets, and Node.js. It features secure JWT-based authentication, user-friendly interfaces for login and registration, and capabilities for sending messages and files such as pictures and PDFs to selected users. The app displays all users and online users, ensuring seamless and interactive user engagement."
              ghLink="https://github.com/Rajesh1120/foodrecipies"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatapp}
              isBlog={false}
              title="Mern-Chatapp"
              description="The chat application is a real-time communication tool built using ReactJS, MongoDB, ExpressJS, WebSockets, and Node.js. It features secure JWT-based authentication, user-friendly interfaces for login and registration, and capabilities for sending messages and files such as pictures and PDFs to selected users. The app displays all users and online users, ensuring seamless and interactive user engagement."
              ghLink="https://github.com/Rajesh1120/chatapp"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tictactoe}
              isBlog={false}
              title="Tic-Tac-Toe"
              description="Tic-Tac-Toe is a classic two-player game where each player alternates marking Xs and Os on a 3x3 grid. The objective is to be the first to form a horizontal, vertical, or diagonal line of three of one's own marks. This simple yet strategic game is a popular pastime that sharpens critical thinking and pattern recognition skills."
              ghLink="https://github.com/Rajesh1120/tic-tac-toe"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={moviepic}
              isBlog={false}
              title="Movies"
              description="A movies app is a dynamic platform that allows users to explore, search, and stream a vast collection of films and TV shows. Featuring intuitive navigation and personalized recommendations, it enhances the viewing experience by providing detailed information on cast, crew, and reviews. "
            />
          </Col>
          


          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dailytasks}
              isBlog={false}
              title="Daily Tasks"
              description="By using React Native , I implemented a simple mobile app which contains CRUD operations . It is user friendly flexible and fast"
              ghLink="https://github.com/Rajesh1120/todoList_ReactNative"
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
