import React from 'react'
import PageContainer from './PageContainer';
import { H1 } from '../Elements/headers';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { THEME } from '../util';

export default function Projects() {
  return (
    <PageContainer>
      <div>
        <P>
          <A href='https://github.com/JoeyPilla/devices'>
            Devices Database
          </A>
        </P>
        <P2>
          Created a full stack website with React and Node to solve an organizational problem within the department. The website enables users to create, read, update, and delete device pages. The website incorporated persistent data storage to archive the uploaded files related to each device. I also designed a graphQL server with an express.js backend to interface with a persistent online mongo database. I created a scraping script to import the already existing files from the old file system int.
        </P2>
        <P2>
          Technologies Utilized: Apollo, CSS, Express, Git, GraphQL, HTML, Javascript, MongoDB, Mongoose, React, React Router, and Styled Components.
        </P2>
      </div>
      <div>
        <P>
          <A>
            Meeting Scheduler
          </A>
        </P>
        <P2>
          The department needed a website to give the client the ability to schedule tours of the lab. I created a single page application to email the head of the department and add the tour to a temporary calendar for approval. 
        </P2>
        <P2>
          Technologies used: CSS, Git, Google calendar, HTML, Javascript, React, and Styled Components.
        </P2>
      </div>
      <div>
        <P>
        <A href='https://github.com/JoeyPilla/joseph-pilla'>
          Pilla.dev
        </A>
        </P>
        <P2>
          Developed my personal website.
        </P2>
        <P2>
          Technologies used: CSS, Git, Github Pages, HTML, Javascript, React, React Router, React Spring, and Styled Components.
        </P2>
      </div>
      <div>
        <P>
        <A>
          To Do App
        </A>
        </P>
        <P2>
            Created a website to maintain my To Do list.
          </P2>
        <P2>
          Technologies used: Expo, Moment, Native-base, React, and React Native.
        </P2>
      </div>
      <div>
        <P>
        <A href='https://github.com/JoeyPilla/task-manager'>
          Task Manager
        </A>
        </P>
        <P2>
            Developed an app using React Native to optimize my workflow. 
          </P2>
        <P2>
          Technologies used: CSS, Git, Google calendar, HTML, Javascript, React-Native, React Router, React Spring, and Styled Components.
        </P2>
      </div>
    </PageContainer>
  )
}


const A = styled.a`
  color: ${THEME.projects.color};
  height: 100%;
  text-decoration: none;
`;

const P = styled.p`
  font-size: 2.5rem;
`
const P2 = styled.p`
  font-size: 2rem;
`
