import React from 'react';
import Login from "@/screens/signup/Signup";
import { Box } from "native-base";

export default function Home() {
    return (
        <Box bg='muted.600' flex={1}>
            <Login />
        </Box>
    );
}
