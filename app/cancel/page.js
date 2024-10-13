"use client";
import { useRouter } from "next/navigation";

export default function CancelPage() {
  const router = useRouter();

  const handleGoBack = () => {
    router.push("/");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1>Your order was canceled. Please try again.</h1>
      <button
        onClick={handleGoBack}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
      >
        Go Back to Form
      </button>
    </div>
  );
}
