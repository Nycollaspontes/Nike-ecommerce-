import React from "react";
import Card from "./utils/Card";
import Title from "./utils/Title";


const Sales = ({ ifExists , endpoint: { title, items } }) => {
  
  return (
    <>
      <div>
        <Title title={title} />
        <div
          className={`grid items-center justify-items-center ${
            ifExists
              ? "grid-cols-3 gap-6 xl:grid-cols-2 gap-6 sm:grid-cols-1 lg:gap-12"
              : "grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-7 lg:gap-5 mt-7"
          } 
                     `}
        >
          {items.map((item, i) => (
            <Card {...item} key={i} ifExists={ifExists} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Sales;
