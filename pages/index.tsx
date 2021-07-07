import { GetStaticProps } from "next";
import { CardProps } from "../components/Card/Card";
import Products from "../components/Products/Products";

import prisma from "../lib/prisma";

export const getStaticProps: GetStaticProps = async () => {
  const data = await prisma.product.findMany({});
  return { props: { data }, revalidate: 30 };
};

type Props = {
  data: CardProps[];
};

const Home: React.FC<Props> = (props) => {
  return <Products products={props.data} />;
};

export default Home;
