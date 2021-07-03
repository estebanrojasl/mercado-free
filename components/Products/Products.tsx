import Card, { CardProps } from "../Card/Card";

type Props = {
  products: CardProps[];
};

const Products: React.FC<Props> = ({ products }) => {
  return (
    <section>
      <h2 className="text-center m-3">Todos los productos</h2>
      <ul>
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </ul>
    </section>
  );
};

export default Products;
