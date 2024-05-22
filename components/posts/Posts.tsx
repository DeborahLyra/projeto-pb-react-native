import React from 'react';
import { Box, Center, Flex, Heading, Text } from 'native-base';
import { Avatar } from '../avatar/Avatar';

interface PostProps {
  content: {
    id: string;
    showComments: boolean;
    author: {
      name: string;
      role: string;
      avatarUrl: string;
    };
    postContent: 'conteúdo do post',
    publishedAt: "2024-04-30T20:20:00.000Z",
  };
}

export function Posts({ content }: PostProps) {
  return (

    <Box mt={32} px={4}>
      <Center>
        <Heading mb={10} fontSize="3xl" color="tertiary.600">ForumTalk</Heading>
      </Center>
      <Box bg= 'muted.400' p={4} borderRadius={5}>
        <Flex direction="row" alignItems="center" justifyContent="start" >
          <Avatar src={content.author.avatarUrl} />
          <Box ml={4}>
            <Text fontSize="md" bold>{content.author.name}</Text>
            <Text fontSize="xs" bold>{content.author.role}</Text>
          </Box>
        </Flex>
      </Box>
    </Box>

  );
}