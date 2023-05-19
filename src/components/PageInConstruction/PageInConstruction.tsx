import { Grid, VStack, Box, Text, Image, Icon, HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

export const PageInConstruction = () => (
  <Box textAlign="center" fontSize="lg">
    <Grid minH="100vh" p={3} alignItems={"center"}>
      {/* <ColorModeSwitcher justifySelf="flex-end" /> */}
      <VStack spacing={6}>
        <Image src="/logoMazal.png" w={"50%"} />
        <Text fontSize={"5xl"}>Sitio web en construcción</Text>
        <Text fontSize={"xl"}>Por consultas y catálogo comunicarse al:</Text>
        <Link
          color="teal.500"
          to="https://wa.me/5491145376452"
          target="_blank"
          rel="noopener noreferrer"
        >
          <HStack>
            <Icon as={FaWhatsapp} />
            <Text>+5491145376452</Text>
          </HStack>
        </Link>
        <Link
          color="teal.500"
          to="mailto:info@mazalimportaciones.com.ar"
          target="_blank"
          rel="noopener noreferrer"
        >
          <HStack>
            <Icon as={MdOutlineEmail} />
            <Text>info@mazalimportaciones.com.ar</Text>
          </HStack>
        </Link>
      </VStack>
    </Grid>
  </Box>
);
