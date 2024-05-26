import { Box, FormControl, Input, Stack, WarningOutlineIcon, Text, Divider, Heading, Icon, TextArea, Button, ScrollView, Center } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons"

export function Signin() {
    return (
        <ScrollView  >
            <Center alignSelf="center" px="4" safeArea w="100%">
                <Icon as={Ionicons} name="chatbubble" size="6xl" color="tertiary.600" mb={10} />
                <Heading color='tertiary.600' mb={5}> ForunTalk</Heading>
                <Text color="tertiary.600" bold mb={5} >Página de cadastro</Text>
                <Box w="100%" maxWidth="300px" >


                    <FormControl isRequired >
                        <Stack mx="4">
                            <FormControl.Label>Nome</FormControl.Label>
                            <Input type="text" placeholder="Digite seu nome" />
                            <FormControl.HelperText>
                                Precisa ter ao mínimo 3 caracteres
                            </FormControl.HelperText>
                            <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                                Precisa ter ao mínimo 3 caracteres
                            </FormControl.ErrorMessage>
                        </Stack>
                    </FormControl>


                    <Divider mt={4}/>
                    <FormControl isRequired>
                        <Stack mx="4">
                            <FormControl.Label>Nome de usuário</FormControl.Label>
                            <Input type="text" placeholder="Digite um nome de usuário" />
                            <FormControl.HelperText>
                                Precisa ter ao mínimo 3 caracteres
                            </FormControl.HelperText>
                            <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                                Precisa ter ao mínimo 3 caracteres
                            </FormControl.ErrorMessage>
                        </Stack>
                    </FormControl>

                    <Divider mt={4}/>
                    <FormControl isRequired>
                        <Stack mx="4">
                            <FormControl.Label>Email</FormControl.Label>
                            <Input type="text" placeholder="Digite seu email" />
                            <FormControl.HelperText>
                                Digite um email válido
                            </FormControl.HelperText>
                            <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                                Email inválido
                            </FormControl.ErrorMessage>
                        </Stack>
                    </FormControl>

                    <Divider mt={4}/>
                    <FormControl isRequired>
                        <Stack mx="4">
                            <FormControl.Label>Data de nascimento</FormControl.Label>
                            <Input type="text" placeholder="Digite sua data de nascimento" />
                            <FormControl.HelperText>
                                Precisa ter ao mínimo 3 caracteres
                            </FormControl.HelperText>
                            <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                                Precisa ter ao mínimo 3 caracteres
                            </FormControl.ErrorMessage>
                        </Stack>
                    </FormControl>

                    <Divider mt={4}/>
                    <FormControl isRequired>
                        <Stack mx="4">
                            <FormControl.Label>Senha</FormControl.Label>
                            <Input type="password" placeholder="Digite uma senha" />
                            <FormControl.HelperText>
                                Precisa ter ao mínimo 6 caracteres
                            </FormControl.HelperText>
                            <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                                Precisa ter ao mínimo 6 caracteres
                            </FormControl.ErrorMessage>
                        </Stack>
                    </FormControl>
                    <Divider mb={4} />
                    <Box alignItems="center" w="100%">
                        <TextArea h={20} placeholder="Fale sobre você" w="90%" maxW="300" />
                    </Box>
                    <Button shadow={2} mt={4} variant={"subtle"} onPress={() => console.log("hello world")}>
                        Cadastrar
                    </Button>;
                </Box>
            </Center>
        </ScrollView>
    )
}
