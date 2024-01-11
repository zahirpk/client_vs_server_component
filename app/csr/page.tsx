"use client";
import { userAgent } from "next/server";
import { useState, useEffect } from "react";
export default function ClientSideRendering() {
  const [data, setData] = useState<any[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const respone = await fetch(
         /*  "https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8" */
         "https://jsonplaceholder.typicode.com/todos"
        );
        const getData = await respone.json();
        setData(getData);
      } catch (error) {}
    };
    fetchData();
  }, []);

  useEffect(() => {
    console.log("data", data);
  }, [data]);
  

  return (
    <>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.id}</td>
            <td>{item.title}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </>
  );
}
