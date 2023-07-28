import { useNavigation } from '@react-navigation/native'
import { AuthNavigatorRoutesPropps } from '@routes/auth.routes'
import { VStack, Image, Center, Text, Heading, ScrollView } from 'native-base'
import BackgroundImg from '@assets/background.png'
import LogoSvg from '@assets/logo-horizontal.svg'
import { Input } from '@components/Input'
import { Button } from '@components/Button'
import { useForm, Controller } from 'react-hook-form'


export function Signin() {
    const { navigate } = useNavigation<AuthNavigatorRoutesPropps>()
    const { control, handleSubmit } = useForm()

    function handleSignIn(data: any){
        console.log(data)
    }


    return (
        <ScrollView contentContainerStyle={{flexGrow: 1}} showsVerticalScrollIndicator={false}>
        <VStack flex={1}  px={10}>
            <Image
                source={BackgroundImg}
                defaultSource={BackgroundImg}
                alt='Pessoas treinando'
                resizeMode='contain'
                position='absolute'
            />
            <Center my={24}>
                <LogoSvg />
                <Text color='gray.100' fontSize='sm'>Treine sua mente e o seu corpo</Text>
            </Center>
            <Center>
                <Heading color='gray.100' fontSize='xl' fontFamily='heading' mb={6}>Acesse sua conta</Heading>
                <Controller 
                    control={control}
                    name='email'
                    render={({field : { onChange, value }})=>(
                        <Input 
                        placeholder='E-mail'
                        keyboardType='email-address' 
                        autoCapitalize='none'
                        onChangeText={onChange}
                        value={value}
                        />
                    )}
                />
                <Controller 
                    control={control}
                    name='password'
                    render={({field : { onChange, value }})=>(
                        <Input 
                        placeholder='Senha' 
                        onChangeText={onChange}
                        value={value}
                        secureTextEntry
                        />
                    )}
                />
                <Button title='Acessar' onPress={handleSubmit(handleSignIn)}/>
            </Center>
            <Center mt={24}>
                <Text color='gray.100' fontSize='sm' mb={3} fontFamily='body'>
                    Ainda não tem acesso?
                </Text>
                <Button title='Criar conta' variant='outline' onPress={()=>navigate('signUp')}/>
            </Center>
        </VStack>
        </ScrollView>
    )
}