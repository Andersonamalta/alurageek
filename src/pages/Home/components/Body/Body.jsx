import React from 'react';
import './style.css';

// Imagens dos produtos da secão de Star Wars
import Produto1 from '../../../../assets/produto-star-wars1.png';
import Produto2 from '../../../../assets/produto-star-wars2.png';
import Produto3 from '../../../../assets/produto-star-wars3.png';
import Produto4 from '../../../../assets/produto-star-wars4.png';
import Produto5 from '../../../../assets/produto-star-wars5.png';
import Produto6 from '../../../../assets/produto-star-wars6.png';

// Imagens dos produtos da secão de Consoles
import Produto7 from '../../../../assets/produto-console1.png';
import Produto8 from '../../../../assets/produto-console2.png';
import Produto9 from '../../../../assets/produto-console3.png';
import Produto10 from '../../../../assets/produto-console4.png';
import Produto11 from '../../../../assets/produto-console5.png';
import Produto12 from '../../../../assets/produto-console6.png';

// Imagens dos produtos da secão de Diversos
import Produto13 from '../../../../assets/produto-diversos1.png';
import Produto14 from '../../../../assets/produto-diversos2.png';
import Produto15 from '../../../../assets/produto-diversos3.png';
import Produto16 from '../../../../assets/produto-diversos4.png';
import Produto17 from '../../../../assets/produto-diversos5.png';
import Produto18 from '../../../../assets/produto-diversos6.png';

function Body() {
    return (
        <section className='container'>

            <section className='div-principal-produto'>
                <div className='topo-produto'>
                    <span>Star Wars</span>
                    <button className='button-ver'>Ver tudo</button>
                </div>

                <div className='produtos'>

                    <div className='produto1'>
                        <img className='image-produto' src={Produto1} />
                        <span className='descricao-produto'>Produto XYZ</span>
                        <span className='preco-produto'>R$ 60,00</span>
                        <span className='texto-ver-produto'>Ver produto</span>
                    </div>

                    <div className='produto2'>
                        <img className='image-produto' src={Produto2} />
                        <span className='descricao-produto'>Produto XYZ</span>
                        <span className='preco-produto'>R$ 60,00</span>
                        <span className='texto-ver-produto'>Ver produto</span>
                    </div>

                    <div className='produto3'>
                        <img className='image-produto' src={Produto3} />
                        <span className='descricao-produto'>Produto XYZ</span>
                        <span className='preco-produto'>R$ 60,00</span>
                        <span className='texto-ver-produto'>Ver produto</span>
                    </div>

                    <div className='produto4'>
                        <img className='image-produto' src={Produto4} />
                        <span className='descricao-produto'>Produto XYZ</span>
                        <span className='preco-produto'>R$ 60,00</span>
                        <span className='texto-ver-produto'>Ver produto</span>
                    </div>

                    <div className='produto5'>
                        <img className='image-produto' src={Produto5} />
                        <span className='descricao-produto'>Produto XYZ</span>
                        <span className='preco-produto'>R$ 60,00</span>
                        <span className='texto-ver-produto'>Ver produto</span>
                    </div>

                    <div className='produto6'>
                        <img className='image-produto' src={Produto6} />
                        <span className='descricao-produto'>Produto XYZ</span>
                        <span className='preco-produto'>R$ 60,00</span>
                        <span className='texto-ver-produto'>Ver produto</span>
                    </div>

                </div>
            </section>

            <section className='div-principal-produto'>
                <div className='topo-produto'>
                    <span>Console</span>
                    <button className='button-ver'>Ver tudo</button>
                </div>

                <div className='produtos'>

                    <div className='produto1'>
                        <img className='image-produto' src={Produto7} />
                        <span className='descricao-produto'>Controle Xbox</span>
                        <span className='preco-produto'>R$ 60,00</span>
                        <span className='texto-ver-produto'>Ver produto</span>
                    </div>

                    <div className='produto2'>
                        <img className='image-produto' src={Produto8} />
                        <span className='descricao-produto'>Controle e console PS5</span>
                        <span className='preco-produto'>R$ 60,00</span>
                        <span className='texto-ver-produto'>Ver produto</span>
                    </div>

                    <div className='produto3'>
                        <img className='image-produto' src={Produto9} />
                        <span className='descricao-produto'>Console Nitendo</span>
                        <span className='preco-produto'>R$ 60,00</span>
                        <span className='texto-ver-produto'>Ver produto</span>
                    </div>

                    <div className='produto4'>
                        <img className='image-produto' src={Produto10} />
                        <span className='descricao-produto'>Controle Nitento Switch</span>
                        <span className='preco-produto'>R$ 60,00</span>
                        <span className='texto-ver-produto'>Ver produto</span>
                    </div>

                    <div className='produto5'>
                        <img className='image-produto' src={Produto11} />
                        <span className='descricao-produto'>Console Xbox Serie X</span>
                        <span className='preco-produto'>R$ 60,00</span>
                        <span className='texto-ver-produto'>Ver produto</span>
                    </div>

                    <div className='produto6'>
                        <img className='image-produto' src={Produto12} />
                        <span className='descricao-produto'>Game Boy Color</span>
                        <span className='preco-produto'>R$ 60,00</span>
                        <span className='texto-ver-produto'>Ver produto</span>
                    </div>

                </div>
            </section>

            <section className='div-principal-produto'>
                <div className='topo-produto'>
                    <span>Diversos</span>
                    <button className='button-ver'>Ver tudo</button>
                </div>

                <div className='produtos'>

                    <div className='produto1'>
                        <img className='image-produto' src={Produto13} />
                        <span className='descricao-produto'>Camisa Atari</span>
                        <span className='preco-produto'>R$ 60,00</span>
                        <span className='texto-ver-produto'>Ver produto</span>
                    </div>

                    <div className='produto2'>
                        <img className='image-produto' src={Produto14} />
                        <span className='descricao-produto'>Camisa SNES</span>
                        <span className='preco-produto'>R$ 60,00</span>
                        <span className='texto-ver-produto'>Ver produto</span>
                    </div>

                    <div className='produto3'>
                        <img className='image-produto' src={Produto15} />
                        <span className='descricao-produto'>Controle e console</span>
                        <span className='preco-produto'>R$ 60,00</span>
                        <span className='texto-ver-produto'>Ver produto</span>
                    </div>

                    <div className='produto4'>
                        <img className='image-produto' src={Produto16} />
                        <span className='descricao-produto'>Controle e console</span>
                        <span className='preco-produto'>R$ 60,00</span>
                        <span className='texto-ver-produto'>Ver produto</span>
                    </div>

                    <div className='produto5'>
                        <img className='image-produto' src={Produto17} />
                        <span className='descricao-produto'>Controle e console</span>
                        <span className='preco-produto'>R$ 60,00</span>
                        <span className='texto-ver-produto'>Ver produto</span>
                    </div>

                    <div className='produto6'>
                        <img className='image-produto' src={Produto18} />
                        <span className='descricao-produto'>Controle e console</span>
                        <span className='preco-produto'>R$ 60,00</span>
                        <span className='texto-ver-produto'>Ver produto</span>
                    </div>

                </div>
            </section>

        </section>
    );
}

export default Body;