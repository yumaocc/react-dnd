import  { useState } from "react";
import Header from "./components/Header";
import styled from "styled-components";
import Container from "./components/Container";
import { IItem } from "./types/index";
const Wrapper = styled.main`
  width: 60%;
  margin: 0 auto;
`;
const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-top: 30px;
`;

export default function App() {
  const [dataA, setDataA] = useState<IItem[]>([
    {
      id: 2,
      time: 12312,
      content: "小白",
    },
  ]);
  const [dataB, setDataB] = useState<IItem[]>([
    {
      id: 3,
      time: 12312,
      content: "小红",
    },
  ]);
  const [dataC, setDataC] = useState<IItem[]>([
    {
      id: 4,
      time: 12312,
      content: "小黑",
    },
  ]);

  const delData = (item:{data:IItem}) => {
    const id = item.data.id
    setDataA(data => data.filter(e => e.id !== id))
    setDataB(data => data.filter(e => e.id !== id))
    setDataC(data => data.filter(e => e.id !== id))
  }

  return (
    <Wrapper>
      <Header />
      <Content>
        <Container
          data={dataA}
          setData={setDataA}
          title="未完成"
          delData={delData}
          color="#fffbe6"
        />
         <Container
          data={dataB}
          setData={setDataB}
          title="进行中"
          delData={delData}
          color="#fcffe6"
        />
        <Container
          data={dataC}
          setData={setDataC}
          title="已完成"
          delData={delData}
          color="#e6fffb"
        />
      </Content>
    </Wrapper>
  );
}
