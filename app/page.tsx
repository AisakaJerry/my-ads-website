export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">ads.zeyuanfeng.com</h1>
      <p className="text-gray-500">Available promotions:</p>
      <ul className="mt-4 list-disc list-inside text-gray-700">
        <li>
          <a href="/rakutenmobile" className="text-red-600 hover:underline">
            楽天モバイル紹介キャンペーン
          </a>
        </li>
      </ul>
    </main>
  );
}
