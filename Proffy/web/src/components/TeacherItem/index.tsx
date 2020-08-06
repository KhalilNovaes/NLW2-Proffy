import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem(){
    return(
        <article className="teacher-item">
            <header>
                <img src="https://pbs.twimg.com/profile_images/1284184681269911552/b69ywdav_400x400.jpg" alt="Khalil Novaes"/>
                <div>
                    <strong>Khalil Novaes</strong>
                    <span>Matematica</span>
                </div>
            </header>

            <p>
            Ah mano sei la sabe.
            <br /><br />
            Por conseguinte, a constante divulgação das informações imponha um obstáculo ao upgrade para novas versões das direções preferenciais na escolha de algorítimos. O empenho em analisar a valorização de fatores subjetivos possibilita uma melhor disponibilidade da autenticidade das informações.
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 70,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
         </article>
    );
}

export default TeacherItem;