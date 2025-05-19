import React from 'react'
import * as S from './styled'

const Header = () => {
  return (
        <header>
            <S.Wrapper>
                <input type='text' placeholder='Digite o username para a pesquisa ...'/>
                <button type='submit'><span>Buscar</span></button>
            </S.Wrapper>
        </header>

  );    
};

export default Header;