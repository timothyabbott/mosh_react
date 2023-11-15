import React, { useEffect, useState } from "react";

// this is a shorthand for for creating an interface. Only to be used when there are one or two values in props.
const ProductList = ({ category }: { category: string }) => {
  const [products, setProducts] = useState<string[]>([]);

  useEffect(() => {
    console.log("fetching products in ", category);
    setProducts(["Clothing", "Household"]);
    //  the second argument is a list of dependencies, for examples props, or state. If any of those values change then the effect will be called.
    // an empty array means that the effect will only be called once, on the first render.
  }, [category]);

  return <div>ProductList</div>;
};

export default ProductList;
