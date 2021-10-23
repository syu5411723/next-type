import { alias } from '../components/alias'
import React, { useEffect } from 'react'

type Admin = {
  name: string
  privileges: string[]
}
type Employee = {
  name: string
  startDate: Date
}
type ElevatedEmployee = Admin & Employee
const e1: ElevatedEmployee = {
  name: "Max",
  privileges: ['create-sever'],
  startDate: new Date(),
}
// console.log(e1)

type Combinable = string | number
type Boole = boolean | number

type Universal = Combinable & Boole

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: number, b: string): string;
function add(a: string, b: number): string;
function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString()
  }
  return a + b
}

const result = add('rere', 1)
// result.map((e) =>)
console.log(result)

const userData = {
  id: '1',
  name: 'user1',
  job: {
    title: "Developer",
    description: 'Typescript',
  }
}
console.log(userData?.job?.title)



type unknownEmployee = Employee | Admin

const pringEmployInfomation = (emp: unknownEmployee) => {
  console.log(emp.name)
  if ('privileges' in emp) {
    console.log(emp.privileges)
  }
  if ('startDate' in emp) {
    console.log(emp.startDate)
  }
}

pringEmployInfomation(e1)
pringEmployInfomation({ name: 'manu', startDate: new Date })

class Car {
  drive() {
    console.log('運転中...')
  }
}
class Track {
  drive() {
    console.log('トラックを運転中...')
  }
  loadCargo(amount: number) {
    console.log('荷物を乗せています...' + amount)
  }
}

type Vehicle = Car | Track

const v1 = new Car();
const v2 = new Track();

const useVehicle = (vehicle: Vehicle) => {
  vehicle.drive();
  if (vehicle instanceof Track) {
    vehicle.loadCargo(1000)
  }
}
useVehicle(v1)
useVehicle(v2)

interface Bird {
  type: 'bird'
  flyingSpeed: number
}
interface House {
  type: 'house'
  runningSpeed: number
}

type Animal = Bird | House

const moveAnimal = (animal: Animal) => {
  let speed;
  switch (animal.type) {
    case 'bird':
      speed = animal.flyingSpeed
      break;
    case 'house':
      speed = animal.runningSpeed
  }
  console.log("移動速度 " + speed)
}
// moveAnimal()

moveAnimal({ type: 'bird', flyingSpeed: 100 })
moveAnimal({ type: 'house', runningSpeed: 130 })

type ErrorContainer = {
  // id :string;
  [prop: string]: string
}
const errorBag: ErrorContainer = {
  email: '正しいメールアドレスではありません',
  username: 'ユーザー名に記号を含めることはできません',
}

const index = () => {
  useEffect(() => {
    const userInputElement = document.getElementById("user-input")! as HTMLInputElement;
    userInputElement.value = 'Hi!'

  })
  return (
    <div>
      {/* <p></p> */}
      <input type="text" id="user-input" />
    </div>
  )
}

export default index
