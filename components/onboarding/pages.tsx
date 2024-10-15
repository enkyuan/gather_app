// FIXME: role selection page needs to be appended to list

import Intro from '@/components/onboarding/routes/Intro';
import Username from '@/components/onboarding/routes/Username';
import RoleSelection from '@/components/onboarding/routes/RoleSelection';
import SchoolSelection from '@/components/onboarding/routes/SchoolSelection';
import GetStarted from '@/components/onboarding/routes/GetStarted';

export const pages = [
    <Intro />, 
    <Username />,
    <RoleSelection />,
    <SchoolSelection />,
    <GetStarted />
];
