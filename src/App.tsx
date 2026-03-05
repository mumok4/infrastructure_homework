import { useState } from 'react';
import classNames from 'classnames';
import './App.css';

const ASCII = `
.sSSS SSSSS .sSSS SSSSS
SSSSS SSSSS SSSSS SSSSS       .sSSSSSSSs. .sSSS s.
S SSS SSSSS S SSS SSSSS       S SSS SSSSS S SSS SSSs.
S  SS SSSSS S  SS SSSSS       S  SS SSSS' S  SS SSSSS
S..SSsSSSSS S..SSsSSSSS       S..SSsSSSa. S..SS SSSSS
S:::S SSSSS S:::S SSSSS       S:::S SSSSS S:::S SSSSS
S;;;S SSSSS S;;;S SSSSS .sSs. S;;;S SSSSS S;;;S SSSSS
S%%%S SSSSS S%%%S SSSSS S%%%S S%%%S SSSSS S%%%S SSSSS
SSSSS SSSSS SSSSS SSSSS \`:;:' SSSSS SSSSS SSSSSsSSSSS
`;

function App() {
    const [isRainbow, setIsRainbow] = useState(false);

    const rainbow = classNames('ascii-art', {
        'is-rainbow': isRainbow,
    });

    return (
        <div className="container">
            <h1>Rainbow text</h1>
            <pre className={rainbow}>{ASCII}</pre>
            <button onClick={() => setIsRainbow(!isRainbow)}>
                {isRainbow ? 'Turn the rainbow off!' : 'Turn the rainbow on!'}
            </button>
        </div>
    );
}

export default App;
