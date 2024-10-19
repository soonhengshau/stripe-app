"use client";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();
  const [state, setState] = useState([]);
  const [expire, setExpire] = useState(new Date("2024-11-15"));
  const [data] = useState([
    ["1", "Alvin Khoo", "2024-10-29", "7:00pm", 1],
    ["2", "Clarissa Li", "2024-10-29", "7:00pm", 1],
    ["3", "Chloe Chiam", "2024-10-29", "7:00pm", 1],
    ["4", "Joyce Ng", "2024-10-29", "7:00pm", 1],
    ["5", "Liu Yuqi", "2024-10-29", "7:00pm", 1],
    ["6", "Amy Li", "2024-10-29", "7:00pm", 2],
    ["7", "Ang Ja Vier", "2024-10-29", "6:00pm", 3],
    ["8", "Clarence Lim", "2024-10-29", "6:00pm", 3],
    ["9", "Alyssa Li", "2024-10-29", "6:00pm", 4],
    ["10", "Chloe Ow", "2024-10-29", "6:00pm", 4],
    ["11", "Coen Chiam", "2024-10-29", "6:00pm", 4],
  ]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("/api/db");
      const data = await response.json();
      if (response.ok) {
        // setState(data);
        console.log(data);
      }
    };

    getData();
  }, []);

  const handleBookTest = useCallback(
    (userId, name, date, time) => {
      localStorage.setItem("userId", userId);
      localStorage.setItem("name", name);
      localStorage.setItem("date", date);
      localStorage.setItem("time", time);
      router.push("/registration");
    },
    [router]
  );

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-2">
      <div className="mt-8 w-full">
        {expire < new Date() ? (
          <h2 className="text-xl text-center mb-4">Registration is closed!</h2>
        ) : (
          /* Wrapping the table inside a div with overflow for mobile responsiveness */

          <div className="overflow-x-auto w-11/12 lg:w-1/2 mx-auto">
            <h2 className="text-xl text-center mb-4">Test Registrations</h2>
            <table className="table-auto border-collapse border border-gray-300 w-full">
              <thead>
                <tr>
                  <th className="border border-gray-300 px-2 py-2 text-sm md:text-base">
                    Name
                  </th>
                  <th className="border border-gray-300 px-2 py-2 text-sm md:text-base">
                    Date
                  </th>
                  <th className="border border-gray-300 px-2 py-2 text-sm md:text-base">
                    Time
                  </th>
                  <th className="border border-gray-300 px-2 py-2 text-sm md:text-base">
                    Level
                  </th>
                  <th className="border border-gray-300 px-2 py-2 text-sm md:text-base">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((entry) => (
                  <tr key={entry[0]}>
                    <td className="border border-gray-300 px-2 py-2 text-sm md:text-base">
                      {entry[1]}
                    </td>
                    <td className="border border-gray-300 px-2 py-2 text-sm md:text-base">
                      {entry[2]}
                    </td>
                    <td className="border border-gray-300 px-2 py-2 text-sm md:text-base">
                      {entry[3]}
                    </td>
                    <td className="border border-gray-300 px-2 py-2 text-sm md:text-base text-center">
                      {entry[4]}
                    </td>
                    <td className="border border-gray-300 px-2 py-2 text-center">
                      {state.some((arr) => entry[1] === arr.child1_name) ? (
                        <button className="mt-2 px-2 py-1 bg-gray-500 text-white text-sm rounded-md">
                          Booked
                        </button>
                      ) : (
                        <button
                          className="mt-2 px-2 py-1 bg-blue-500 text-white text-sm rounded-md"
                          onClick={() =>
                            handleBookTest(
                              entry[0],
                              entry[1],
                              entry[2],
                              entry[3]
                            )
                          }
                          aria-label={`Book test for ${entry[1]}`}
                        >
                          Book Now
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
