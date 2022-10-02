import { ReactElement } from 'react';

import * as S from './styles';

interface socialNetworksProps {
    name: string;
    icon: string;
    onClick: () => void;
}

export function SocialNetwork({ name, icon, onClick }: socialNetworksProps): ReactElement {
    return(
        <S.Button onClick={onClick}>
            <S.Icon src={icon} alt={name} />
            <S.Text>{name}</S.Text>
        </S.Button>
    );
}
