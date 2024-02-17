export const App = () => {
  const handleClick = () => {
    console.log(Date.now());
  };
  return <div onClick={handleClick}>App</div>
}