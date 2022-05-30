import Head from 'next/head';
import { Button, Flex, Stack } from '@chakra-ui/react';
import { Input } from '../components/Form/Input';

export default function Home() {
  return (
    <>
      <Head>
        <title>ignews | Home</title>
      </Head>
      <Flex w="100vh" h="100vh" align="center" justify="center">
        <Flex
          as="form"
          w="100%"
          maxW={360}
          bg="gray.800"
          p="8"
          borderRadius={8}
          flexDir="column"
        >
          <Stack spacing={4}>
            <Input name="email" type="email" label="email" />
            <Input name="password" type="password" label="senha" />
          </Stack>
          <Button type="submit" marginTop={6} colorScheme="pink">
            Entrar
          </Button>
        </Flex>
      </Flex>
    </>
  );
}
