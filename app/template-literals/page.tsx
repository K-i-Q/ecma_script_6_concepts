import Image from "next/image";


export default function Home() {
    const name = 'John';
    const age = 30;
    
    // Antes de ES6
    // const greeting = 'Hello, my name is ' + name + ' and I am ' + age + ' years old.';
    
    // Com template literals
    const greeting = `Hello, my name is ${name} and I am ${age} years old.`;
    
    // Multilinhas
    const multiline = `This is a string
    that spans multiple
    lines.`;
    

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 text-6xl">
      greeting: {
        greeting
      }
      <br />
      <br />
      multiline:{
        multiline
      }
    </main>
  );
}
