// FIXME: replace data with values to be rendered

import React, { FC } from 'react';
import EnterName from "./routes/EnterName"; 
import SchoolSelection from "./routes/SchoolSelection";
import RoleSelection from "./routes/RoleSelection";

export interface OnboardingData {
    id: number; 
    screen: FC;
}

const data: OnboardingData[] = [
    {
        id: 1,
        screen: EnterName,
    },
    {
        id: 2,
        screen: SchoolSelection,
    },
    {
        id: 3,
        screen: RoleSelection,
    }
];

export default data;
