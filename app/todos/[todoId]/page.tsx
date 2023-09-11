import { notFound } from "next/navigation";
import { Todo } from "../TodosList";

type PageProps = {
  params: {
    todoId: string;
  };
};

export const dynamicParams = true;
const fetchTodo = async (todoId: string) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId}`,
    { next: { revalidate: 60 } }
  );
  const todo: Todo = await res.json();
  return todo;
};
export default async function TodoPage(props: PageProps) {
  const todo = await fetchTodo(props.params.todoId);
  if (!todo.id) return notFound();

  return (
    <>
      <p>
        #{todo.id} : {todo.title}
      </p>
      <p>Completed: {todo.completed ? "Yes" : "No"}</p>
      <p>By User : {todo.userId}</p>
    </>
  );
}

export async function generateStaticParams() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/");
  const todos: Todo[] = await res.json();

  const trimmedTodos = todos.splice(0, 10);

  return trimmedTodos.map((todo) => ({ todoId: todo.id.toString() }));
}
