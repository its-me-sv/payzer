import React, {createContext, useContext, useState, useEffect} from 'react';
import EncryptedStorage from 'react-native-encrypted-storage';

interface TokenInterface {
  key: string;
  iat: number;
}

interface TokenContextInterface {
  token: TokenInterface;
  setSession?: (tkn: string) => void;
}

const defaultState: TokenContextInterface = {
  token: {key: '', iat: 0},
};

export const TokenContext = createContext<TokenContextInterface>(defaultState);

export const useTokenContext = () => useContext(TokenContext);

export const TokenContextProvider: React.FC = ({children}) => {
  const [token, setToken] = useState<TokenInterface>(defaultState.token);
  useEffect(() => {
    EncryptedStorage.getItem('payzer_token')
      .then(value => {
        console.log('onmount', typeof value, value);
        if (value) {
          console.log('here at unmount', value);
          setToken(value);
        }
      })
      .catch(console.log);
  }, []);

  const setSession = (tkn: string) => {
    const TokenObject: TokenInterface = {
      key: tkn,
      iat: Date.now(),
    };
    setToken(TokenObject);
    EncryptedStorage.setItem('payzer_token', JSON.stringify(TokenObject))
      .then(() => console.log('setted'))
      .catch(console.log);
  };

  return (
    <TokenContext.Provider value={{token, setSession}}>
      {children}
    </TokenContext.Provider>
  );
};
