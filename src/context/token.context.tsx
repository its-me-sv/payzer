import React, {createContext, useContext, useState, useEffect} from 'react';
import EncryptedStorage from 'react-native-encrypted-storage';

interface TokenInterface {
  key: string;
  iat: number;
}

interface TokenContextInterface {
  token: TokenInterface;
  setSession?: (tkn: string) => void;
  clearSession?: () => void;
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
        if (value) {
          setToken(JSON.parse(value));
        }
      })
      .catch(console.log);
  }, []);

  const setSession = (tkn: string) => {
    const TokenObject: TokenInterface = {
      key: tkn,
      iat: Date.now(),
    };
    EncryptedStorage.setItem('payzer_token', JSON.stringify(TokenObject))
      .then(() => {
        setToken(TokenObject);
        console.log('setted');
      })
      .catch(console.log);
  };

  const clearSession = async () => {
    try {
      await EncryptedStorage.clear();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <TokenContext.Provider value={{token, setSession, clearSession}}>
      {children}
    </TokenContext.Provider>
  );
};
