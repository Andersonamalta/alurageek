import React from 'react';
import Logo from '../../../../assets/Logo.png';
import Banner from '../../../../assets/banner-image.png';
import './style.css';


function Header() {
    return (
        <section>
            <div className='interno'>
                <div className='topo'>
                    <div className='direita'>
                        
                        <img src={Logo} />
                        <input placeholder='O que deseja encontrar?'/>
                    </div>
                    <button className='button-topo'>Login</button>
                </div>
            </div>
            <div className='hero'>
                <img className='imagem-hero' src={Banner}/>
                <div className='texto-banner'>
                    <span className='texto1'>Dezembro Promocional</span>
                    <span className='texto2'>Produtos selecionados com 33% de desconto</span>
                    <button className='button-hero'>Ver Consoles</button>
                </div>
            </div>

        </section>
    );
}

export default Header;