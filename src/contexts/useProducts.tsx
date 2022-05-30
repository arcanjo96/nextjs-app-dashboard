import axios from 'axios';
import { createContext, useContext, useEffect, useState } from 'react';

interface ContextProps {
  products: any[];
  createProduct: () => string;
}

const ProductsContext = createContext({} as ContextProps);

function createProduct() {
  return 'not implemented';
}

export const ProductsProvider = ({ children }: any) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos').then((response) => {
      setProducts(response.data);
    });
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        products,
        createProduct,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(ProductsContext);

  return context;
};
