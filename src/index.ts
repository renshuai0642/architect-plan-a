import { testFunction } from './test/index.ts';

testFunction();

function log(target: any, key: string, descriptor: PropertyDescriptor): PropertyDescriptor {
    const originalMethod = descriptor.value

    descriptor.value = function(...args: any[]) {
        console.log(`Method ${key} is called, the params are ${JSON.stringify(args)}`)
        return originalMethod.apply(this, args)
    }

    return descriptor
}

class Person{
    name: string
    age: number

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    @log
    say(word: string) {
        console.log(`Hello my name is ${this.name}, I am ${this.age} years old. I want to say ${word}.`)
    }
}

const p = new Person('zs', 18)

p.say('bala')
