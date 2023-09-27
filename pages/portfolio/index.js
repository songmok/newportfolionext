import React, { useState } from "react";
import { TOKEN, DATABASE_ID, DATABASE_ID2 } from "../../config";
import ProjectItem from "../../components/projectsite/ProjectItem";
import CloneItem from "../../components/clonesite/CloneItem";

const Portfolio = ({ projects, projects2 }) => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 flex-col items-center">
        <h1 className="title-font sm:text-4xl text-3xl font-medium text-gray-900">
          Portfolio: {projects.results.length + projects2.results.length}
        </h1>
      </div>
      <div className="flex flex-col md:block">
        <div className="container px-5 py-5 mx-auto">
          <div className="flex flex-wrap justify-center -m-4 ">
            {projects.results.map((v) => (
              <ProjectItem key={v.id} data={v} />
            ))}
          </div>
        </div>
        <div className="container px-5 py-5 mx-auto">
          <div className="flex flex-wrap justify-center -m-4">
            {projects2.results.map((v) => (
              <CloneItem key={v.id} data={v} />
            ))}
          </div>
        </div>
      </div>
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
