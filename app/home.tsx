import React from 'react';
import { Login } from "@/screens/login/Login";
import { Box } from "native-base";
import { Dashboard } from '@/screens/dashboard/Dashboard';

export default function Home() {
    return (
        <Box bg='muted.600' flex={1}>
            {/* <Login /> */}
            <Dashboard/>
        </Box>
    );
}
