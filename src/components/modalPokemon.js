import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import frente from '../images/frente.png';
import costas from '../images/tras.png';
import { FaSearchengin } from 'react-icons/fa';
function Modelo(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    const fundo = props.value[1]
  let urlApiExibir = `https://projectpokemon.org/images/normal-sprite/${props.value}.gif`;
  const [imagem, setImagem] = useState('img1');
  let imagens = {
    img1: `https://projectpokemon.org/images/normal-sprite/${props.value[0]}.gif`,
    img2: `https://projectpokemon.org/images/sprites-models/normal-back/${props.value[0]}.gif`,
  }
  const trocarimagem = () => {
    setImagem(state => state === 'img1' ? 'img2': 'img1');
  }

  return (
    <>
    {console.log(fundo)}
    <FaSearchengin onClick={handleShow} className='botaoExaminar' ></FaSearchengin>
      <Modal show={show} onHide={handleClose}>
       <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <div className={fundo}>
        <Modal.Body className='modalImagem' >Pokemon:{props.value}</Modal.Body>
        <img id='imagemModal' src={imagens[imagem]}  className="pokemon-image"/>
        <button onClick={trocarimagem}>Trocar</button>
        <Modal.Footer>
        </Modal.Footer>
       </div>
      </Modal>
    </>
  );
}

export default Modelo;