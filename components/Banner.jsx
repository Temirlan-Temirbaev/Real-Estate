import Link from "next/link"
import Image from "next/image"
import { Flex, Box, Text, Button } from '@chakra-ui/react';

const Banner = ({purpose, title1, title2, desc1, linkName, buttonText, desc2, imageUrl}) => (
  <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
    <Image src={imageUrl} width={500} height={300} alt="banner" />
    <Box p="5">
      <Text color="gray.500" fontSize="sm" fontWeight="medium">{purpose}</Text>
      <Text fontSize="3xl" fontWeight="bold">{title1}<br />{title2}</Text>
      <Text color="gray.700" fontSize="lg" paddingTop="3" paddingBottom="3">{desc1}<br />{desc2}</Text>
      <Button fontSize="xl" bg="blue.300">
        <Link href={linkName} style={{color : 'white'}}>{buttonText}</Link>
      </Button>
    </Box>
  </Flex>
)

export default Banner;