import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import './promocao.css';

import arroz from './sprayRoupa 1.png';
import chocolate from './sabaoPasta 1.png';
import energetico from './limpezaPesada 1.png';
import fralda from './lavaroupas 1.png';
import oleo from './kitLimpeza 1.png';
import sabaoPo from './veja 1.png';

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
    <h3>Tudo para limpeza:</h3>
    <Slider {...configuracoes}>
      
      <div className="produto" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className="conteudo-produto">
          <img src={arroz} alt="Produto 1" />
          <div className="texto-promocao">
            <span className="nome-produto">Limpador Limpeza Pesada Veja 500ml Original</span>
            <hr className="linha-separadora" /> 
            <div className="promocao">
              
              <span className="valorPromocao">R$11,00</span>
            </div>
          </div>
        </div>
      </div>
      

      
      <div className="produto" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className="conteudo-produto">
          <img src={energetico} alt="Produto 3" />
          
          <div className="texto-promocao">
            <span className="nome-produto">Sabão Em Pasta Bela Gil - 250g</span>
            <hr className="linha-separadora" />
            <div className="promocao">
              
              <span className="valorPromocao">R$ 6,99</span>
            </div>
          </div>
        </div>
      </div>

      <div className="produto" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className="conteudo-produto">
          <img src={fralda} alt="Produto 4" />
         
          <div className="texto-promocao">
            <span className="nome-produto">Limpeza diária LP - 1 litro - Pisoclean</span>
            <hr className="linha-separadora" />
            <div className="promocao">
              
              <span className="valorPromocao">R$ 31,35</span>
            </div>
          </div>
        </div>
      </div>

      <div className="produto" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className="conteudo-produto">
          <img src={oleo} alt="Produto 5" />
          
          <div className="texto-promocao">
            <span className="nome-produto">Lava Roupas Líquido Brilhante - 3L</span>
            <hr className="linha-separadora" />
            <div className="promocao">
             
              <span className="valorPromocao">R$ 31,99</span>
            </div>
          </div>
        </div>
      </div>

      <div className="produto" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className="conteudo-produto">
          <img src={chocolate} alt="Produto 2" />
          
          <div className="texto-promocao">
            <span className="nome-produto">Spray de Passar Roupas Passe Bem - 500ml</span>
            <hr className="linha-separadora" />
            <div className="promocao">
              
              <span className="valorPromocao">R$ 16,99</span>
            </div>
          </div>
        </div>
      </div>


      <div className="produto" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className="conteudo-produto">
          <img src={sabaoPo} alt="Produto 6" />
          
          <div className="texto-promocao">
            <span className="nome-produto">Kit Organizador  + Balde Oval Com Alça</span>
            <hr className="linha-separadora" />
            <div className="promocao">
              
              <span className="valorPromocao">R$ 70,46</span>
            </div>
          </div>
        </div>
      </div>
    </Slider>
    </div>
  );
};

export default Produtos;
