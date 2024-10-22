import { useEffect, useRef, useState } from "react";
import ProductCard from "../components/ProductCard";
import { useGetProductsQuery } from "../api/productsApi";
import {  Product } from "../features/cart/cartSlice";


const Home = () => {
  const [limit, setLimit] = useState<number>(0); 
  const [search, setSearch] = useState<string>('');
  const { data: products, isFetching } = useGetProductsQuery(limit);
  const observerRef = useRef<HTMLDivElement | null>(null);


  const loadMoreProducts = (entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      setLimit((prevLimit) => prevLimit + 6);
    }
  };


  useEffect(() => {
    const observer = new IntersectionObserver(loadMoreProducts, {
      root: null,
      rootMargin: '0px',
      threshold: 1.0,
    });

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, []);
  const filterProducts = products?.filter((product: Product) => {
    if (search !== '') {
      return product?.title.toLowerCase().includes(search.toLowerCase());
    } else {
      return true
    }
  })
  return (
    <div className="container  mx-auto flex flex-col md:flex-row gap-5 pt-28">
      <div className="w-2/3 mx-auto md:w-64 ">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search products"
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div className=" flex-1 mx-12 md:mx-1">
        <div className='grid xl:grid-cols-3  lg:grid-cols-2 grid-cols-1  container mx-auto gap-6  '>
          {
            filterProducts?.map((product: Product, ind: number) => <ProductCard product={product} key={product.id} ind={ind} />)
          }

        </div>
        {
          filterProducts && filterProducts?.length === 0 && <p className=" text-black font-medium text-center">No Product Available...</p>
        }
        <div ref={observerRef} style={{ height: '10px' }}></div>
        {isFetching && <p className=' text-center'>Loading more products......</p>}
      </div>

    </div>
  );
};

export default Home;