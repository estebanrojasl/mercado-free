import Card, { CardProps } from "../Card/Card";

type Props = {
  products: CardProps[];
  searchTerm: string;
};

const Products: React.FC<Props> = ({ products, searchTerm }) => {
  return (
    <section>
      <h2 className="text-center m-3">
        {searchTerm
          ? `Resultados para ${searchTerm}`
          : "Todos los productos"}
      </h2>
      <ul>
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </ul>
    </section>
  );
};

export default Products;
