// Partial
// Constructs a type with all properties set to optional.
// returns a type that is subset of all the subsets of the type that is given

interface TodoPartial {
  title : string,
  completed: boolean,
  description: string
}

const updateTodoPartial = (todo: TodoPartial , fieldsToUpdate : Partial<TodoPartial>) => {
  return {...todo, ...fieldsToUpdate} // this will replace the property of todos
}

const todoPartialProp : TodoPartial = {
  completed: true,
  description: "I am being completed",
  title: "Chips"
}

const todo2 = updateTodoPartial(todoPartialProp, {
  description: "Hey would you like to add me"
})

console.log(todo2)
