import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import './suplemento.css';

import arroz from './vitamina 1.png';
import chocolate from './vegan 1.png';
import energetico from './thermoX 1.png';
import fralda from './nutren 1.png';
import oleo from './kitWhey 1.png';
import sabaoPo from './Rectangle 237.png';

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
    <h3>Suplementos e Vitaminas:</h3>
    <Slider {...configuracoes}>
      
      <div className="produto" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className="conteudo-produto">
          <img src={arroz} alt="Produto 1" />
          <div className="texto-promocao">
            <span className="nome-produto">Multivitaminico 90 Cápsulas - Dux Nutrition </span>
            <hr className="linha-separadora" /> 
            <div className="promocao">
              
              <span className="valorPromocao">R$ 49,41</span>
            </div>
          </div>
        </div>
      </div>
      

      <div className="produto" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className="conteudo-produto">
          <img src={chocolate} alt="Produto 2" />
          
          <div className="texto-promocao">
            <span className="nome-produto">Vegan Protein Foods - BR Foods - 500g</span>
            <hr className="linha-separadora" />
            <div className="promocao">
              
              <span className="valorPromocao">R$ 39,90</span>
            </div>
          </div>
        </div>
      </div>

      <div className="produto" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className="conteudo-produto">
          <img src={energetico} alt="Produto 3" />
          
          <div className="texto-promocao">
            <span className="nome-produto">Thermo X  - 120 Cápsulas Termogênico Denature</span>
            <hr className="linha-separadora" />
            <div className="promocao">
              
              <span className="valorPromocao">R$ 29,60</span>
            </div>
          </div>
        </div>
      </div>

      <div className="produto" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className="conteudo-produto">
          <img src={fralda} alt="Produto 4" />
         
          <div className="texto-promocao">
            <span className="nome-produto">Nutren Protein, Suplemento Alimentar, Chocolate, 400g</span>
            <hr className="linha-separadora" />
            <div className="promocao">
              
              <span className="valorPromocao">R$ 73,88</span>
            </div>
          </div>
        </div>
      </div>

      <div className="produto" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className="conteudo-produto">
          <img src={oleo} alt="Produto 5" />
          
          <div className="texto-promocao">
            <span className="nome-produto">Kit 2x Whey Protein 900g + 2x Creatina + bcaa 4,5 + Shaker</span>
            <hr className="linha-separadora" />
            <div className="promocao">
             
              <span className="valorPromocao">R$ 152,99</span>
            </div>
          </div>
        </div>
      </div>

      <div className="produto" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className="conteudo-produto">
          <img src={sabaoPo} alt="Produto 6" />
          
          <div className="texto-promocao">
            <span className="nome-produto">Creatina Monohidratada - Integralmédica - 300g</span>
            <hr className="linha-separadora" />
            <div className="promocao">
              
              <span className="valorPromocao">R$ 94,41</span>
            </div>
          </div>
        </div>
      </div>
    </Slider>
    </div>
  );
};

export default Produtos;
