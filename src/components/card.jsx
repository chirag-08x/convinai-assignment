import styled from "styled-components";
import { v4 as uid } from "uuid";
import { useSelector, useDispatch } from "react-redux";
import { getSingleUser } from "../features/users/cartSlice";
import CardData from "./cardData";

const Card = () => {
  const dispatch = useDispatch();
  const { users, singleUser } = useSelector((state) => state.users);

  const noUser = Object.keys(singleUser).length === 0;

  return (
    <Wrapper>
      <div className="container">
        {noUser && (
          <article className="user-info">
            <h3>Please press a button to view users</h3>
          </article>
        )}

        <CardData />
        <article className="btns-container">
          {users.map((item, index) => {
            const { id } = item;
            return (
              <button onClick={() => dispatch(getSingleUser(id))} key={uid()}>
                {index + 1}
              </button>
            );
          })}
        </article>
      </div>
    </Wrapper>
  );
};

export default Card;

const Wrapper = styled.section`
  display: grid;
  place-items: center;
  height: 100vh;
  .container {
    width: 90vw;
    max-width: 30rem;
    background-color: var(--clr-primary-2);
    padding: 1rem;
    display: grid;
    place-items: center;
    border-radius: 0.5rem;
    box-shadow: 1px 1px 10px #cccccc;

    .btns-container {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0 1rem;
      margin-top: 1rem;

      button {
        background: transparent;
        border: none;
        font-size: 1.085rem;
        color: #333333;
        border: 1px solid black;
        border-radius: 50%;
        display: grid;
        place-items: center;
        width: 2rem;
        height: 2rem;
      }
    }
  }
`;
