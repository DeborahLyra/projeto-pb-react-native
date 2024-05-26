import React from 'react';
import { Login } from "@/screens/login/Login";
import { Box } from "native-base";
import { Dashboard } from '@/screens/dashboard/Dashboard';
import {Ranking} from '../screens/ranking/Ranking'
import { Profile } from '@/screens/profile/Profile';
import { Signin } from '@/screens/signin/Signin';
import { NavigationContainer } from '@react-navigation/native';

export default function Home() {
    return (
        <Box bg='muted.600' flex={1}>
            {/* <Login /> */}
            {/* <Dashboard/> */}
            {/* <Profile/> */}
            {/* <Ranking/> */}
            {/* <Signin/> */}
        </Box>
    );
}
