import Head from "next/head";
import Link from "next/link";
import DarkModeButton from "../utils/DarkModeButton";
import MobDarkModeButton from "../utils/MobDarkModeButton";
import useMuiMedia from "../hook/useMuiMedia";

const Header = () => {
  const { mobile } = useMuiMedia();
  return (
    <>
      <Head>
        <title>프론트엔드 개발자 오한수 포트폴리오</title>
        <meta
          name="description"
          content="프론트엔드 개발자 오한수 포트폴리오"
        />
        <meta
          name="keyword"
          content="React.js, Next.js, portflio, 오한수, 프론트엔드, 웹, 앱, 개발자, 개발"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="text-gray-600 body-font relative">
        {!mobile ? (
          <>
            <div className="container mx-auto  p-5  ">
              <div className="flex justify-between mx-auto items-center mb-10">
                <Link legacyBehavior href="/">
                  <a className="flex title-font font-medium text-gray-900 ">
                    <span className="ml-3 text-xl">SONGMOK</span>
                  </a>
                </Link>
                <MobDarkModeButton />
              </div>
              <nav className="flex flex-wrap items-center text-base text justify-around">
                <Link legacyBehavior href="/">
                  <a className="hover:text-gray-900">Home</a>
                </Link>
                <Link legacyBehavior href="/stacks">
                  <a className="hover:text-gray-900">Stacks</a>
                </Link>
                <Link legacyBehavior href="/portfolio">
                  <a className=" hover:text-gray-900">Portfolio</a>
                </Link>
                <Link legacyBehavior href="/life">
                  <a className=" hover:text-gray-900">Life</a>
                </Link>
              </nav>
            </div>
          </>
        ) : (
          <div className="container mx-auto flex flex-wrap p-5 flex-row items-center">
            <Link legacyBehavior href="/">
              <a className="flex title-font font-medium items-center text-gray-900 mb-4">
                <span className="ml-3 text-xl">SONGMOK</span>
              </a>
            </Link>
            <nav className="ml-auto flex flex-wrap items-center text-base justify-center">
              <Link legacyBehavior href="/">
                <a className="mr-5 hover:text-gray-900">Home</a>
              </Link>
              <Link legacyBehavior href="/stacks">
                <a className="mr-5 hover:text-gray-900">Stacks</a>
              </Link>
              <Link legacyBehavior href="/portfolio">
                <a className="mr-5 hover:text-gray-900">Portfolio</a>
              </Link>
              <Link legacyBehavior href="/life">
                <a className="mr-5 hover:text-gray-900">Life</a>
              </Link>
              <DarkModeButton />
            </nav>
            {/* dark 모드 적용 */}
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
