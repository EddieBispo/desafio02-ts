import { Button } from '@chakra-ui/react'

interface ButtonProps {
    onClick: () => void
}

export const ButtonLogin = ({ onClick }: ButtonProps) => {
    return (
        <Button width='100%' size='md' color='#FFFFFF' onClick={onClick} bg='#4376B8' _hover={{bg: '#6097df'}}>
            Login
        </Button>
    )
}