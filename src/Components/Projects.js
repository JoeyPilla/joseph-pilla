import React from 'react'
import PageContainer from './PageContainer';
import {
  LinkA,
  Text,
  Title,
} from '../Elements/textStyles';

export default function Projects() {
  return (
    <PageContainer>
      <Title page={"projects"}>Projects</Title>
      <div>
        <LinkA
          href='https://github.com/JoeyPilla/devices'
          page={"projects"}
          size={"2.25rem"}>
            Devices Database
        </LinkA>
        <Text>
          Created a full stack website with React and Node to solve an
          organizational problem within the department. The website
          enables users to create, read, update, and delete device
          pages. The website incorporated persistent data storage to
          archive the uploaded files related to each device. I also
          designed a graphQL server with an express.js backend to
          interface with a persistent online mongo database. I created
          a scraping script to import the already existing files from
          the old file system int.
        </Text>
        <Text>
          Technologies Utilized: Apollo, CSS, Express, Git, GraphQL,
          HTML, Javascript, MongoDB, Mongoose, React, React Router,
          and Styled Components.
        </Text>
      </div>
      <div>
          <LinkA
            page={"projects"}
            size={"2.25rem"}>
            Meeting Scheduler
          </LinkA>
        <Text>
          The department needed a website to give the client the
          ability to schedule tours of the lab. I created a single
          page application to email the head of the department and add
          the tour to a temporary calendar for approval.
        </Text>
        <Text>
          Technologies used: CSS, Git, Google Calendar, HTML,
          Javascript, React, and Styled Components.
        </Text>
      </div>
      <div>
        <LinkA
          href='https://github.com/JoeyPilla/joseph-pilla'
          page={"projects"}
          size={"2.25rem"}>
          Pilla.dev
        </LinkA>
        <Text>
          Developed my personal website.
        </Text>
        <Text>
          Technologies used: CSS, Git, Github Pages, HTML, Javascript,
          React, React Router, React Spring, and Styled Components.
        </Text>
      </div>
      <div>
        <LinkA
          page={"projects"}
          size={"2.25rem"}>
          To Do App
        </LinkA>
        <Text>
            Created a website to maintain my To Do list.
          </Text>
        <Text>
          Technologies used: Expo, Moment, Native-base, React, and
          React Native.
        </Text>
      </div>
      <div>

        <LinkA
          href='https://github.com/JoeyPilla/task-manager'
          page={"projects"}
          size={"2.25rem"}>
          Task Manager
        </LinkA>
        <Text>
            Developed an app using React Native to optimize my
            workflow.
          </Text>
        <Text>
          Technologies used: CSS, Git, Google calendar, HTML,
          Javascript, React-Native, React Router, React Spring, and
          Styled Components.
        </Text>
      </div>
    </PageContainer>
  )
}
