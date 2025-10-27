import HomeCard from "../componensts/HomeCard";

function Home() {
  return (
    <>
      <HomeCard url="introduction" text="This is react introduction" />
      <HomeCard url="jsx" text="" />
      <HomeCard url="components" />
      <HomeCard url="props" />
      <HomeCard url="hooks" />
      <HomeCard url="forms" />
      <HomeCard url="fetch" />
      <HomeCard url="axios" />
    </>
  );
}

export default Home;
