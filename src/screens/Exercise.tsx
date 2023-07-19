import { VStack, Text, Icon, HStack, Heading, Image, Box, useTheme, ScrollView } from 'native-base'
import { TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { AppNavigatorRoutesPropps } from '@routes/app.routes'
import BodySvg from '@assets/body.svg'
import SeriesSvg from '@assets/series.svg'
import RepetitionSvg from '@assets/repetitions.svg'
import { Button } from '@components/Button'

export function Exercise() {
    const { goBack } = useNavigation<AppNavigatorRoutesPropps>()
    const { colors } = useTheme()
    return (
        <VStack flex={1}>
            <VStack px={8} bg={'gray.600'} pt={12}>
                <TouchableOpacity onPress={goBack}>
                    <Icon as={Feather} name='arrow-left' color='green.500' size={6} />
                </TouchableOpacity>
                <HStack justifyContent={'space-between'} mt={4} mb={8} alignItems={'center'}>
                    <Heading color={'gray.100'} fontSize={'lg'} flexShrink={1}>
                        Puxada frontal
                    </Heading>
                    <HStack alignItems={'center'}>
                        <BodySvg />
                        <Text color={'gray.200'} ml={1} textTransform={'capitalize'}>
                            Costas
                        </Text>
                    </HStack>
                </HStack>
            </VStack>
            <ScrollView>
            <VStack p={8}>
                <Image 
                    w={'full'}
                    h={80}
                    source={{uri: 'https://conteudo.imguol.com.br/c/entretenimento/0c/2019/12/03/remada-unilateral-com-halteres-1575402100538_v2_600x600.jpg'}}
                    alt='Nome do exercicio'
                    mb={3}
                    resizeMode='cover'
                    rounded={'lg'}
                />
                <Box bg={'gray.600'} rounded={'md'} pb={4} px={4}>
                    <HStack alignItems={'center'} justifyContent={'space-around'} mb={6} mt={5}>
                    <HStack alignItems={'center'}>
                        <SeriesSvg fill={colors.green[500]}/>
                        <Text color={'gray.200'} ml={2}>
                            3 séries
                        </Text>
                    </HStack>
                    <HStack alignItems={'center'}>
                        <RepetitionSvg fill={colors.green[500]} />
                        <Text color={'gray.200'} ml={2}>
                            12 repetições
                        </Text>
                    </HStack>
                    </HStack>
                    <Button title='Marcar como realizado'/>
                </Box>
            </VStack>
            </ScrollView>
        </VStack>
    )
}