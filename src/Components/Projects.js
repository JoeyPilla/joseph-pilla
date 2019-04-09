import React, {useState} from 'react'
import PageContainer from './PageContainer';
import styled from 'styled-components';
import {
  LinkA,
  Text,
  Title,
} from '../Elements/textStyles';
import { PROJECTS, TECH } from './data';

function removeItem(item, tech) {
  return (
    tech.filter(value => {
      return item !== value;
    })
  );
}

function grabContainingList(arr, items) {
  let temp = arr;
  if (items.length > 0) {
    temp = [];
    arr.forEach(element => {
      items.forEach(item => {
        if (element.tech.includes(item)) {
          temp.push(element);
        }
      });
    });
    temp = temp.reduce((acc, value) => {
      if (!acc.includes(value)) {
        acc.push(value);
      }
      return acc;
    }, []);
  }
  temp = temp.map(project => {
    return (
      <div key={project.title}>
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
      </div>
    )
  })
  return temp
}

export default function Projects() {
  const [tech, setTech] = useState([]);

  const techList = TECH.map(item => {
    return (
      <Button
        key={item}
        onClick={() => setTech([...tech, item])}
        color={'#0DD269'}>
      {item}</Button>
    )
  });
  const techListClicked = tech.map(item => {
    return (
      <Button
        onClick={() => setTech(removeItem(item, tech))}
        color={'#FF5F5F'}>
      {item}</Button>
    )
  });
  var projects =  grabContainingList(PROJECTS, tech)

  return (
    <PageContainer>
      <Title page={"projects"}>Projects</Title>
      <ButtonContainer>
      {techList}
      </ButtonContainer>
      <ButtonContainer>
          {techListClicked}
      </ButtonContainer>
      <div>
        {projects}
      </div>
    </PageContainer>
  )
}

export const Button = styled.button`
  :hover {
    background-color: ${props => props.color}
  }
  background-color: #3399FF;
  border-radius: 15px;
  border-width: 0px;
  color: white;
  cursor: pointer;
  display: inline;
  margin:2px;
  padding: 10px;
  transition: background-color .2s ease-in;
`;
export const ButtonContainer = styled.div`
  border-radius: 15px;
  justify-content: center;
  color: white;
  border-width: 0px;
  margin:2px;
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
`;