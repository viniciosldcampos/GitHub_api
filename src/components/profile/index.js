import React from 'react';
import * as S from './styled'

//Declaração usando arrow function => ao invés de função
const Profile = () => {
  return (
    <S.Wrapper>
        <S.WrapperImage
            src="https://avatars.githubusercontent.com/u/125104163?v=4" 
            alt="Avatar of user"
        />
        <S.WrapperInfoUser>
        <div>
                <h1>Vinicios</h1>
            <S.WrapperUsername>
                <h3>Username: </h3>
                <span>vinicios.ldcampos</span>
            </S.WrapperUsername>
            </div>
            <S.WrapperStatusCount>
            <div>
                <h4>Followers</h4>
                <span>5</span>
              </div>
              <div>
                <h4>Starreds</h4>
                <span>5</span>
              </div>
              <div>
                <h4>Followings</h4>
                <span>5</span>
            </div>
            </S.WrapperStatusCount>
        </S.WrapperInfoUser>
    </S.Wrapper>
  );
}

export default Profile;