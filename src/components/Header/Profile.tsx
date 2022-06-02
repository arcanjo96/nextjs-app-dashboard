import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Lucas Arcanjo</Text>
        <Text color="gray.300" fontSize="small">
          lucas@mail.com
        </Text>

        <Avatar
          size="md"
          name="Lucas Arcanjo"
          src="https://github.com/arcanjo96.png"
        />
      </Box>
    </Flex>
  );
}
