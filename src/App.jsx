import { useState } from "react";


function App() {
  const [activeItem, setActiveItem] = useState(1);
  const items = [
    {
      id: 1,
      title: "Free",
      content: [
        "content 1",
        "content 2",
        "content 3",
        "content 4",
        "content 5",
      ],
    },
    {
      id: 2,
      title: "Standard",
      content: [
        "content 1",
        "content 2",
        "content 3",
        "content 4",
        "content 5",
      ],
    },
    {
      id: 3,
      title: "Premium",
      content: [
        "content 1",
        "content 2",
        "content 3",
        "content 4",
        "content 5",
      ],
    },
    {
      id: 4,
      title: "Premium",
      content: [
        "content 1",
        "content 2",
        "content 3",
        "content 4",
        "content 5",
      ],
    },
  ];
  return (
    <>
      <div className=" flex flex-col items-center mt-4">
        <h1 className="text-2xl font-mono font-bold basis-1">
          Your Chocie Plans
        </h1>
        <p className="break-normal text-gray-700 w-3/6 text-center basis-1 font-serif mt-5">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima,
          omnis repellat. At assumenda amet animi delectus laboriosam quasi fuga
          quibusdam blanditiis, neque maiores. Lorem ipsum dolor sit amet,
          consectetur adipisicing elit.
        </p>
      </div>
      <div className=" flex justify-center">
        <div className="mt-10 card-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {items.map((item, index) => (
            <div
              key={item.id}
              className={`border-2 w-64 h-96 border-red-200 rounded-md hover:shadow-lg hover:border-red-500 cursor-pointer ${
                activeItem === index ? "border-red-500" : "border-red-200"
              } drop-shadow-xl`}
            >
              <div className="py-4 px-2 ">
                <div>
                  <span className="text-red-400">start</span> <br />
                  <span className="text-2xl font-bold text-red-400">
                    {item.title}
                  </span>
                </div>
                <div className="mt-6">
                  <ul>
                    {item.content.map((content, index) => (
                      <li key={index}>
                        <span className="text-lg text-red-400">&#10003;</span>{" "}
                        {content}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-5">
                  <button className="border-2 w-56 text-lg border-red-200 font-semibold font-serif text-red-400">
                    {" "}
                    buy
                  </button>
                </div>
                <p className=" mt-2 mr-4">
                  Lorem ipsum dolor sit, amet consectetur adipisicing dfasdas.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
