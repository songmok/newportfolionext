import styled from "@emotion/styled";
export const ProjectItemCss = styled.div`
  .project-modal-content {
    position: relative;
    background: rgba(0, 0, 0, 0.5);
    padding: 20px;
    max-width: 80vw;
    max-height: 80vh;
    overflow-y: auto;
    border-radius: 8px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  }

  .close {
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    cursor: pointer;
  }

  .title {
    font-size: 24px;
    margin-bottom: 10px;
  }

  .video {
    /* Video 스타일 */
  }

  .siteUrl {
    margin-top: 20px;
  }

  .url {
    color: blue;
    text-decoration: none;
  }

  .url:hover {
    text-decoration: underline;
  }
`;
