import "./App.css";

function App() {
  return (
    <>
      <LikeButton/> // セルフクロージング要素
    </>
  );
}

function LikeButton() {
  return <span>ここにいいね</span>;
}

export default App;