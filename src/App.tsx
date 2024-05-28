import Content from './components/Content';
import Sidebar from './components/Sidebar';
import { SelectedDateProvider } from './context/DateContext';

const App = () => {
  return (
    <SelectedDateProvider>
      <div className='flex h-screen text-white'>
        <Sidebar />
        <Content />
      </div>
    </SelectedDateProvider>
  );
};

export default App;
