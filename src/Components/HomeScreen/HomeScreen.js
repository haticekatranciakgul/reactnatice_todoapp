import React, { useState } from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';
import { Text, TextInput, Button, Card, Provider as PaperProvider } from 'react-native-paper';


const TodoApp = () => {
    const [todos, setTodos] = useState([
        { text: 'Ödevler kontrol edilecek', completed: false },
        { text: 'Köpekler gezdirilecek', completed: false },
        { text: 'Çöpler atılacak', completed: false },
        { text: 'Eve temizlenecek', completed: false },
    ]);
    const [input, setInput] = useState('');

    const addTodo = () => {
        if (input.trim()) {
            setTodos([...todos, { text: input, completed: false }]);
            setInput('');
        }
    };

    const toggleComplete = (index) => {
        const newTodos = [...todos];
        newTodos[index].completed = !newTodos[index].completed;
        setTodos(newTodos);
    };

    return (
        <PaperProvider>
            <View style={{ flex: 1, backgroundColor: '#121212', padding: 20 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text variant="displaySmall" style={{ color: 'orange', fontWeight: 'bold' }}>
                        Yapılacaklar
                    </Text>
                    <Text variant="headlineLarge" style={{ color: 'orange' }}>{todos.length}</Text>
                </View>
                <FlatList
                    data={todos}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity onPress={() => toggleComplete(index)}>
                            <Card
                                style={{
                                    backgroundColor: item.completed ? '#444' : 'green',
                                    marginVertical: 5,
                                    opacity: item.completed ? 0.5 : 1, 
                                }}
                            >
                                <Card.Content>
                                    <Text variant="bodyLarge" style={{ color: item.completed ? '#bbb' : 'white' }}>
                                        {item.text}
                                    </Text>
                                </Card.Content>
                            </Card>
                        </TouchableOpacity>
                    )}
                />

            
                <View style={{ marginTop: 20 }}>
                    <TextInput
                        mode="outlined"
                        placeholder="Yapılacak..."
                        value={input}
                        onChangeText={setInput}
                        style={{ backgroundColor: '#333', color: 'white' }}
                    />
                    <Button mode="contained" onPress={addTodo} style={{ marginTop: 10, backgroundColor: '#555' }}>
                        Kaydet
                    </Button>
                </View>
            </View>
        </PaperProvider>
    );
};

export default TodoApp;
