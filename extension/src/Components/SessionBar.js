import React from "react";
import styled from "styled-components/macro";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Minutes = styled.button`
  width: 30px;
  height: 32px;
  font-size: 12px;
  padding: 4px;
`;

function SessionBar(props) {
  const { onClick } = props;

  const sessionsArray = [5, 10, 15, 20, 25, 30, 40, 50, 60, 90];
  return (
    <Wrapper>
      {sessionsArray.map((session) => {
        return <Minutes onClick={() => onClick(session)}>{session}</Minutes>;
      })}
    </Wrapper>
  );
}

export default SessionBar;