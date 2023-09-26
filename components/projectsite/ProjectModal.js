import React from "react";
import Modal from "react-modal";
import { ProjectItemCss } from "./ProjectItemStyled";

const ProjectModal = ({
  projectModalOpen,
  closeProjectModal,
  title,
  siteUrl,
}) => {
  return (
    <>
      {projectModalOpen && (
        <Modal
          isOpen={true}
          onRequestClose={closeProjectModal}
          className="fixed rounded-md top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-900 p-16 rounded-8 flex flex-col items-center justify-center overflow-hidden border border-white"
          overlayClassName="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center"
        >
          <ProjectItemCss>
            <button className="close" onClick={closeProjectModal}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            <h2 className="title">{title}</h2>
            <div className="video">{/* VIDEO */}</div>
            <div className="siteUrl">
              <a href={siteUrl} target="_blank" className="url">
                자세히 보기
              </a>
            </div>
          </ProjectItemCss>
        </Modal>
      )}
    </>
  );
};

export default ProjectModal;
