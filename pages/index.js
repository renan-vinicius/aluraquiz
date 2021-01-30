import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import db from '../db.json';
import QuizBackground from '../src/components/QuizBackground';
import QuizLogo from '../src/components/QuizLogo';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;
export const Botao = styled.button`
  background: orange;
  //box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);
  border-radius: 4px;
  padding: 10px 16px;
  width:100%;
  border: none;
  display: block;
  margin-top: 2rem;
  text-transform: uppercase;
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  letter-spacing: 1.25px;
  text-transform: uppercase;
  color: #FFFFFF;
`;
export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');
  console.log('retorno do useState', name, setName);

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>The legends of Zelda</h1>
          </Widget.Header>
          <Widget.Content>
            <form
              onSubmit={function (e) {
                e.preventDefault();
                router.push(`/quiz?name=${name}`);
              }}
            >
              <input
                onChange={function (e) {
                  setName(e.target.value);
                  console.log(name);
                }}
                placeholder="Diz aí seu nome pra jogar :)"
              />
              <button type="submit" disabled={name.length === 0}>
                Jogar, {name}
              </button>
            </form>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Content>
            <h1>Quizes da galera</h1>
            <p>Lorem ipsum</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="//github.com/renan-vinicius" />
    </QuizBackground>
  );
}
