//Pick 
//Constructs a type by picking the set of properties Keys

interface Todo {
  title: string,
  description: string,
  completed: boolean
}

type TodoPreview = Pick<Todo, "title" | "completed">

const todo : TodoPreview = {
  completed: false,
  title: "Clean My Room"  
}

console.log(todo)


