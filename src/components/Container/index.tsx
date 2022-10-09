import React, { useEffect, useRef, useState } from "react";
import Title from "../Title";
import List from "../List";
import { IItem } from "../../types/index";
import styled from "styled-components";
import * as dayjs from "dayjs";
import { useDrop } from "react-dnd";
interface IProps {
  title: string;
  setData: React.Dispatch<React.SetStateAction<IItem[]>>;
  data: IItem[];
  color?: string;
  children?: any;
  delData: (item: {data:IItem}) => void;
}

const Wrapper = styled.div`
  width: 100%;
  height: 500px;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  input {
    border-style: none;
    border-bottom: 1px solid black;
    padding-left: 10px;
    width: 70%;
    color: black;
    &:focus {
      outline: none;
    }
  }
  .content {
    flex: 1;
    overflow: scroll;
  }
`;

export default function Item(props: IProps) {
  const { setData, data, delData, title, color } = props;
  const [value, setValue] = useState("");
  const [isShow, setIsShow] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);
  //拖拽容器
  const [{ isOver }, dropRef] = useDrop(() => ({
    accept: "card",
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
    drop: (item: { data: IItem }) => {
      console.log(item.data)
      delData(item);
      setData((data) =>  [...data, {...item.data}]);
    },
  }));
  //聚焦功能
  useEffect(() => {
    if (isShow) {
      inputRef.current?.focus();
    }
  }, [isShow]);

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setData([
        ...data,
        {
          id: Date.now(),
          time: dayjs.unix(Date.now()).toString(),
          content: value,
        },
      ]);
      setIsShow(false);
    }
  };
  const add = () => {
    setIsShow(!isShow);
  };
  return (
    <Wrapper>
      <Title title={title} add={add} />
      {isShow && (
        <input
          ref={inputRef}
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={onKeyDown}
        />
      )}
      <div
        style={{ backgroundColor: isOver ? "#ffccc7" : "" }}
        className="content"
        ref={dropRef}
      >
        {data.map((item, index) => (
          <div key={item.id}>
            <List data={item} color={color} />
          </div>
        ))}
      </div>
    </Wrapper>
  );
}
