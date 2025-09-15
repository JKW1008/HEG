// src/components/ProductInformation.jsx
const ProductInformation = () => {
  const categories = [
    {
      title: "Educational Toy",
      description: (
        <>
          Learning tools to help you learn
          <br />
          the language naturally through play
        </>
      ),
    },
    {
      title: "Object",
      description: (
        <>
          Decorative three-dimensional artwork that adds
          <br />
          personality and meaning to the space
        </>
      ),
    },
    {
      title: "Goods",
      description: (
        <>
          Special products for fans made using
          <br />
          Han-glish or foreigners interested in Korean
        </>
      ),
    },
  ];

  return (
    <section className="w-full py-12">
      <div className="max-w-[1920px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="text-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                {category.title}
              </h2>
              <p className="text-gray-600 leading-relaxed px-4">
                {category.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductInformation;
