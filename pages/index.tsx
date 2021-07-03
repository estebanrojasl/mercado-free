import { GetStaticProps } from "next";
import { CardProps } from "../components/Card/Card";
import Products from "../components/Products/Products";

export const getStaticProps: GetStaticProps = async () => {
  const data = [
    {
      id: 1,
      title: "Gafas PitViper",
      url: "https://articulo.mercadolibre.com.co/MCO-519442671-gafas-pixeladas-thug-life-divertidas-turn-down-vintage-ok-_JM?searchVariation=83702945720#searchVariation=83702945720&position=2&search_layout=grid&type=item&tracking_id=6ad39465-7a13-40e3-b364-0a57907df055",
      price: "400000",
      mprice: "700000",
      image:
        "https://cdn.shopify.com/s/files/1/0185/7770/t/94/assets/806bcaf86561--blacking-out-spit_x350.png?v=1590526590",
      author: "therock",
      avatar:
        "https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock-.jpg",
    },
    {
      id: 2,
      title: "Gafas PitViper",
      url: "https://articulo.mercadolibre.com.co/MCO-519442671-gafas-pixeladas-thug-life-divertidas-turn-down-vintage-ok-_JM?searchVariation=83702945720#searchVariation=83702945720&position=2&search_layout=grid&type=item&tracking_id=6ad39465-7a13-40e3-b364-0a57907df055",
      price: "400000",
      mprice: "700000",
      image:
        "https://cdn.shopify.com/s/files/1/0185/7770/t/94/assets/806bcaf86561--blacking-out-spit_x350.png?v=1590526590",
      author: "therock",
      avatar:
        "https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock-.jpg",
    },
  ];
  return { props: { data } };
};

type Props = {
  data: CardProps[];
};

const Home: React.FC<Props> = (props) => {
  return <Products products={props.data} />;
};

export default Home;
