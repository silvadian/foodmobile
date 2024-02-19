import React from 'react';
import { View } from 'react-native';

interface GapProps {
    width?: number;
    height?: number;
    backgroundColor? : string
}

const Gap = ({ width, height, backgroundColor }: GapProps) => {
    return <View style={{ width, height, backgroundColor }} />;
}

export default Gap
