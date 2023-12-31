import { VStack, Image, Center, Text, Heading, ScrollView } from 'native-base'
import BackgroundImg from '@assets/background.png'
import LogoSvg from '@assets/logo-horizontal.svg'
import { Input } from '@components/Input'
import { Button } from '@components/Button'
import { useNavigation } from '@react-navigation/native'
import { AuthNavigatorRoutesPropps } from '@routes/auth.routes'
import { useForm, Controller } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

type FormDataProps = {
    name: string
    email: string
    password: string
    password_confirm: string
}

const singUpSchema = yup.object({
    name: yup.string().required('Informe o nome.'),
    email: yup.string().required('Informe o e-mail.').email('E-mail invalido.'),
    password: yup.string().required('Informe a senha.').min(6, 'a senha deve ter pelo menos 6 digitos.'),
    password_confirm: yup.string().required('Confirme a senha.').oneOf([yup.ref('password')], 'A confirmação da senha não confere')
})

export function SignUp() {
    const { goBack } = useNavigation<AuthNavigatorRoutesPropps>()
    const { control, handleSubmit, formState: {errors} } = useForm<FormDataProps>({
        resolver: yupResolver(singUpSchema) as any
    })

    function handleSignUp(props: FormDataProps){
    }

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
                <Controller 
                    control={control}
                    name='name'

                    render={({field : { onChange, value }})=>(
                        <Input 
                        placeholder='Nome' 
                        onChangeText={onChange}
                        value={value}
                        errorMessage={errors.name?.message}
                        />
                    )}
                />
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
                        errorMessage={errors.email?.message}
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
                        errorMessage={errors.password?.message}
                        />
                    )}
                />
                <Controller 
                    control={control}
                    name='password_confirm'
                    render={({field : { onChange, value }})=>(
                        <Input 
                        placeholder='Confirmar senha' 
                        onChangeText={onChange}
                        value={value}
                        secureTextEntry
                        onSubmitEditing={handleSubmit(handleSignUp)}
                        returnKeyType='send'
                        errorMessage={errors.password_confirm?.message}
                        />
                    )}
                />
                <Button title='Criar e acessar' onPress={handleSubmit(handleSignUp)}/>
            </Center>
      
                <Button title='Voltar para o login' variant='outline' mt={24} onPress={goBack}/>
       
        </VStack>
        </ScrollView>
    )
}