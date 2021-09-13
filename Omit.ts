//Omit 
//Constructs a type by picking all the proeprties from Type and then removing the specified keys

interface Todo {
  title: string,
  description: string,
  createdAt : number,
  completed: boolean
}

type todoOmitPreview = Omit<Pick<Todo, "title" | "description" | "completed">, "completed">

const omitTest : todoOmitPreview = {
  description: "Hey i am here",
  title: "Whats up bois"
}

console.log(omitTest.description);
