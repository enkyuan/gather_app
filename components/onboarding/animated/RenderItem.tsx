import React from 'react';
import { View, Text } from 'react-native';
import { OnboardingData } from './data';

type Props = {
    item: OnboardingData;    
    index: number;
}

export const RenderItem = ({ item, index }: Props) => {
    const {width: SCREEN_WIDTH} = useWindowDimensions();

    return (
        <View>
            <Text>{item.text}</Text>
        </View>
    )
}

