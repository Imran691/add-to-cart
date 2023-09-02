import CounterView from "./counter";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="font-bold text-lg">Counter App</div>
      <CounterView />
    </main>
  );
}
