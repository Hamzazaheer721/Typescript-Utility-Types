interface IAnimal {
  name: string;
  age: string;
}

type ModifyProperty<Interface, Key extends keyof Interface, NewType>  = Omit<Interface, Key> & {[Key in keyof Interface]: NewType}


type INewAnimal = ModifyProperty<IAnimal, "age", number>

type INew1Animal = ModifyProperty<IAnimal,"age",{
  b: number;
}>

// const newAnimal2: INew1Animal = {
//   age: {
//     b: 21
//   },
//   name
// }