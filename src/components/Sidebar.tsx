import { useSelectedDate } from '../hooks/useSelectedDate';
import { getDayName } from '../utils/getDayName';
import { getDayData } from '../utils/getDayData';

const Sidebar = () => {
  const { selectedDate } = useSelectedDate();

  const dayName = selectedDate ? getDayName(selectedDate) : 'Today';
  const dayData = getDayData(dayName);

  const renderFarmableItems = () => {
    if (dayName === 'Sunday') {
      return (
        <div className='mt-6'>
          <h1>You can farm everything on Sunday!</h1>
        </div>
      );
    }

    console.log(dayData);

    if (dayData) {
      return (
        <>
          {dayData.talents.map(item => (
            <div key={item.id} className='border-b py-4 flex items-center'>
              <div className='flex flex-col items-center w-1/5 mr-4'>
                <img
                  src={`/images/talents/${item.name}.webp`}
                  alt={item.name}
                  style={{ width: '45px', height: '45px' }}
                />
                <p className='mt-2 text-sm'>{item.name}</p>
              </div>
              <div className='grid grid-cols-4 gap-3 items-center justify-between w-4/5'>
                {item.characters?.map(character => (
                  <img
                    key={character}
                    src={`/images/characters/${character.replace(/ +/g, '')}.webp`}
                    alt={character}
                    style={{ width: '40px', height: '40px' }}
                  />
                ))}
              </div>
            </div>
          ))}
        </>
      );
    }
  };

  return (
    <div className='p-4 w-96 bg-[#192739]'>
      <h1 className='text-2xl text-center mb-8 font-bold'>GenshinPlanner</h1>
      <p className='text-lg mb-2'>
        Farmable <span className='font-bold'>{dayName}</span>
      </p>
      {renderFarmableItems()}
    </div>
  );
};

export default Sidebar;
