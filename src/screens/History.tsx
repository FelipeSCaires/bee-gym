import { HistoryCard } from '@components/HistoryCart'
import { ScreenHeader } from '@components/ScreenHeader'
import { Center, Heading, Text, VStack, SectionList } from 'native-base'
import { useState } from 'react'

export function History(){
    const [exercises, setExercises] = useState([
        {
            title: '23.01.23',
            data:['Puxada frontal', 'Remada unilateral']
        },
        {
            title: '26.02.23',
            data:['Puxada frontal']
        }
    ])
    return(
        <VStack flex={1}>
            <ScreenHeader title='Histórico de exercícios' />
            <SectionList 
                sections={exercises}
                keyExtractor={item => item}
                renderItem={({item})=>(
                    <HistoryCard />
                )}
                renderSectionHeader={({section})=>(
                    <Heading color='gray.200' fontSize='md' mt={10} mb={3} fontFamily='heading'> 
                        {section.title}
                    </Heading>
                )}
                px={8}
                contentContainerStyle={exercises.length === 0 && { flex: 1, justifyContent: 'center'}}
                ListEmptyComponent={()=>(
                    <Text color='gray.100' textAlign='center'>
                        Não há exercícios registrados ainda. {'\n'}
                        Vamos fazer exercícios hoje?
                    </Text>
                )}
                showsVerticalScrollIndicator={false}
            />
        </VStack> 
    )
}