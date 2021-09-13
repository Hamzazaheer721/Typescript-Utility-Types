//utility types

// ====================== Record ==================== 
//used for mapping the properties of one type to another type
//constructs type whose property keys are keys and whose property values are Type

type Person = {
  city : string,
  age : number
}

interface Demon{
  city: string,
  age: number
}

type Name = "Hamza" | "Arbaz" | "Sikander"

const recordImplementation: Record<Name,Person> = {
  Arbaz: {age: 12, city: "Islamabad"},
  Hamza: {age : 21, city: "Lahore"},
  Sikander: {age : 32, city: "Faisalabad"}
}

const recordImplementationWithInterface: Record<Name,Demon> = {
  Arbaz: {age: 12, city: "Islamabad"},
  Hamza: {age : 21, city: "Lahore"},
  Sikander: {age : 32, city: "Faisalabad"}
}

console.log(recordImplementation.Arbaz)
console.log(recordImplementationWithInterface.Arbaz)


//Pick