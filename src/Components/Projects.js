import React, {useState} from 'react'
import PageContainer from './PageContainer';
import {
  LinkA,
  Text,
  Title,
} from '../Elements/textStyles';
import { PROJECTS, TECH } from './data';

export default function Projects() {
  const [tech, setTech] = useState('')
  const techList = TECH.map(item => {
    return <button onClick={() => setTech(item)}>{item}</button>
  })
  const projects = PROJECTS.map((project) => {
    if (project.tech.includes(tech) || tech === '') {
      return (
        <>
          <LinkA
            href={project.link}
            page={"projects"}
            size={"2.25rem"}>
            {project.title}
          </LinkA>
          <Text>{project.description}</Text>
          <Text>
            Technologies Utilized: {
              project.tech.map((tech, i) => {
                if (i !== project.tech.length - 1) {
                  return (tech + ', ')
                } else {
                  return (tech)
                }
              })
            }
          </Text>
        </>
      )
    } else {return ''}

  })

  return (
    <PageContainer>
      <Title page={"projects"}>Projects</Title>
      <div>
      {techList}
      </div>
      <div>
        {projects}
      </div>
    </PageContainer>
  )
}
