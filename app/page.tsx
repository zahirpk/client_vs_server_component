import Image from "next/image";

export default function Home() {
  return (
    <main>
      <h1 className="flex justify-center text-4xl bg-red-700 text-white py-6">
        Fetch Data
      </h1>
      <p className="flex justify-center text-2xl py-10">
        Client Component vs Server Component
      </p>
      <h1 className="flex justify-center text-xl "> Type following url</h1>
      <div className="flex justify-center text-2xl py-5">
        <ul className="list-disc space-y-2">
          <li className="text-green-600">/csr</li>
          <li className="text-blue-600">/ssr</li>
        </ul>
      </div>
    </main>
  );
}
