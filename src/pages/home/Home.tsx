
import Box from '../../components/box/box'
import classes from './home.module.scss'
import '../../theme/_colors.scss' 
import ToyotaWallpaper from '../../assets/toyota-wallpaper.jpg'
import { ReactNode } from 'react';
import { GoDotFill } from 'react-icons/go';
import { useTranslate } from '../../hooks/use-translate';

function Home() {
  const { t } = useTranslate('home');
  
  const Topic = ({ label, children }: {icon?: ReactNode, label: string, children?: ReactNode}) => 
    (<Box>
      <Box className={classes.topicLabel}> 
        <GoDotFill/>
        <p> {label} </p> {/* fontsize: 24px */}
      </Box>
      <Box className={classes.topicText}>
        {children}
      </Box>
    </Box>);

  return (
    <Box 
      className={classes.root}
      style={{ backgroundImage: `url(${ToyotaWallpaper})` }}
    >
      <Box style={{padding: '16px'}}>
        <Box className={classes.info}>
          <Topic label={t('t1')}></Topic>
          <Topic label={t('t2')}></Topic>
          <Topic label={t('t3')}></Topic>
          <Topic label={t('t4')}></Topic>
        </Box>
      </Box>  
    </Box>
  );
}

export default Home;