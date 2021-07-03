import { GetStaticProps } from "next";
import { CardProps } from "../components/Card/Card";
import Products from "../components/Products/Products";

import prisma from "../lib/prisma";

export const getStaticProps: GetStaticProps = async () => {
  const data = await prisma.product.findMany({});
  return { props: { data } };
};

type Props = {
  data: CardProps[];
};

const Home: React.FC<Props> = (props) => {
  return <Products products={props.data} />;
};

export default Home;
