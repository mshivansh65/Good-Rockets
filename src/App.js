import React, { useState } from "react";
import "./styles.css";
// const hevyLift = ["Saturn V","N1"];
const rocketCat = ["Heavy-lift", "Small-sat", "Indian", "Chinese"];
const rocketDict = {
  cat1: {
    rocket1: ["lift 1", "another Property 1"],
    rocket2: ["lift 2", "another Property 2", "prop3"]
  },
  cat2: {
    rocket3: ["lift 3", "another Property 1"],
    rocket4: ["lift 4", "another Property 2"]
  },
  cat3: {
    rocket5: ["lift 5", "another Property 1"],
    rocket6: ["lift 6", "another Property 2"]
  },
  cat4: {
    rocket7: ["lift 7", "another Property 1"],
    rocket8: ["lift 8", "another Property 2"],
    rocket9: ["lift 8", "another Property 2"]
  }
};

export default function App() {
  const [category, categoryUpdater] = useState("cat1");
  // const [propLenCat, propLenCatUpdater] = useState("cat1");
  function returnListItem(cat, index) {
    const list = rocketDict[category];
    // console.log(list[cat]);
    // console.log(Object.keys(list));
    const reqItem = list[cat].filter((e, i) => {
      return i === index;
    });
    if (reqItem) return reqItem;
    else return -111;
  }
  function displayRocketCat(cat) {
    cat++;
    const cate = `cat` + cat;
    // console.log(rocketDict[category]);
    // displayRocketList(rocketDict[category]);

    categoryUpdater(cate);
  }

  return (
    <div className="App">
      <img
        src="https://img.icons8.com/ios/100/000000/rocket--v1.png"
        alt="Rocket img"
        className="rocket-img"
      />
      <div className="container">
        <h1>Good Rockets</h1>
        <h2>Check most cpabale rockets in each category</h2>

        {rocketCat.map((cat, i) => (
          <button
            id={cat}
            style={{
              padding: "0.3rem",
              margin: "0.4rem",
              borderRadius: "0.5rem",
              border: "none",
              fontSize: "1.2rem"
            }}
            key={cat}
            onClick={() => displayRocketCat(i)}
          >
            {cat}
          </button>
        ))}
        <hr className="horizontal-line" />
        {/* list */}
        {Object.keys(rocketDict[category]).map(function (cat) {
          const array = new Array(rocketDict[category][cat].length).fill(0);
          return (
            <ul key={cat} className="rocket-list">
              <h3 className="rocket-name"> {cat} </h3>

              {array.map((_, i) => {
                const retunItem = returnListItem(cat, i);
                if (retunItem !== -111) {
                  return (
                    <li className="rocket-prop" key={i}>
                      {retunItem}
                    </li>
                  );
                }
              })}
              <hr className="horizontal-line" />
            </ul>
          );
        })}
        {/* list--end */}
      </div>
      <footer>
        <a
          href="icons8.com"
          style={{
            textDecoration: "none",
            position: "absolute",
            bottom: "2rem",
            left: "1rem"
          }}
        >
          icons8.com
        </a>
        <a
          target="_blank"
          href="https://icons8.com/icon/999/rocket"
          style={{
            textDecoration: "none",
            position: "absolute",
            bottom: "0.5rem",
            left: "1rem"
          }}
        >
          Rocket icon by Icons8
        </a>
      </footer>
    </div>
  );
}
