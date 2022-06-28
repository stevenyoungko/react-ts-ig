import IGHeader from "components/IGHeader"
import IGContainer from "components/IGContainer"
import IGStory from "./components/IGStory"
import IGUser from 'components/IGUser'
import IGPost from "./components/IGPost"
import db from '../../db.json'

const IGPostList: React.FC = () => {
  const data = db.posts
  return (
    <>
      {
        data?.map((item) => {
          const {
            id,
            location,
            account,
            avatar,
            photo,
            likes,
            description,
            hashTags,
            createTime,
          } = item;
          return (
            <IGPost
              location={location}
              account={account}
              avatar={avatar}
              photo={photo}
              likes={likes}
              description={description}
              hashTags={hashTags}
              createTime={createTime}
              key={id}
            />
          );
        })}
    </>
  )
}

const Home: React.FC = () => {
  return (
    <>
      <IGHeader />
      <IGContainer>
        <div className="flex lg: justify-center">
          <div className="w-full lg:w-[600px]">
            <IGStory />
            <IGPostList />
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
