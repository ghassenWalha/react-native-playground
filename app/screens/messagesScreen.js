import React from 'react';
import { FlatList, View } from 'react-native';
import ListItem from '../components/ListItem';
import Screen from '../components/Screen';
import ListItemSeparator from '../components/ListItemSeparator';
import ListItemDeleteAction from '../components/ListItemDeleteAction';
const messages = [
    {
        id: 1,
        title: 'T1',
        description: 'D1',
        image: require('../assets/mosh.jpg')
    },
    {
        id: 2,
        title: 'T2',
        description: 'D2',
        image: require('../assets/mosh.jpg')
    },
    {
        id: 3,
        title: 'T3',
        description: 'D3',
        image: require('../assets/mosh.jpg')
    }
]


const MessagesScreen = () => {
    return (
        <Screen >

            <FlatList
                data={messages}
                keyExtractor={message => message.id.toString}
                renderItem={({ item }) => <ListItem
                    title={item.title}
                    subTitle={item.description}
                    image={item.image}
                    onPress={() => console.log("messege selected")}
                    renderRightActions={ListItemDeleteAction}
                />}
                ItemSeparatorComponent={() => <ListItemSeparator />}
            />
        </Screen>
    );
}



export default MessagesScreen;