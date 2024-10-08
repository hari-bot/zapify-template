import React from "react";

interface Item {
  icon: string;
  title: string;
  description: string;
  image: string;
  backgroundColor: string;
}

interface InstagramFeature1 {
  title: string;
  items: Item[];
}

type Props = {
  feature: {
    data: InstagramFeature1;
  };
};

const InstagramFeature1 = ({ feature }: Props) => {
  const { title, items } = feature.data;
  return (
    <section className="">
      <div className="container">
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16 text-gray-800">
          {title}
        </h2>
      </div>
      <div className="w-full py-16 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100">
        <div className="mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 px-10">
            {items.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col justify-between items-center px-4 pt-8 rounded-lg shadow-md ${item.backgroundColor}`}
              >
                <div className="flex items-center mb-6">
                  <img
                    src={item.icon}
                    alt={`${item.title} Icon`}
                    className="w-8 h-8 mr-4"
                  />
                  <h4 className="text-xl font-semibold text-gray-800">
                    {item.title}
                  </h4>
                </div>
                <p className="text-center text-gray-600 mb-6">
                  {item.description}
                </p>
                <div className="mx-5">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full px-4 rounded-md"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeature1;
