import { gql } from "@apollo/client";

const DELETE_TODO = gql`
  mutation deleteTodo($id: ID!) {
    deleteTodo(id: $id)
  }
`;

export default DELETE_TODO;
