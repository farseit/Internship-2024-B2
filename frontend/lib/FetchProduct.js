const FetchProductById = async (id) => {
  const data = await fetch("/data/product.json");
  const products = await data.json();
  const product = await products.find((pd) => pd.id === parseInt(id));
  return product;
};

export { FetchProductById };
