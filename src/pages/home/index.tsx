import IGHeader from "components/IGHeader"
import IGContainer from "components/IGContainer"
import IGStory from "./components/IGStory";

const Home: React.FC = () => {
  return (
    <>
      <IGHeader />
      <IGContainer>
        <div className="flex lg: justify-center">
          <div className="w-full lg:w-[600px]">
            <IGStory />
          </div>
          <div className="hidden lg:block lg:w-[424px] ">
            2
          </div>
        </div>
      </IGContainer>
    </>
  );
};

export default Home;
