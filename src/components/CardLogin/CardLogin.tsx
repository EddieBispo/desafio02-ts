import {
  Card,
  CardHeader,
  CardBody,
  Flex,
  Input,
  Stack
} from "@chakra-ui/react"
import { Header } from "../Header/Header"
import { ButtonLogin } from "../ButtonLogin/ButtonLogin"
import { login } from "../../services/login"



export const CardLogin = () => {
  return (
    <Flex minWidth='300px' height='100vh' alignItems='center' justifyContent='center' bg='linear-gradient(to right, #3698D3, #5059A1)' padding='5px'>
      <Card width='500px'>
        <CardHeader>
          <Header />
        </CardHeader>
        <CardBody>
          <Stack>
            <Input placeholder='Email' type='email' />
            <Input placeholder='Password' type='password' />
            <ButtonLogin onClick={login} />
          </Stack>
        </CardBody>
      </Card>
    </Flex>
  )
}