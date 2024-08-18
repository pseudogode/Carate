
import Box from '../../components/box/box'
import './home.scss'
import '../../theme/_colors.scss' 
import ToyotaWallpaper from '../../assets/toyota-wallpaper.jpg'
import { ReactNode } from 'react';
import { GoDotFill } from 'react-icons/go';

function Home() {
  const Topic = ({ label, children }: {icon?: ReactNode, label: string, children?: ReactNode}) => 
    (<Box>
      <Box className='home-topic-label'>
        <GoDotFill/>
        <p style={{fontSize: '24px'}}> {label} </p>
      </Box>
      <Box className='home-topic-text'>
        {children}
      </Box>
    </Box>);

  return (
    <Box 
      className='home-root' 
      style={{ backgroundSize: '100% auto',backgroundImage: `url(${ToyotaWallpaper})`, backgroundRepeat: 'no-repeat'}}
    >
      <Box style={{padding: '16px'}}>
        <Box className='home-info'>
          <Topic label='Внос на висок клас автомобили'></Topic>
          <Topic label='Съдействие за регистрация в КАТ'></Topic>
          <Topic label='Лизинг'></Topic>
          <Topic label='Застраховане на автомобила'></Topic>
        </Box>
      </Box>  
    </Box>
  );
}

export default Home;