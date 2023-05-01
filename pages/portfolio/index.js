import Image from "next/image";
import React, { useState } from "react";
import samplePic from "../../public/sample.png";
import { TOKEN, DATABASE_ID, DATABASE_ID2 } from "../../config";
import ProjectItem from "../../components/ProjectItem";
import CloneItem from "../../components/CloneItem";

const Portfolio = ({ projects, projects2 }) => {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          {activeTab === "tab1"
            ? `Portfolio : ${projects.results.length}`
            : `Clonesite : ${projects2.results.length}`}
        </h1>
      </div>

      <div className="container flex mx-auto px-5 mb-4">
        <button
          className={`${
            activeTab === "tab1"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-800"
          } text-sm font-medium py-2 px-4 rounded-l-lg focus:outline-none`}
          onClick={() => handleTabClick("tab1")}
        >
          Portfolio
        </button>
        <button
          className={`${
            activeTab === "tab2"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-800"
          } text-sm font-medium py-2 px-4 rounded-r-lg focus:outline-none`}
          onClick={() => handleTabClick("tab2")}
        >
          CloneSite
        </button>
      </div>

      {activeTab === "tab1" && projects?.results && (
        <div className="container px-5 py-5 mx-auto">
          <div className="flex flex-wrap -m-4">
            {projects.results.map((v) => (
              <ProjectItem key={v.id} data={v} />
            ))}
          </div>
        </div>
      )}

      {activeTab === "tab2" && projects2?.results && (
        <div className="container px-5 py-5 mx-auto">
          <div className="flex flex-wrap -m-4">
            {projects2.results.map((v) => (
              <CloneItem key={v.id} data={v} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;

// SSG
export async function getStaticProps() {
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "Notion-Version": "2022-06-28",
      "content-type": "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({
      sorts: [
        {
          property: "Name",
          direction: "ascending",
        },
      ],
      page_size: 100,
    }),
  };

  const res = await fetch(
    `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
    options
  );
  const res2 = await fetch(
    `https://api.notion.com/v1/databases/${DATABASE_ID2}/query`,
    options
  );

  const projects = await res.json();
  const projects2 = await res2.json();

  return {
    props: { projects, projects2 },
    revalidate: 10,
  };
}
