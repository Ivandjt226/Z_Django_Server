import slide01 from '../static/Mecatronica01.jpg'
import slide02 from '../static/Mecatronica02.jpg'
import slide03 from '../static/Mecatronica03.jpg'
import slide04 from '../static/Mecatronica06.jpg'

import Carousel from 'react-bootstrap/Carousel';

const Home = () => {
  const styleLabelImage = {
    position: 'absolute',
    backgroundColor: '#212529',
    width: '350px',
    height: '53px',
    marginTop: '25px',
    marginLeft: '35px',
    display: 'flex',
    alignItems: 'center',
    borderRadius: '10px',
    boxShadow: 'inset 0 0 1px 2px gray', // Agrega un borde interno de 2px de ancho y de color gris
  }

  const styleText = {
    margin: 'auto',
    color: 'white',
    fontWeight: 'bold'
  }
  return (
    <div className="row" style={{ marginTop: '2rem' }}>
      <Carousel variant="dark">
        <Carousel.Item>
          <div style={styleLabelImage}>
            <p style={styleText}>UNAB: Campus del jardín</p>
          </div>
          <img
            width={1100} height={500}
            className="d-block w-100"
            src={slide01}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <div style={styleLabelImage}>
            <p style={styleText}>UNAB: Laboratorio de automatización</p>
          </div>
          <img
            width={1100} height={500}
            className="d-block w-100"
            src={slide02}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <div style={styleLabelImage}>
            <p style={styleText}>UNAB: Laboratorio de oleoneumática</p>
          </div>
          <img
            width={1100} height={500}
            className="d-block w-100"
            src={slide03}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <div style={styleLabelImage}>
            <p style={styleText}>UNAB: Laboratorio de electrónica</p>
          </div>
          <img
            width={1100} height={500}
            className="d-block w-100"
            src={slide04}
            alt="Fourth slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Home;