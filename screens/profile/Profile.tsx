import { Avatar } from "@/components/avatar/Avatar";
import { Box, Center, Flex, Heading, Text, Divider } from "native-base";

const post = {
    id: "2",
    showComments: false,
    author: {
        name: "The Worried Pug",
        role: "Web Developer",
        avatarUrl: "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D"
    },
    postText: "texto do post texto do posttexto do posttexto do posttexto do posttexto do posttexto do post ",
    publishedAt: "2024-04-30T20:20:00.000Z"
};

export function Profile() {
    return (
        <Box safeArea p={4} >
            <Center>
                <Heading mb={10} fontSize="3xl" color="tertiary.600">Perfil</Heading>
            </Center>
            <Box bg='muted.500' borderRadius={5} p={4}>
                <Flex direction="row" justifyContent="space-between" alignItems="center" p={4} >
                    <Avatar src={post.author.avatarUrl} />
                    <Text fontSize="lg" bold color='tertiary.600' >{post.author.name} </Text>
                </Flex>
                <Box >
                    <Text fontSize="md" mb={2} color="tertiary.700"> Nome completo: </Text>
                    <Text fontSize="md" mb={4} bold> Bruce Foster</Text>
                    <Divider my="2" bgColor={'tertiary.600'} />
                    <Text fontSize="md" mb={2} color="tertiary.700">Cargo: </Text>
                    <Text fontSize="md" mb={4} bold>{post.author.role}</Text>
                    <Divider my="2" bgColor={'tertiary.600'} />
                    <Text fontSize="md" mb={2} color="tertiary.700">Data de nascimento: </Text>
                    <Text fontSize="md" mb={4} bold>12/12/1912</Text>
                    <Divider my="2" bgColor={'tertiary.600'} />
                    <Text fontSize="md" mb={2} color="tertiary.700">Sobre:</Text>
                    <Text fontSize="md">
                        Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt
                        cillum culpa consequat. Excepteur qui ipsum aliquip consequat sint.
                        Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud
                        pariatur mollit ad adipisicing reprehenderit deserunt qui eu.
                    </Text>
                </Box>
            </Box>
        </Box>
    )
}
