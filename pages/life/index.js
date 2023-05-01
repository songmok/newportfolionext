import Image from "next/image";
import React from "react";

const Life = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="flex w-full mb-20 flex-wrap">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">
              항상 준비되어있기 위해 끊임없이 <br />
              배우고 있습니다.
            </h1>
            <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
              자바스크립트의 기초부터 다양한 프레임워크와 라이브러리 그리고
              sql과 nodejs를 통한 백엔드 지식과 새로운 언어를 습득해 다양한
              <br />
              환경과 상황에 대비할 수 있는 개발자가 되기 위하여.
            </p>
          </div>
          <div className="flex flex-wrap md:-m-2 -m-1">
            <div className="flex flex-wrap w-1/2 items-center">
              <div className="md:p-2 p-1 w-1/2 flex justify-center">
                <Image
                  src="/img/net.png"
                  alt="Notion icon"
                  width={115}
                  height={115}
                />
              </div>
              <div className="md:p-2 p-1 w-1/2 flex justify-center">
                <Image
                  src="/img/next.png"
                  alt="Notion icon"
                  width={150}
                  height={150}
                />
              </div>
              <div className="md:p-2 p-1 w-1/2 flex justify-center">
                <Image
                  src="/img/sql.png"
                  alt="Notion icon"
                  width={120}
                  height={120}
                />
              </div>
              <div className="md:p-2 p-1 w-1/2 flex justify-center">
                <Image
                  src="/img/node.png"
                  alt="Notion icon"
                  width={120}
                  height={120}
                />
              </div>
            </div>
            <div className="flex flex-wrap w-1/2 items-center">
              <div className="md:p-2 p-1 w-1/3">
                <Image
                  src="/img/udemy.png"
                  alt="Notion icon"
                  width={400}
                  height={300}
                />
              </div>
              <div className="md:p-2 p-1 w-1/3">
                <Image
                  src="/img/deepdive.jpg"
                  alt="Notion icon"
                  width={400}
                  height={300}
                />
              </div>
              <div className="md:p-2 p-1 w-1/3">
                <Image
                  src="/img/master.jpg"
                  alt="Notion icon"
                  width={400}
                  height={300}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Life;
