import Image from "next/image";

type TPerson = {
  name: string;
  age: number;
}

type TUser = TPerson & {
  email: string;
}

export default function Home() {

  const user: TUser = { name: 'John Doe', age: 30, email: 'john@example.com' };

  // Antes de ES6
  // const name:string = user.name;
  // const age:number = user.age;

  // Com desestruturação
  const { name, age, email } = user;
  console.log(name, age, email);

  // Renomeando variáveis
  const { name: userName, age: userAge } = user;
  console.log(userName, userAge);

  // Usando em funções
  const printUser = ({ name, age }: TPerson) => {
    return `Name: ${name}, Age: ${age}`;
  };


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 text-6xl">
      {
        printUser(user)
      }
    </main>
  );
}
