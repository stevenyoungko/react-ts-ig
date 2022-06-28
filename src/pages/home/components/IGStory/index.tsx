import Item from './item'
import db from '../../../../db.json'


const IGStory: React.FC = () => {
  const data = db.stories

  return (
    <div className='w-full h-[110px] box-border flex items-center overflow-x-auto overflow-y-hidden shadow-md no-scrollbar lg:my-8'>
      {
        data?.map(item => {
          const { id, name, avatar } = item
          return <Item key={id} name={name} avatar={avatar} />
        })
      }
    </div>
  )
}

export default IGStory