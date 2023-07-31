import React from "react";
const Pricing = () => {
  return (
    <>
      <main className="lg:flex-row gap-4 justify-evenly mt-16 flex flex-col ">
        <div className=" flex flex-col gap-6 border border-blue-600 rounded-lg  p-6 items-center">
          <div className="flex flex-col gap-2">
            <img
              className="rounded-xl"
              src="https://th.bing.com/th/id/OIP.CZNIA08gSRWmLarpSfWJGwAAAA?w=154&h=159&c=7&r=0&o=5&pid=1.7"
              alt=""
            />
            <div className="flex flex-col text-blue-900 gap-3 mt-2">
              <h1 className="text-4xl">$123/mon</h1>
              <h3 className="text-xl">basic level</h3>
              <p className="underline">Subscriptions 122k+</p>
            </div>
          </div>
          <div>
            <hr className="border border-blue-500" />

            <ul className="text-blue-500 list-disc p-5">
              <li>100 GB Storage</li>
              <li>Ulimited websites</li>
              <li className="line-through">Easy to manage the data base</li>
              <li className="line-through">database scalibility</li>
              <li className="line-through">Calloboration with the team</li>
              <li className="line-through">News</li>
              <li className="line-through">Extra Updates</li>
            </ul>
          </div>
          <div>
            <button className="bg-blue-600 p-2 text-white border-1 rounded-lg transition hover:bg-blue-300 0.8s ease-out">
              Buy Now
            </button>
          </div>
        </div>
        <div className=" flex flex-col gap-6 border border-blue-600 rounded-lg  p-6 items-center">
          <div className="flex flex-col gap-2">
            <img
              className="rounded-xl"
              src="https://th.bing.com/th/id/OIP.CZNIA08gSRWmLarpSfWJGwAAAA?w=154&h=159&c=7&r=0&o=5&pid=1.7"
              alt=""
            />
            <div className="flex flex-col text-blue-900 gap-3 mt-2">
              <h1 className="text-4xl">$650/mon</h1>
              <h3 className="text-xl">basic level</h3>
              <p className="underline">Subscriptions 122k+</p>
            </div>
          </div>
          <div>
            <hr className="border border-blue-500" />

            <ul className="text-blue-500 list-disc p-5">
              <li>100 GB Storage</li>
              <li>Ulimited websites</li>
              <li className="line-through">Easy to manage the data base</li>
              <li className="line-through">database scalibility</li>
              <li>Calloboration with the team</li>
              <li>News</li>
              <li>Extra Updates</li>
            </ul>
          </div>
          <div>
            <button className="bg-blue-600 p-2 text-white border-1 rounded-lg transition hover:bg-blue-300 0.8s ease-out">
              Buy Now
            </button>
          </div>
        </div>
        <div className=" flex flex-col gap-6 border border-blue-600 rounded-lg  p-6 items-center">
          <div className="flex flex-col gap-2">
            <img
              className="rounded-xl"
              src="https://th.bing.com/th/id/OIP.CZNIA08gSRWmLarpSfWJGwAAAA?w=154&h=159&c=7&r=0&o=5&pid=1.7"
              alt=""
            />
            <div className="flex flex-col text-blue-900 gap-3 mt-2">
              <h1 className="text-4xl">$652/mon</h1>
              <h3 className="text-xl">basic level</h3>
              <p className="underline">Subscriptions 122k+</p>
            </div>
          </div>
          <div>
            <hr className="border border-blue-500" />

            <ul className="text-blue-500 list-disc p-5">
              <li>100 GB Storage</li>
              <li>Ulimited websites</li>
              <li>Easy to manage the data base</li>
              <li>database scalibility</li>
              <li>Calloboration with the team</li>
              <li>News</li>
              <li>Extra Updates</li>
            </ul>
          </div>
          <div>
            <button className="bg-blue-600 p-2 text-white border-1 rounded-lg transition hover:bg-blue-300 0.8s ease-out">
              Buy Now
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default Pricing;
