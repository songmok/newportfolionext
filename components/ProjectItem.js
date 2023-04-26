import React from "react";
import Image from "next/legacy/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-solid-svg-icons";
const ProjectItem = ({ data }) => {
  // console.log("==============");
  // console.log(data);
  const title = data.properties.Name.title[0].plain_text;
  // const description = data.properties.Description.rich_text[0].plain_text;
  const siteUrl = data.url;
  const imgUrl = data.cover.external?.url || data.cover.file.url;
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
            width="100%"
            height="60%"
            layout="responsive"
            alt="content"
          />
        </a>
        <h3 className="tracking-widest text-indigo-500 dark:text-slate-600 text-xs font-medium title-font mb-4 mt-4">
          {tags.map((item) => (
            <span
              className={`tag ${item.color} inline-block py-1 px-2 font-bold uppercase rounded-md bg-purple-500 text-white mr-2`}
            >
              {item.name}
            </span>
          ))}
        </h3>
        <h2 className="text-lg text-gray-900 dark:text-slate-600 font-medium title-font mb-4">
          {title}
        </h2>
        {/* <p className="leading-relaxed text-base">{description}</p> */}
        <div className="text-xs font-medium">
          <a
            className="dark:hover:text-slate-500"
            href={gitUrl}
            target="_blank"
          >
            <FontAwesomeIcon icon={faGithub} />
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
