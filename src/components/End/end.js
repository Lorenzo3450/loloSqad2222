import './end.css';
import React from 'react';
import Pagamento from './formaPag.png'

const End = () => {
    return(
        <div className="Contato">
            <span className="formaPag">Formas de Pagamento</span>
            <div>
                <hr className="linha-separadora"/> 
            </div>
            <div>
                <p className='problema'>
                    Algum problema? <a href="#" className='reclame'>Reclame aqui</a>
                </p>     
            </div>
            <div className='conteudo-ao-lado'>
                <div>
                    <h3 className='setores'>Setores</h3>
                    <div className="setores-text">
                        <p style={{ marginBottom: '10px' }}>Básicos</p>
                        <p style={{ marginBottom: '10px' }}>Hortifruti</p>
                        <p style={{ marginBottom: '10px' }}>Beleza</p>
                        <p style={{ marginBottom: '10px' }}>Limpeza</p>
                        <p style={{ marginBottom: '10px' }}>Infantil</p>
                        <p style={{ marginBottom: '10px' }}>Grãos</p>
                    </div>
                </div>
                <div>
                    <h3 className='central'>Central de Atendimento</h3>
                    <div className="central-text">
                        <p style={{ marginBottom: '10px' }}>Atendimento</p>
                        <p style={{ marginBottom: '10px' }}>Termo de compra e venda</p>
                        <p style={{ marginBottom: '10px' }}>Arrependimento ou desistência</p>
                        <p style={{ marginBottom: '10px' }}>Meus pedidos</p>
                        <p style={{ marginBottom: '10px' }}>Trocas</p>
                        <p style={{ marginBottom: '10px' }}>Políticas de privacidade</p>
                    </div>
                </div>

                <div>
                    <h3 className='institu'>Institucional</h3>
                    <div className="institu-text">
                        <p style={{ marginBottom: '10px' }}>Quem somos</p>
                        <p style={{ marginBottom: '10px' }}>Trabalhe conosco</p>
                        <p style={{ marginBottom: '10px' }}>Investidores</p>
                        <p style={{ marginBottom: '10px' }}>Portal financeiro</p>
                        <p style={{ marginBottom: '10px' }}>Acessoria</p>
                        <p style={{ marginBottom: '10px' }}>Nossas lojas</p>
                    </div>
                </div>

                <div>
                    <h3 className='atendimento'>Atendimento</h3>
                    <div className="atendimento-text">
                        <p style={{ marginBottom: '10px' }}>Segunda a sexta das</p>
                        <p style={{ marginBottom: '10px' }}>8 às 22h e sábados e</p>
                        <p style={{ marginBottom: '10px' }}>domingos das 8 às </p>
                        <p style={{ marginBottom: '10px' }}>20h (exceto feriados)</p>
                    </div>
                </div>

                <div>
                    <h3 className='telefone'>Entre em contato</h3>
                    <div className="telefone-text">
                        <p style={{ marginBottom: '10px' }}>(92) 99462-2823</p>
                        <p style={{ marginBottom: '10px' }}>(92) 98410-6048</p>
                        
                    </div>
                </div>


            </div>
        </div>
    );
}

export default End;
