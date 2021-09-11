import { gql } from "@apollo/client";

const UPDATE_TODO = gql`
  mutation UpdateTodo($id: ID!, $content: String!) {
    updateTodo(updateTodoInput: { id: $id, newContent: $content }) {
      id
      content
      is_completed
    }
  }
`;

export default UPDATE_TODO;
