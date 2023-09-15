import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import './destaques.css';

import arroz from './arroz.png';
import chocolate from './chocolate.png';
import energetico from './energetico.png';
import fralda from './fralda.png';
import oleo from './oleo.jpg';
import sabaoPo from './sabaoPo.jpg';

const Produtos = () => {
  const configuracoes = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, 
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  const handleMouseEnter = (event) => {
    event.currentTarget.style.transform = 'scale(0.9)';
  }

  const handleMouseLeave = (event) => {
    event.currentTarget.style.transform = 'scale(0.8)';
  }

  return (

    <div className="destaque">
    <h3>Em destaque:</h3>
    <Slider {...configuracoes}>
      
      <div className="produto" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className="conteudo-produto">
          <img src={arroz} alt="Produto 1" />
          <div className="texto-promocao">
            <span className="nome-produto">Arroz Branco longo-fino tipo 1 Camil 1kg</span>
            <hr className="linha-separadora" style={{ width: '100%' }} />

            <div className="promocao">
              
              <span className="valorPromocao">R$ 5,00</span>
            </div>
          </div>
        </div>
      </div>
      

      <div className="produto" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className="conteudo-produto">
          <img src={chocolate} alt="Produto 2" />
          
          <div className="texto-promocao">
            <span className="nome-produto">Chocolate Lacta ao Leite 80g</span>
            <hr className="linha-separadora" />
            <div className="promocao">
              
              <span className="valorPromocao">R$ 3,00</span>
            </div>
          </div>
        </div>
      </div>

      <div className="produto" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className="conteudo-produto">
          <img src={energetico} alt="Produto 3" />
          
          <div className="texto-promocao">
            <span className="nome-produto">Energético Monster Energy Green</span>
            <hr className="linha-separadora" />
            <div className="promocao">
              
              <span className="valorPromocao">R$ 8,00</span>
            </div>
          </div>
        </div>
      </div>

      <div className="produto" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className="conteudo-produto">
          <img src={fralda} alt="Produto 4" />
         
          <div className="texto-promocao">
            <span className="nome-produto">Pampers Pants Ajuste Total Fralda Tam.M </span>
            <hr className="linha-separadora" />
            <div className="promocao">
              
              <span className="valorPromocao">R$ 30,00</span>
            </div>
          </div>
        </div>
      </div>

      <div className="produto" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className="conteudo-produto">
          <img src={oleo} alt="Produto 5" />
          
          <div className="texto-promocao">
            <span className="nome-produto">Liza Óleo De Soja Garrafa 900ml</span>
            <hr className="linha-separadora" />
            <div className="promocao">
             
              <span className="valorPromocao">R$ 10,00</span>
            </div>
          </div>
        </div>
      </div>

      <div className="produto" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className="conteudo-produto">
          <img src={sabaoPo} alt="Produto 6" />
          
          <div className="texto-promocao">
            <span className="nome-produto">Sabão em Pó Ypê Tixan Primavera - 1kg</span>
            <hr className="linha-separadora" />
            <div className="promocao">
              
              <span className="valorPromocao">R$ 8,50</span>
            </div>
          </div>
        </div>
      </div>
    </Slider>
    </div>
  );
};

export default Produtos;
