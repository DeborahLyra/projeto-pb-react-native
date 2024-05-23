import { Box, Flex, Text, IconButton, Icon } from "native-base";
import { Avatar } from "../avatar/Avatar";
import { formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { MaterialIcons } from '@expo/vector-icons';
import { useState } from "react";


interface CommentProps {
    content: {
        id: string;
        showComments: boolean;
        author: {
            name: string;
            role: string;
            avatarUrl: string;
        };
        postText: string;
        publishedAt: string;
    };
}
export function Comment({ content }: CommentProps) {
    const [likeCount, setLikeCount] = useState(0);

    const handleLikes = () => {
        setLikeCount(likeCount + 1);

    };

    const formattedDate = formatDistanceToNow(new Date(content.publishedAt), { locale: ptBR, addSuffix: true });
    return (

        <Box bg='muted.700' p={2} borderRadius={5} >
            <Flex direction="row" alignItems="center" justifyContent="start">
                <Avatar src={content.author.avatarUrl} />
                <Box ml={4}>
                    <Text fontSize="sm" color="warmGray.50" bold>{content.author.name}</Text>

                </Box>
            </Flex>
            <Box  bg='muted.600' p={4} borderRadius={5} mt={5}>
            <Text fontSize="sm" color='muted.900' bold>{content.postText}</Text>
            </Box>

            <Flex direction="row" justifyContent="space-between" alignItems='center'>
                <Flex direction="row" alignItems='center'>
                    <IconButton
                        icon={<Icon as={MaterialIcons} name="favorite" size="5" />}
                        borderRadius="full"
                        w={10}
                        _icon={{
                            color: "red.500",
                            size: "lg",
                        }}
                        onPress={handleLikes}
                    />
                    <IconButton
                        icon={<Icon as={MaterialIcons} name="delete" size="5" />}
                        borderRadius="full"
                        _icon={{
                            color: "tertiary.600",
                            size: "lg",
                        }}
                        _hover={{
                            bg: "red.600:alpha.20",
                        }}
                        _pressed={{
                            bg: "red.600:alpha.20",
                        }}
                        onPress={() => console.log('Delete post', content.id)}
                    />
                </Flex>
                <Text fontSize="xs" color="muted.900" mt={2}>
                    Publicado {formattedDate}
                </Text>
            </Flex>

        </Box>
    )
}
