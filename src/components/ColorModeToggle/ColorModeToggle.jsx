import { useColorMode, Flex, Text, Switch, useStyleConfig } from '@chakra-ui/react';

const ColorModeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const styles = useStyleConfig('ColorModeToggle');

  return (
    <Flex align="center" {...styles}>
      <Text fontSize="sm" mr="2">
        {colorMode === 'dark' ? 'Dark Mode' : 'Light Mode'}
      </Text>
      <Switch
        size="md"
        onChange={toggleColorMode}
        isChecked={colorMode === 'dark'}
        colorScheme="teal"
      />
    </Flex>
  );
};

export default ColorModeToggle;