import React, { useContext, useEffect, useState, createContext } from "react";
import axios from "axios";

// Kreiramo Context koristeci React-ov createContext hook
const apiContext = createContext();

// Funkcija koja služi kao omotac (Provider) za deljenje podataka sa API-ja
export function ApiContextProvider({ children }) {
  const [employees, setEmployees] = useState([]);

  // useEffect za dohvatanje podataka sa API-ja kada se komponenta ucita
  useEffect(() => {
    async function fetchData() {
      const data = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      console.log(data);
      setEmployees(data.data);
    }
    fetchData();
  }, []); // Prazan niz [] znaci da se efekat pokrece samo jednom (prilikom mount-a)

  // Vracamo apiContext.Provider koji omogucava deljenje employees podataka
  return (
    <apiContext.Provider value={{ employees }}>
      {children}{" "}
      {/* Sve komponente unutar ovog Provider-a mogu koristiti employees */}
    </apiContext.Provider>
  );
}

// Prilagodjeni hook za koriscenje podataka iz apiContext
export function useAPI() {
  const context = useContext(apiContext);
  console.log(context);

  if (context === undefined) {
    throw new Error("Kontekst mora biti smesten u provajderu");
  }
  return context;
}
