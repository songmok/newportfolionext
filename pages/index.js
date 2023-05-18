import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import DevAni from "../components/DevAni";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              프론트엔드 개발자&nbsp;
              <br className="hidden lg:inline-block" />
              오한수 입니다.
            </h1>
            <p className="mb-8 leading-relaxed">
              - 항상 기술과 디자인 트렌드를 주시하며 새로운 걸 배우고 있습니다.
              <br />- 다수의 팀 프로젝트로 협업을 위한 자세가 준비되어 있습니다.
              <br />- 사용자를 위해 항상 고민합니다.
              <br />
            </p>
            <div className="flex justify-center">
              <Link legacyBehavior href="/portfolio">
                <button className="btn-project-index">Portofolio</button>
              </Link>
            </div>
          </div>
          <div className="flex justify-center lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <DevAni />
          </div>
        </div>
      </section>
    </>
  );
}
