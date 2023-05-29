const ProductsSkeleton = () => {
  const arr = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  return (
    <section className="select-none">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex items-center justify-between box-border px-5 py-2 border-b-2 border-gray-200 w-full mb-20">
          <h1 className="bg-gray-200 animate-pulse h-11 w-4/12"></h1>
          <div className="bg-gray-200 animate-pulse h-11 w-2/12"></div>
        </div>
        <div className="flex flex-wrap -m-4 gap-2 justify-center">
          {arr.map((index) => (
            <div
              className="lg:w-1/4 md:w-1/2 p-4 w-full bg-gray-200 animate-pulse rounded-lg"
              key={index}
            >
              <div className="block relative h-48 rounded overflow-hidden">
                <div className="object-contain object-center w-full h-full block"></div>
              </div>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1"></h3>
                <h2 className="text-gray-900 title-font text-lg font-medium"></h2>
                <p className="mt-1"></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSkeleton;
