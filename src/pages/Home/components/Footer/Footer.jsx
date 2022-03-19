import React from 'react';
import './style.css';
import Logo from '../../../../assets/Logo.png';

function Footer() {
    return (
        <>
            <div className='footer'>
                <div className='conteudo'>
                    <img src={Logo} />
                    <div className='links'>
                        <span>Quem somos nós</span>
                        <span>Politica de privacidade</span>
                        <span>Programa de fidelidade</span>
                        <span>Nossas lojas</span>
                        <span>Quero ser franqueado</span>
                        <span>Anuncie aqui</span>
                    </div>
                    <div className='contato'>
                        <span>Fale conosco</span>
                        <div className='campos'>
                            <input className='nome' placeholder='Nome'/>
                            <input className='mensagem' placeholder='Escreva sua mensagem'/>
                        </div>
                        <button>Enviar mensagem</button>

                    </div>

                </div>

            </div>

            <div className='rodape'>
                <span>Desenvolvido por Anderson Malta - 2022</span>
            </div>
        </>
    );
}

export default Footer;