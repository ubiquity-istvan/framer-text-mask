import Image from "next/image";
import MaskTextBlock from "./components/MaskTextBlock";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="font-bold text-3xl">Text animations</h1>
      <MaskTextBlock />
    </main>
  );
}
