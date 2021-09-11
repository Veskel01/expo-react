import { gql } from "@apollo/client";

const ADD_NEW_TODO = gql`
  mutation AddNewTodo($content: String!) {
    createNewTodo(createTodoInput: { content: $content, is_completed: false }) {
      id
      content
      is_completed
    }
  }
`;

export default ADD_NEW_TODO;
