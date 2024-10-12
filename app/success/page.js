"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function SuccessPage() {
  const router = useRouter();
  const [state, setState] = useState(() => {
    if (typeof window !== "undefined") {
      return {
        name: localStorage.getItem("name") || "",
        date: localStorage.getItem("date") || "", // Fallback to empty string if not found
        time: localStorage.getItem("time") || "", // Fallback to empty string if not found
      };
    } else {
      return { name: "", date: "", time: "" }; // Fallback values during SSR
    }
  });

  useEffect(() => {
    if (state.name && state.date && state.time) {
      console.log("State is initialized:", state); // Debug log

      const sendDataToAPI = async () => {
        const response = await fetch("/api/generate-ics", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(state),
        });

        // Fetch response as text since it's an .ics file, not JSON
        const icsFileContent = await response.text();
        console.log(icsFileContent);

        // Create a download link for the .ics file
        const blob = new Blob([icsFileContent], { type: "text/calendar" });
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "event.ics");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };

      sendDataToAPI();
    }
  }, [state]);

  const handleGoBack = () => {
    localStorage.clear();
    router.push("/");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1>Thank you for your order! A confirmation email has been sent.</h1>
      <button
        onClick={handleGoBack}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
      >
        Go Back to Form
      </button>
    </div>
  );
}
