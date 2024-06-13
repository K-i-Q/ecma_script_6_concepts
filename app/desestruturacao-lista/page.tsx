import Image from "next/image";


export default function Home() {
    const numbers:number[] = [1, 2, 3, 4, 5];

    // Antes de ES6
    // const first = numbers[0];
    // const second = numbers[1];
    
    // Com desestruturação
    const [first, second, ...rest] = numbers;
    console.log(first, second); // 1 2
    console.log(rest); // [3, 4, 5]
    
    // Usando com funções
    const getFirstTwo = ([first, second]: number[]) => {
      return `First: ${first}, Second: ${second}`;
    };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 text-6xl">
      {
        getFirstTwo(numbers)
      }
    </main>
  );
}
