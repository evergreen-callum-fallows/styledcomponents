import React from 'react';
import styled from 'styled-components';
import './App.css';


const theme = {
  colors: {
    white: "#ffffff",
    green: {
      0: "#39b54a",
      75: "#6bc878",
      50: "#9cdaa4",
      25: "#cdecd2",
      10: "#ebf7ec",
      100: "#36ab45"
    },
    yellow: {
      0: "#ffc805",
      75: "#ffd644",
      50: "#ffe382",
      25: "#fff1c0",
      10: "#fff9e6",
      100: "#8d6e00"
    },
    gray: {
      0: "#706f6f",
      75: "#939393",
      50: "#b7b7b7",
      25: "#dbdbdb",
      5: "#f7f7f7",
      10: "#f0f0f0",
    },
    teal: {
      0: "#69c0ac",
      75: "#8fd0c1",
      50: "#afd9cf",
      25: "#d9efea"
    },
    aqua: {
      0: "#d4edfc",
      75: "#dff2fd",
      50: "#e9f6fd",
      25: "#f4fafe",
    },
    ruby: {
      0: "#d8338b",
      75: "#e474b1",
      50: "#eca4cb",
      25: "#f5d3e5",
      10: "#fae9f3",
    }
  }
}


const Title = styled.h4`
  font-size: 16px;
  color: ${theme.colors.gray["0"]};
  text-transform: uppercase;
  margin: 0;
`;

const Text = styled.p`
  text-transform: capitalize;
  display: block;
  color: #000000;
  margin: 0 0 16px;
  font-size: 15px;
`;

const Name = styled.h1`
  font-weight: 500;
  display: block;
  font-size: 16px;
  color: ${theme.colors.gray["0"]};
`;

const List = styled.ul`
  list-style-type: none;
  box-shadow: 1px 1px 1px black;
  padding: 16px;
  border-style: solid;
  border-color: #939393;
  border-width: 1px;
  border-radius: 16px;
`;

const ListItem = styled.li`
  margin-top: 2rem;
`;

const Link = styled.a`
  -webkit-transition: all 0.15s ease-out;
  transition: all 0.15s ease-out;
  cursor: pointer;
  -webkit-text-decoration: none;
  text-decoration: none;
  outline: none;
  color: #36ab45;
  font-size: 15px;
  font-weight: 500;
`

const Divider = styled.hr`
  font-size: 1.5em;
`;

const Wrapper = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  justify-content: space-evenly;
  color: #ffffff;
  text-align: left;
`;

const CardComponent = (props: ICardInterface): JSX.Element => {
  return <List>
    <ListItem>
      <Name>{props.name}</Name>
      <Title>{props.nhsNumber}</Title>
      <Divider role="separator" aria-orientation="horizontal"/>
    </ListItem>
    <ListItem>
      <Title>Gender</Title>
      <Text>{props.gender}</Text>
    </ListItem>
    <ListItem>
      <Title>Born</Title>
      <Text>{props.date_of_birth}</Text>
      <Divider role="separator" aria-orientation="horizontal"/>
    </ListItem>
    <ListItem>
      <Link href="#">See details</Link>
    </ListItem>
  </List>
}

const listData = [
  {
    name: "WILLIAMS, Jonathon Simson",
    nhsNumber: "123 567 766",
    gender: "male",
    date_of_birth:"14-Jul-1956 (39y)"
  },
  {
    name: "WILLIAMS, Jonathon Simson",
    nhsNumber: "123 567 766",
    gender: "male",
    date_of_birth:"14-Jul-1956 (39y)"
  },
  {
    name: "WILLIAMS, Jonathon Simson",
    nhsNumber: "123 567 766",
    gender: "male",
    date_of_birth: ""
  },
  {
    name: "WILLIAMS, Jonathon Simson",
    nhsNumber: "123 567 766",
    gender: "male",
    date_of_birth:"14-Jul-1956 (39y)"
  }]

interface ICardInterface {
  name: string;
  nhsNumber: string;
  gender: string;
  date_of_birth: string
}

/* Cards */
const Cards = listData && listData.map(({date_of_birth, gender, name, nhsNumber}) =>
    <CardComponent gender={gender} nhsNumber={nhsNumber} name={name} date_of_birth={date_of_birth}></CardComponent>)

function App() {
  return (
    <div className="App">
      <Wrapper>
        {Cards}
      </Wrapper>
    </div>
  );
}

export default App;
