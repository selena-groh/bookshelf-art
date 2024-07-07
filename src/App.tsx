import "./App.scss";
import Bookshelf from "./Bookshelf";
import BookStats from "./BookStats";
import BookList from "./BookList";

function App() {
  return (
    <div className="App">
      <h1 className="App-title">Colin's Bookshelf</h1>
      {/* <p className="App-subtitle">A visualization of Colin Groh's library</p> */}
      <div className="App-sections">
        <Bookshelf />
        <BookStats />
        <BookList />
      </div>
    </div>
  );
}

export default App;
