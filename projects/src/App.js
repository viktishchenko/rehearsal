import { useState } from "react";
import Menu from "./draft/05-menu/Menu";
import Categories from "./draft/05-menu/Categories";
import items from "./draft/05-menu/data";

// get unique category
const allCategories = ["all", ...new Set(items.map((item) => item.category))];
console.log(allCategories); // Array(4) [ "all", "breakfast", "lunch", "shakes" ]

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState([]);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>menu project</h2>
          <div className="underline"></div>
        </div>
        <Categories filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
