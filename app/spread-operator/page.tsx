import Image from "next/image";


export default function Home() {
    const arr1 = [1, 2, 3];
    const arr2 = [4, 5, 6];
    
    // Combinando arrays
    const combined = [...arr1, ...arr2];
    
    const obj1 = { a: 1, b: 2 };
    const obj2 = { c: 3, d: 4 };
    
    // Combinando objetos
    const combinedObj = { ...obj1, ...obj2 };
    console.log(combinedObj); // { a: 1, b: 2, c: 3, d: 4 }
    
    // Clonando arrays e objetos
    const cloneArray = [...arr1];
    const cloneObject = { ...obj1 };
    console.log(cloneArray); // [1, 2, 3]
    console.log(cloneObject); // { a: 1, b: 2 }
    

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 text-6xl">
     combined: {
        combined
     }
     <br />
     <br />
    </main>
  );
}
