import React from 'react';
import { Login } from "@/screens/login/Login";
import { Box } from "native-base";

export default function Home() {
    return (
        <Box bg='muted.600' flex={1}>
            <Login />
        </Box>
    );
}
