import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        title: 'dark' | 'light';
        colors: {
            background: string;
            card: string;
            text: string;
            subtext: string;
            border: string;
            primary: string;
        };
    }
}
