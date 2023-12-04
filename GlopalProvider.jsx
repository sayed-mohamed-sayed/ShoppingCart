import { CartProvider } from './usecontext/Context';

export function GlopalProvider({children}) {
    return (
        <CartProvider>{children}</CartProvider>
    );
}

