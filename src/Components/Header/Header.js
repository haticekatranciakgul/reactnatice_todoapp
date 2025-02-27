import React from 'react';
import { Appbar } from 'react-native-paper';

const Header = () => {
    return (
        <Appbar.Header style={{ backgroundColor: 'gray' }}>
            <Appbar.BackAction onPress={() => console.log('Geri')} />
            <Appbar.Content title="Ana Sayfa" />
            <Appbar.Action icon="magnify" onPress={() => console.log('Ara')} />
            <Appbar.Action icon="dots-vertical" onPress={() => console.log('Menü')} />
        </Appbar.Header>
    );
};

export default Header;