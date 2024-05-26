import React from "react";
import { Box, Button, Heading, Icon, Input, Pressable, Stack } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons"
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from "@/types";

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

export function Login({ navigation }: Props) {
  const [show, setShow] = React.useState(false);

  return (
    <Box
      alignItems="center"
      justifyContent="center"
      flex={1}
      p={2}
      bg='muted.600'>
      <Icon as={Ionicons} name="chatbubble" size="6xl" color="tertiary.600" mb={10} />
      <Heading color='tertiary.600' mb={10}> ForunTalk</Heading>
      <Stack space={8} w="100%" alignItems="center" >
        <Input
          w={{ base: "80%", md: "40%" }}
          h={12}
          bg={'muted.50'}
          InputLeftElement={<Icon as={<MaterialIcons name="person" />} size={5} ml="2" color="muted.400" />} placeholder="Digite seu email" />
        <Input
          w={{ base: "80%", md: "40%" }}
          h={12}
          bg={'muted.50'}
          type={show ? "text" : "password"} InputRightElement={<Pressable onPress={() => setShow(!show)}>
            <Icon as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />} size={5} mr="2" color="muted.400" />
          </Pressable>} placeholder="Digite sua senha" />
      </Stack>
      <Button
        bg='tertiary.600'
        mt={8}
        w="80%"
        onPress={() => navigation.navigate('Dashboard')}
      >
        Entrar
      </Button>
      <Button
      variant="outline" 
      colorScheme="primary" 
        mt={8}
        w="80%"
      >
        Cadastrar
      </Button>
    </Box>


  );
}