import React, { useEffect, useState } from 'react'
import apiDeputados from '../../service/apiDeputados'
import { ScrollView } from 'react-native'
import { Button, Card, Text } from 'react-native-paper'

const Eventos = ({ navigation }) => {
    const [eventos, setEventos] = useState([])

    useEffect(() => {

        apiDeputados.get('/eventos/').then(resultado => {
            setEventos(resultado.data.dados)
        })
    }, [])
    return (
        <>
            <ScrollView>

                {eventos.map((item) => (
                    <Card key={item.id} style={{ marginBottom: 20 }}>
                        <Card.Content>
                            <Text variant="titleLarge">{item.descricaoTipo} - {item.situacao}</Text>
                            <Text variant="bodyMedium">{item.descricao}</Text>
                        </Card.Content>
                    </Card>
                ))}
            </ScrollView>
        </>
    )
}

export default Eventos