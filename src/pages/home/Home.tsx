
import Box from '../../components/box/box'
import './home.css'
import '../../theme/_colors.scss' 
import ToyotaWallpaper from '../../assets/toyota-wallpaper.jpg'

function Home() {
  return (
    <Box style={{height: '100%', backgroundColor: '#61ACBB', backgroundImage: `url(${ToyotaWallpaper})`, backgroundSize: 'content'}}>
      <Box style={{backgroundColor:'rgba(97,172,187,0.5)',width:'fit-content', color: 'white'}}>
        <ul>
          <li>Внос на висок клас автомобили</li>
          <li>Съдействие за регистрация в КАТ</li>
          <li>Лизинг</li>
          <li>Застраховане на автомобила</li>
        </ul>
      </Box>
    </Box>
  );
}

export default Home;