import { useState, useEffect, useRef, ReactElement } from 'react';

import * as S from './styles';

// @ts-ignore
import NET from 'vanta/dist/vanta.net.min';

// @ts-ignore
import * as THREE from 'vanta/vendor/three.r134.min';

export function NetVisualEffect(): ReactElement {
    const netRef = useRef(null);

    const [net, setNet] = useState();

    useEffect(() => {
        if (!net) {
            setNet(NET({
                el: netRef.current,
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
            if (net) (net as any).destroy();
        }
    }, [net]);

    return (
        <S.Container ref={netRef} />
    );
}
