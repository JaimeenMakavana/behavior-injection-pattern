import Link from "next/link";

const HomePage = () => {
  return (
    <div className="h-dvh flex justify-center items-center flex-col">
      <h1>
        React.js new pattern :{" "}
        <span className="font-bold">Behavior Injection</span>
      </h1>
      <div>
        <Link href={"/rbac"}>RBAC</Link>
      </div>
    </div>
  );
};

export default HomePage;
