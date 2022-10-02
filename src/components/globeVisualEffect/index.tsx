import { useState, useEffect, useRef, ReactElement } from 'react';
import * as S from './styles';

// @ts-ignore
import GLOBE from 'vanta/dist/vanta.globe.min';

// @ts-ignore
import * as THREE from 'vanta/vendor/three.r134.min';

export function GlobeVisualEffect(): ReactElement {
    const globeRef = useRef(null);

    const [globe, setGlobe] = useState();

    useEffect(() => {
        if (!globe) {
            setGlobe(GLOBE({
                el: globeRef.current,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                scale: 1.00,
                scaleMobile: 1.00,
                THREE,
            }));
        }

        return () => {
            if (globe) (globe as any).destroy();
        }
    }, [globe]);

    return (
        <S.Container ref={globeRef} />
    );
}
