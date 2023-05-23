import * as React from "react";

import { ThemeProvider } from "@mui/material/styles";

import Header from "../Components/Header";

export default function Statistics() {
  return (
    <>
      <Header title="Virus Mantra" />
      <iframe
        width="1600"
        height="900"
        src="https://app.powerbi.com/view?r=eyJrIjoiMmI2ZjExMzItZTcwNy00YmUwLWFlMTAtYTUxYzVjODZmYjA5IiwidCI6ImMxMzZlZWMwLWZlOTItNDVlMC1iZWFlLTQ2OTg0OTczZTIzMiIsImMiOjF9"
        frameborder="0"
        allowFullScreen="true"
      ></iframe>
    </>
  );
}
