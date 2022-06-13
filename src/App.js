import { useEffect } from "react";
import { getUsers } from "./features/users/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import Card from "./components/card";
import styled from "styled-components";

const App = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getUsers());
    // eslint-disable-next-line
  }, []);

  if (isLoading) {
    return (
      <Wrapper>
        <h1>Loading...</h1>
      </Wrapper>
    );
  }

  return (
    <main>
      <Card />
    </main>
  );
};

export default App;

const Wrapper = styled.div`
  height: 100vh;
  display: grid;
  place-items: center;
  letter-spacing: 1px;
  font-weight: bold;
`;
