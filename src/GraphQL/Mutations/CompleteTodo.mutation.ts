import { gql } from "@apollo/client";

const COMPLETE_TODO = gql`
  mutation CompleteTodo($id: ID!) {
    completeTodo(id: $id) {
      id
      content
      is_completed
    }
  }
`;

export default COMPLETE_TODO;
