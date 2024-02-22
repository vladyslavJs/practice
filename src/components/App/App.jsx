// export const App = () => {
//   const handleClick = () => {
//     console.log(Date.now());
//   };
//   return <div onClick={handleClick}>App</div>
// }

// Hooks React ------------------------------
// import { useEffect, useState } from "react";
// export const App = () => {
//   const [first, setFirst] = useState(0);
//   const [second, setSecond] = useState(0);

//   useEffect(() => {
//     console.log("First updated: ", first);
//   }, [first]);

//   useEffect(() => {
//     console.log("Second updated: ", second);
//   }, [second]);

//   useEffect(() => {
//     console.log("First or second updated: ", first + second);
//   }, [first, second]);

//   const reset = () => {
//     setFirst(0) + setSecond(0);
//   };

//   return (
//     <>
//       <button onClick={() => setFirst(first + 1)}>First: {first}</button>
//       <button onClick={() => setSecond(second + 1)}>Second: {second}</button>
//       <button onClick={reset}>Reset All effects</button>
//     </>
//   );
// };
// Hooks React ------------------------------

// import css from './App.module.css'
import { FaReact } from "react-icons/fa";

export default function App() {

  //не потрібна валідація, використовується не контрольована форма. Наприклад :
  const saveUsername = (e) => {
    e.preventDefault();
    
    console.log("submit form");
    console.log(e.target.elements.username.value);
  };
  
  return (
    <div>
      <h1>Forms in React <FaReact /></h1>

      <form onSubmit={saveUsername}>
        <input type="text" name="username" id="" />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

