import { Card } from "../../components";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full flex-grow md:ml-20 mb-16 md:mb-0">
      <div className="w-full flex justify-center items-center my-4">
        <Card title="Settings" className="w-full max-w-2xl text-center">
          Test
        </Card>
      </div>
    </div>
  );
}
