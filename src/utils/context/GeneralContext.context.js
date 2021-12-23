import { createContext } from 'react';
import { v4 as uuid } from 'uuid';

export const generalInfo = {
  userId: uuid(),
  isBlue: true,
  someDataThatIsRarelyChangeable: 42,
  changeData: () => {}, // callback placeholder
};

export const GeneralContext = createContext(generalInfo);
