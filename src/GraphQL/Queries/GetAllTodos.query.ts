import { gql } from "@apollo/client";

const GET_ALL_TODOS = gql`
  query getAllTodos {
    getAllTodos {
      id
      content
      is_completed
    }
  }
`;

export default GET_ALL_TODOS;
