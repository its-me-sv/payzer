import React, {createContext, useContext, useState} from 'react';

interface CreateAccContextInterface {
  image: string;
  name: string;
  phoneNo: string;
  country: string;
  setImage?: (text: string) => void;
  setName?: (text: string) => void;
  setPhoneNo?: (text: string) => void;
  setCountry?: (text: string) => void;
}

const defaultState: CreateAccContextInterface = {
  image: 'https://avatars.dicebear.com/api/identicon/payzer.png',
  name: '',
  phoneNo: '',
  country: '',
};

export const CreateAccContext =
  createContext<CreateAccContextInterface>(defaultState);

export const useCreateAccContext = () => useContext(CreateAccContext);

export const CreateAccContextProvider: React.FC = ({children}) => {
  const [image, setImage] = useState<string>(defaultState.image);
  const [name, setName] = useState<string>(defaultState.name);
  const [phoneNo, setPhoneNo] = useState<string>(defaultState.phoneNo);
  const [country, setCountry] = useState<string>(defaultState.country);
  return (
    <CreateAccContext.Provider
      value={{
        image,
        setImage,
        name,
        setName,
        phoneNo,
        setPhoneNo,
        country,
        setCountry,
      }}>
      {children}
    </CreateAccContext.Provider>
  );
};
