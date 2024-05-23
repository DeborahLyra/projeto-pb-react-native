import React, { useState } from 'react';
import { Box, Center, Flex, Heading, Text, IconButton, Icon } from 'native-base';
import { Avatar } from '../avatar/Avatar';
import { MaterialIcons } from '@expo/vector-icons';
import { formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

interface PostProps {
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

export function Posts({ content }: PostProps) {

  const [likeCount, setLikeCount] = useState(0);

  const handleLikes = () => {
    setLikeCount(likeCount + 1);

  };

  const formattedDate = formatDistanceToNow(new Date(content.publishedAt), { locale: ptBR, addSuffix: true });


  return (
    <Box mt={32} px={4}>
      <Center>
        <Heading mb={10} fontSize="3xl" color="tertiary.600">ForumTalk</Heading>
      </Center>
      <Box bg='muted.400' p={4} borderRadius={5}>
        <Flex direction="row" alignItems="center" justifyContent="start">
          <Avatar src={content.author.avatarUrl} />
          <Box ml={4}>
            <Text fontSize="md" bold>{content.author.name}</Text>
            <Text fontSize="xs" bold>{content.author.role}</Text>
          </Box>
        </Flex>
        <Box bg='muted.500' p={4} borderRadius={5} mt={5}>
          <Flex direction="row" justifyContent="space-between" alignItems="center">
            <Box maxW={'80%'}>
              <Text fontSize="sm" color='muted.900' bold>{content.postText}</Text>
            </Box>
            <IconButton
              icon={<Icon as={MaterialIcons} name="delete" size="5" />}
              borderRadius="full"
              _icon={{
                color: "red.500",
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
                icon={<Icon as={MaterialIcons} name="keyboard-arrow-down" size="5" />}
                borderRadius="full"
                w={10}

                _icon={{
                  color: "tertiary.600",
                  size: "lg",
                }}
                onPress={() => console.log('show post', content.id)}
              />
            </Flex>
            <Text fontSize="xs" color="muted.700" mt={2}>
              Publicado {formattedDate}
            </Text>
          </Flex>


        </Box>
      </Box>
    </Box>
  );
}
