import IGHeader from "components/IGHeader"
import IGContainer from "components/IGContainer"
import IGStory from "./components/IGStory"
import IGUser from 'components/IGUser'

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
            <IGUser avatar="/images/avatars/a1.png" account="bruce_1234" location="布魯斯前端" showFollow={true} />
          </div>
        </div>
      </IGContainer>
    </>
  );
};

export default Home;
