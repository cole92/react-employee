import React from "react";
import { useAPI } from "./contextApi";

// Komponenta za prikaz zaposlenih
export default function Employees() {
  const { employees } = useAPI(); // Destrukturiranje Api objekta u konstantu employees

  return (
    <div className="employees">
      {/* Prolazak kroz niz vracen iz apija */}
      {employees.map((user) => (
        <div key={user.id} className="empBlock">
          <h1>{user.name}</h1>
          <h3>{user.username}</h3>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}
