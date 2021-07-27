import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
    }

    body{
        font-family: Arial, Helvetica, sans-serif;
        background-color: #EEEEEE;
    }

    @media (max-width: 1080px) {
        html {
            font-size: 93.75%;
        }
    }

    @media(max-width: 720px) {
        html {
            font-size: 87.5%;
        }
    }

    @media(max-width: 480px) {
        html {
            font-size: 81.25%;
        }
    }

    @media(max-width: 360px) {
        html {
            font-size: 75%;
        }
    }
`;

export default GlobalStyle;
