import { useState } from "react";
import "./App.scss";
import Bookshelf from "./Bookshelf";
import BookStats from "./BookStats";
import BookList from "./BookList";
import TabButton from "./components/TabButton";

const BOOKSHELF = "BOOKSHELF";
const STATS = "STATS";

type PageType = typeof BOOKSHELF | typeof STATS;

const PAGES = {
  [BOOKSHELF]: <Bookshelf />,
  [STATS]: (
    <>
      <BookStats />
      <BookList />
    </>
  ),
};

function App() {
  const [page, setPage] = useState<PageType>(BOOKSHELF);
  return (
    <div className="App">
      <header>
        <h1 className="App-title">Colin's Bookshelf</h1>
        <p className="App-subtitle">A visualization of Colin Groh's library</p>
        <div>
          <TabButton
            isActive={page === BOOKSHELF}
            onClick={() => setPage(BOOKSHELF)}
          >
            Bookshelf
          </TabButton>
          <TabButton isActive={page === STATS} onClick={() => setPage(STATS)}>
            Stats
          </TabButton>
        </div>
      </header>
      <div className="App-sections">{PAGES[page]}</div>
    </div>
  );
}

export default App;
