import React from "react";
import { IItem } from "../../types";
import styled from "styled-components";
import { useDrag } from "react-dnd";

const Wrapper = styled.div`
  width: 100%;
  height: 60px;
  margin-top: 10px;
  padding: 0 10px;
  box-sizing: border-box;
  background-color: ${(color) => color.color};
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 10px;
  .time {
    text-align: right;
    color: gray;
    font-size: 10px;
  }
`;

interface IProps {
  data: IItem;
  color?: string;
}
export default function List(props: IProps) {
  const { data, color } = props;
  //拖追元素
  const [{ isDragging }, dragRef] = useDrag(() => ({
    type: "card",
    item: { data },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));
  
  return (
    isDragging ? <></> : (
      <Wrapper color={color} ref={dragRef}>
        <div>{data.content}</div>
        <div className="time">{data.time}</div>
      </Wrapper>
    )
  );
}
