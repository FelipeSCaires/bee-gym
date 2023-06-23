import { VStack, Image, Center, Text, Heading, ScrollView } from 'native-base'
import BackgroundImg from '@assets/background.png'
import LogoSvg from '@assets/logo.svg'
import { Input } from '@components/Input'
import { Button } from '@components/Button'
import { useNavigation } from '@react-navigation/native'
import { AuthNavigatorRoutesPropps } from '@routes/auth.routes'

export function SignUp() {
    const { goBack } = useNavigation<AuthNavigatorRoutesPropps>()

    return (
        <ScrollView contentContainerStyle={{flexGrow: 1}} showsVerticalScrollIndicator={false}>
        <VStack flex={1}  px={10}>
            <Image
                source={BackgroundImg}
                alt='Pessoas treinando'
                resizeMode='contain'
                position='absolute'
            />
            <Center my={24}>
                <LogoSvg />
                <Text color='gray.100' fontSize='sm'>Treine sua mente e o seu corpo</Text>
            </Center>
            <Center>
                <Heading color='gray.100' fontSize='xl' fontFamily='heading' mb={6}>Crie sua conta</Heading>
                <Input placeholder='Nome' keyboardType='email-address' />
                <Input placeholder='E-mail' keyboardType='email-address' autoCapitalize='none' />
                <Input placeholder='Senha' secureTextEntry />
                <Button title='Criar e acessar' />
            </Center>
      
                <Button title='Voltar para o login' variant='outline' mt={24} onPress={goBack}/>
       
        </VStack>
        </ScrollView>
    )
}