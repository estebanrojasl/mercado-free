import { GetStaticProps } from "next";
import { CardProps } from "../components/Card/Card";
import Products from "../components/Products/Products";
import Layout from "../components/Layout/Layout";

import { useState, useEffect } from "react";

import prisma from "../lib/prisma";

export const getStaticProps: GetStaticProps = async () => {
  const data = await prisma.product.findMany({});
  return { props: { data }, revalidate: 30 };
};

type Props = {
  data: CardProps[];
};

const Home: React.FC<Props> = (props) => {
  const [term, setTerm] = useState("");
  const [products, setProducts] = useState<CardProps[]>(props.data);

  function handleData(term: string) {
    setTerm(term);
  }

  useEffect(() => {
    const products = props.data.filter(
      (product) =>
        product.title.toLowerCase().includes(term.toLowerCase()) ||
        product.url === (term)
    );
    setProducts(products)
  }, [term]);
  return (
    <>
      <Layout onData={handleData} />
      <Products products={products} searchTerm={term}/>
    </>
  );
};

export default Home;
