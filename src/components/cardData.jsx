import { useSelector } from "react-redux";
import styled from "styled-components";

const CardData = () => {
  const { singleUser, single_user_loading: loading } = useSelector(
    (state) => state.users
  );

  if (loading) {
    return <h2>Loading User</h2>;
  }

  const { first_name, last_name, email, avatar } = singleUser;

  return (
    <Wrapper>
      <figure className="user-img">
        <img src={avatar} alt={first_name} />
      </figure>
      <h3 className="name">
        {first_name} {last_name}
      </h3>
      <a className="mail" href={`mailto:${email}`}>
        {email}
      </a>
    </Wrapper>
  );
};

export default CardData;

const Wrapper = styled.div`
  text-align: center;

  .user-img {
    border-radius: 50%;
    margin-bottom: 0.5rem;
    img {
      border-radius: 50%;
    }
  }

  .name {
    letter-spacing: 1px;
    margin-bottom: 0.5rem;
  }

  .mail {
    margin-bottom: 1rem;
    color: black;
  }
`;
