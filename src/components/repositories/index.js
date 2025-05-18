import React from 'react';
import * as S from "./styled"
import RepositoryItem from '../repository-item';

const Repositories = () => {
  return (
    <S.WrapperTabs
        selectedTabClassName='is-selected'
        selectedTabPanelClassName='is-selected'
    >
        <S.WrapperTabList>
            <S.WrapperTab>Repositories</S.WrapperTab>
            <S.WrapperTab>Starred</S.WrapperTab>
        </S.WrapperTabList>
        <S.WrapperTabPanel>
            <RepositoryItem 
                name ="bootcampImpulso_TypeScript" 
                linkToRepo="https://github.com/viniciosldcampos"
                fullName="viniciosldcampos/bootcampImpulso_TypeScript"
            />
        </S.WrapperTabPanel>
        <S.WrapperTabPanel>
            <RepositoryItem
                name ="Contador_Bootcamp_Impulso_DIO" 
                linkToRepo="https://github.com/viniciosldcampos"
                fullName="viniciosldcampos/Contador_Bootcamp_Impulso_DIO"
            />
        </S.WrapperTabPanel>
    </S.WrapperTabs>
  );
};

export default Repositories;