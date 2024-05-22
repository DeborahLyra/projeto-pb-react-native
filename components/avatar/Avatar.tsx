import { Box, Image } from 'native-base'

interface AvatarProps {
    src: string;
}

export function Avatar({ src }: AvatarProps) {
    return (
            <Image
                size="xs"
                borderRadius="full"
                source={{
                    uri: src
                }} 
            />
    )
}
