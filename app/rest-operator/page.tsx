import Image from "next/image";


export default function Home() {
    const [first, second, ...restOne] = [1, 2, 3, 4, 5];
    console.log(first, second); // 1 2
    console.log(restOne); // [3, 4, 5]

    const { a, b, ...restTwo } = { a: 1, b: 2, c: 3, d: 4 };
    console.log(a, b); // 1 2
    console.log(restTwo); // { c: 3, d: 4 }


    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24 text-6xl">
            restOne: {
                restOne
            }
            <br />
            <br />
        </main>
    );
}
