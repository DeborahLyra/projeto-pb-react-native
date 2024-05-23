import { Avatar, Box, FlatList, Heading, HStack, VStack, Text, Spacer, Center } from "native-base";

export const Ranking = () => {
    const data = [{
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        fullName: "Aafreen Khan",
        likes: "2000000",
        recentText: "Good Day!",
        avatarUrl: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    }, {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
        fullName: "Sujitha Mathur",
        likes: "10000",
        recentText: "Cheer up, there!",
        avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEaZqT3fHeNrPGcnjLLX1v_W4mvBlgpwxnA&usqp=CAU"
    }, {
        id: "58694a0f-3da1-471f-bd96-145571e29d72",
        fullName: "Anci Barroco",
        likes: "6000",
        recentText: "Good Day!",
        avatarUrl: "https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg"
    }, {
        id: "68694a0f-3da1-431f-bd56-142371e29d72",
        fullName: "Aniket Kumar",
        likes: "3400",
        recentText: "All the best",
        avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU"
    }, {
        id: "28694a0f-3da1-471f-bd96-142456e29d72",
        fullName: "Kiara",
        likes: "2000",
        recentText: "I will call today.",
        avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU"
    }];
    return (
        <Box safeArea p={4}>
            <Center>
                <Heading mb={5} fontSize="3xl" color="tertiary.600">Ranking</Heading>
                <Text mb={10} fontSize="lg" color="tertiary.600">Confira a lista dos mais curtidos</Text>
            </Center>
            <FlatList data={data} renderItem={({
                item
            }) => {
                return <Box borderBottomWidth="1"  bg='muted.500' mb={4}
                 borderColor="muted.800" pl={["0", "4"]} pr={["0", "5"]} py="2">
                    <HStack space={[2, 3]} justifyContent="space-between" alignItems="center" mb={2} p={2}>
                        <Avatar size="48px" source={{
                            uri: item.avatarUrl
                        }} />
                        <VStack>
                            <Text _dark={{
                                color: "warmGray.50"
                            }} color="coolGray.200" bold>
                                {item.fullName}
                            </Text>
                        </VStack>
                        <Spacer />
                        <Text fontSize="md" _dark={{
                            color: "warmGray.50"
                        }} color="coolGray.200" alignSelf="flex-start">
                            {item.likes}
                        </Text>
                    </HStack>
                </Box>;
            }} keyExtractor={item => item.id} />
        </Box>
    )

};