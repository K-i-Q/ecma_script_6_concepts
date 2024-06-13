import Image from "next/image";


export default function Home() {
    const  greet = (name = 'Guest') => {
        console.log(`Hello, ${name}!`);
      }
      greet(); // Hello, Guest!
      greet('John'); // Hello, John!
      

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 text-6xl">
     Default Parameter
    </main>
  );
}
