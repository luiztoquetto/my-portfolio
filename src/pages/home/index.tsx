import { ReactElement, useEffect, useState } from "react";
import { SocialNetwork } from "../../components/social-network";
import { GlobeVisualEffect } from "../../components/globe-visual-effect";
import { NetVisualEffect } from "../../components/net-visual-effect";

import logoOctocatWhite from '../../assets/logo-octocat-white.svg';
import logoLinkedinWhite from '../../assets/logo-linkedin-white.svg';

import * as S from './styles';

export function Home(): ReactElement {
    const [visualEffect, setVisualEffect] = useState<ReactElement>();
    const [isGlobe, setIsGlobe] = useState<boolean>(false);

    useEffect(() => {
        const randomNumber: number = Math.floor(Math.random() * 10);

        if (randomNumber !== 0) {
            setVisualEffect( randomNumber % 2 === 0 ? <GlobeVisualEffect/> : <NetVisualEffect/>);
            setIsGlobe(randomNumber % 2 === 0);
        }
    }, [setVisualEffect]);

    return (
        <S.Container>
            { visualEffect }

            <S.Header isGlobe={isGlobe}>
                <SocialNetwork
                    name={'GitHub'}
                    icon={logoOctocatWhite}
                    onClick={() => window.open('https://github.com/luiztoquetto', '_blank')}
                />

                <SocialNetwork
                    name={'Linkedin'}
                    icon={logoLinkedinWhite}
                    onClick={() => window.open('https://br.linkedin.com/in/luiz-toquetto', '_blank')}
                />
            </S.Header>

            <S.Body>
                <S.Title>Hello!</S.Title>
                <S.Title>I'm Luiz Toquetto</S.Title>
                <S.Title>Web Developer</S.Title>
            </S.Body>
        </S.Container>
    )
}
