const ProductDetailSkeleton = () => {
  return (
    <section className="overflow-hidden min-h-[calc(100vh-100px)] select-none">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full lg:h-[500px] h-60 object-contain object-center rounded-xl bg-gray-200 animate-pulse"></div>
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <div className="bg-gray-200 animate-pulse h-4 mb-2 w-1/3"></div>
            <div className="bg-gray-200 animate-pulse mb-1 h-7 w-full"></div>
            <div className="flex mb-4 w-1/3 bg-gray-200 animate-pulse h-5"></div>
            <div className="bg-gray-200 animate-pulse w-full h-60"></div>
            <div className="flex my-6 justify-between">
              <div className="bg-gray-200 animate-pulse h-11 w-24"></div>
              <div className="bg-gray-200 animate-pulse h-11 w-28"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailSkeleton;
