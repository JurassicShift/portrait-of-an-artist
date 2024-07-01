// import { useEffect } from "react";
import Landing from "./components/Landing";

function App() {

  // useEffect(() => {
  //   async function checkProxy() {
  //     const response = await fetch("api/v1");
  //     const hello = await response.json();
  //     console.log("PROXY RESPONSE: ", hello);
  //   }

  //   checkProxy();
  // }, [])

  return (
    <>
      <div>

        <Landing />
      </div>
    </>
  )
}

export default App
