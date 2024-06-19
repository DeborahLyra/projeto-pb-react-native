
import { Box, ScrollView,  Divider, Flex , Text, Center, Heading, Button, Pressable} from "native-base";
import { Posts } from "../posts/Posts";
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/types";

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

const Stack = createNativeStackNavigator<RootStackParamList>();

const url = "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D"

export function Dashboard() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <ScrollView  p={2} bg='muted.600'>
       <Center pt={20}>
        <Heading mb={5} fontSize="3xl" color="tertiary.600">ForumTalk</Heading>
      </Center>
      <Box alignItems="center" >
      <Flex direction="row" h="58" p="4">
      <Pressable onPress={() => navigation.navigate('Profile')}>
            <Text color="warmGray.50">Perfil</Text>
          </Pressable>
          <Divider bg="tertiary.600" thickness="2" mx="2" orientation="vertical" />
          <Pressable onPress={() => navigation.navigate('Ranking')}>
            <Text color="warmGray.50">Ranking</Text>
          </Pressable>
          <Divider bg="tertiary.600" thickness="2" mx="2" orientation="vertical" />
          <Pressable onPress={() => navigation.navigate('Camera')}>
            <Text color="warmGray.50">Camera</Text>
          </Pressable>
      </Flex>
    </Box>
     <Posts content={post}/>
    </ScrollView>
  )
}
