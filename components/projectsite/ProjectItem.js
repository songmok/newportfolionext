import React, { useEffect, useState } from "react";

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const ProjectItem = ({ data }) => {
  // console.log("==============");
  const title = data.properties.Name.title[0].text.content;
  const siteUrl = data.url;
  const imgUrl = data.cover?.external?.url || data.cover?.file?.url;
  const gitUrl = data.properties.Git.url;
  const tags = data.properties.Tags.multi_select; // 배열[]
  const start = data.properties.Dated.date.start;
  const end = data.properties.Dated.date.end;

  const calculatedPeriod = (start, end) => {
    const startDateStringArray = start.split("-");
    const endDateStringArray = end.split("-");
    var startDate = new Date(
      startDateStringArray[0],
      startDateStringArray[1],
      startDateStringArray[2]
    );
    var endDate = new Date(
      endDateStringArray[0],
      endDateStringArray[1],
      endDateStringArray[2]
    );
    const diffInMs = Math.abs(endDate - startDate);
    const result = diffInMs / (1000 * 60 * 60 * 24);
    return result;
  };

  return (
    <div className="project-card my-4">
      <div className="bg-gray-100 p-4 rounded-lg ">
        <a href={siteUrl} target="_blank" className="">
          <Image
            className="h-40 rounded w-full object-cover object-center mb-14"
            src={imgUrl}
            width={1920}
            priority
            height={960}
            alt="content"
          />
        </a>
        <h3 className="tracking-widest text-indigo-500 dark:text-slate-600 text-xs font-medium title-font mb-4 mt-4">
          {tags.map((item, num) => (
            <span
              key={num}
              className={`tag ${item.color} inline-block py-1 px-2 font-bold uppercase rounded-md bg-purple-500 text-white mr-2`}
            >
              {item.name}
            </span>
          ))}
        </h3>
        <div className="flex items-center">
          <h2 className="text-base whitespace-nowrap text-gray-900 dark:text-slate-600 font-bold mr-3 title-font">
            {title}
          </h2>
          <a
            className="dark:hover:text-slate-500 text-sm block w-1 mr-2"
            href={gitUrl}
            target="_blank"
          >
            <FontAwesomeIcon icon={faGithub} className="w-5" />
          </a>
        </div>

        <div className="text-xs font-medium mt-4">
          작업기간 : {start} ~ {end} ({calculatedPeriod(start, end)}) 일
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
