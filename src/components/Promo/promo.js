import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import './promo.css';

import arroz from './yopro.png';
import chocolate from './suco.png';
import energetico from './poliflor.png';
import fralda from './ketchup 1.png';
import oleo from './granola.png';
import sabaoPo from './chocoPo 1.png';

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
    <h3>Promoções:</h3>
    <Slider {...configuracoes}>
      
      <div className="produto" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className="conteudo-produto">
          <img src={arroz} alt="Produto 1" />
          <div className="texto-promocao">
            <span className="nome-produto">Granola Mãe Terra Tradicional Castanhas Brasileiras 800g</span>
            <hr className="linha-separadora" /> 
            <div className="promocao">
              
              <span className="valorPromocao">R$ 6,99</span>
            </div>
          </div>
        </div>
      </div>
      

      <div className="produto" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className="conteudo-produto">
          <img src={chocolate} alt="Produto 2" />
          
          <div className="texto-promocao">
            <span className="nome-produto">YoPRO Bebida Láctea UHT Morango 15g de proteínas</span>
            <hr className="linha-separadora" />
            <div className="promocao">
              
              <span className="valorPromocao">R$ 5,98</span>
            </div>
          </div>
        </div>
      </div>

      <div className="produto" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className="conteudo-produto">
          <img src={energetico} alt="Produto 3" />
          
          <div className="texto-promocao">
            <span className="nome-produto">Life Mix Kids</span>
            <hr className="linha-separadora" />
            <div className="promocao">
              
              <span className="valorPromocao">R$ 2,60</span>
            </div>
          </div>
        </div>
      </div>

      <div className="produto" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className="conteudo-produto">
          <img src={fralda} alt="Produto 4" />
         
          <div className="texto-promocao">
            <span className="nome-produto">Lustra Móveis Poliflor 500mL</span>
            <hr className="linha-separadora" />
            <div className="promocao">
              
              <span className="valorPromocao">R$ 13,80</span>
            </div>
          </div>
        </div>
      </div>

      <div className="produto" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className="conteudo-produto">
          <img src={oleo} alt="Produto 5" />
          
          <div className="texto-promocao">
            <span className="nome-produto">Pringles Original 104g</span>
            <hr className="linha-separadora" />
            <div className="promocao">
             
              <span className="valorPromocao">R$ 13,39</span>
            </div>
          </div>
        </div>
      </div>

      <div className="produto" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className="conteudo-produto">
          <img src={sabaoPo} alt="Produto 6" />
          
          <div className="texto-promocao">
            <span className="nome-produto">Native - Açúcar Demerara Orgânico, 1kg</span>
            <hr className="linha-separadora" />
            <div className="promocao">
              
              <span className="valorPromocao">R$ 14,41</span>
            </div>
          </div>
        </div>
      </div>
    </Slider>
    </div>
  );
};

export default Produtos;
