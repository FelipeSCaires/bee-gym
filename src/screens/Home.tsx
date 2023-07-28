import { ExerciseCard } from '@components/ExerciseCard'
import { Group } from '@components/Group'
import { HomeHeader } from '@components/HomeHeader'
import { useNavigation } from '@react-navigation/native'
import { AppNavigatorRoutesPropps } from '@routes/app.routes'
import { Center, HStack, Text, VStack, FlatList, Heading } from 'native-base'
import { useState } from 'react'

export function Home() {
    const [groupSelected, setGroupSelected] = useState('costas')
    const [groups, setGroups] = useState(['Costas','Bíceps','Tríceps','Ombro'])
    const [exercises, setExercises] = useState(['Puxda frontal','Remada curvada','Remada unilateral','Levantamento terra'])
    const {navigate} = useNavigation<AppNavigatorRoutesPropps>()
    function handleOpenExercisesDetail(){
        navigate('exercise')
    }
    return (
        <VStack flex={1}>
            <HomeHeader />
            <FlatList 
                data={groups}
                keyExtractor={item => item}
                renderItem={({item})=>(
                    <Group
                        name={item}
                        isActive={String(groupSelected).toUpperCase() === String(item).toUpperCase()}
                        onPress={() => setGroupSelected(item)}
                    />

                )}
                horizontal
                showsHorizontalScrollIndicator={false}
                _contentContainerStyle={{px: 8}}
                my={10}
                maxH={10}
                minH={10}
            />
            <VStack flex={1} px={8}>
            <HStack justifyContent='space-between' mb={5}>
                <Heading color='gray.200' fontSize='md' fontFamily='heading'>
                    Exercícios
                </Heading>
                <Text color='gray.200' fontSize='sm'>
                    {exercises.length}
                </Text>
            </HStack>
            <FlatList 
                data={exercises}
                keyExtractor={item => item}
                renderItem={({item})=>(
                    <ExerciseCard
                        title={item}
                        onPress={handleOpenExercisesDetail}
                    />
                )}
                showsVerticalScrollIndicator={false}
                _contentContainerStyle={{paddingBottom: 20}}
            />
            </VStack>
        </VStack>
    )
}