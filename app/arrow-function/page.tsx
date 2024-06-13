import Image from "next/image";


export default function Home() {
    // Função tradicional
    // function sum(a, b) {
    //     return a + b;
    //   }

    // Arrow function
    const sum = (a:number, b:number) => a + b;

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24 text-6xl">
            {
                sum(2, 3)
            }
        </main>
    );
}
