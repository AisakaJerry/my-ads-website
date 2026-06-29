import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "楽天モバイル紹介キャンペーン",
  description:
    "従業員からの楽天モバイルご紹介。お乗り換えで14,000ポイント、新規ご契約で11,000ポイントプレゼント！",
};

export default function RakutenMobilePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-red-50 to-white flex flex-col items-center justify-center px-4 py-16">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-red-600 px-6 py-5">
          {/* Rakuten logo in white */}
          <Image
            src="/rakuten-logo-white.svg"
            alt="Rakuten"
            width={120}
            height={36}
            className="mb-3"
            priority
          />
          <p className="text-white text-sm font-medium opacity-90 mb-1">
            従業員から楽天モバイルのご紹介です！
          </p>
          <h1 className="text-white text-xl font-bold leading-snug">
            楽天モバイルのご紹介です！
          </h1>
        </div>

        {/* Body */}
        <div className="px-6 py-6 space-y-5">
          {/* Points cards */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-red-50 rounded-xl p-4 text-center border border-red-100">
              <p className="text-xs text-red-500 font-semibold mb-1">お乗り換え</p>
              <p className="text-3xl font-extrabold text-red-600 leading-none">
                14,000
              </p>
              <p className="text-sm text-red-600 font-bold mt-1">ポイント</p>
            </div>
            <div className="bg-red-50 rounded-xl p-4 text-center border border-red-100">
              <p className="text-xs text-red-500 font-semibold mb-1">新規ご契約</p>
              <p className="text-3xl font-extrabold text-red-600 leading-none">
                11,000
              </p>
              <p className="text-sm text-red-600 font-bold mt-1">ポイント</p>
            </div>
          </div>

          <p className="text-gray-500 text-xs leading-relaxed">
            ※楽天会員にログインまたは新規登録後、楽天モバイル紹介キャンペーンページに遷移します。
          </p>

          {/* CTA button */}
          <a
            href="https://r10.to/hkJgUq"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-red-600 hover:bg-red-700 active:bg-red-800 text-white text-center font-bold py-4 rounded-xl transition-colors text-base shadow-sm"
          >
            ▼ キャンペーンはこちら
          </a>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-100 px-6 py-4">
          <p className="text-center text-xs text-gray-400">
            Referred by{" "}
            <a
              href="https://www.zeyuanfeng.com"
              className="text-gray-500 hover:underline"
            >
              zeyuanfeng.com
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
