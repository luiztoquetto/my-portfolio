import { ReactElement } from "react";
import { GlobeVisualEffect } from "../../components/globeVisualEffect";

import * as S from './styles';

export function Home(): ReactElement {
    return (
        <>
            <GlobeVisualEffect/>
            <S.Container>olá mundo!</S.Container>
        </>
    )
}
