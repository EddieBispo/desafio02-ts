import { ChakraProvider } from '@chakra-ui/react'
import { CardLogin } from './components/CardLogin/CardLogin';


function App() {
  return (
    <ChakraProvider>
      <CardLogin />
    </ChakraProvider>
  );
}

export default App;
