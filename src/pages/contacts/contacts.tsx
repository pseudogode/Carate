import Box from "../../components/box/box";
import Map from "../../components/map/map";

function Contacts() {
  return (
    <Box style={{backgroundColor:'transparent', color: 'white', display: 'flex', height:'100%' }}>
        <Box>
          <Box>
            <p>Местоположение</p>
            <p>Работно време</p>
            <p>Обади се</p>
            <p>Прати мейл</p>
          </Box>
          <Box>
            <p>Viber Facebook Something</p>
          </Box>
        </Box>
        <Box style={{width: '100%'}}><Map/></Box>
    </Box>
  );
}

export default Contacts;