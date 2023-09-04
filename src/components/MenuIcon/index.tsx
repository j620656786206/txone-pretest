import { Flex, Icon, Menu, MenuToggle, FlexProps } from '@tonic-ui/react'
import { useColorMode, useColorStyle } from '@tonic-ui/react'
import MenuList from '../MenuList'

const Avatar = (props: FlexProps) => (
  <Flex
    p='1x'
    borderRadius='50%'
    alignItems='center'
    justifyContent='center'
    fontSize='xs'
    lineHeight='1'
    {...props}
  />
)

const CustomMenuToggleIcon = () => {
  const [colorMode] = useColorMode()
  const [colorStyle] = useColorStyle<any>({ colorMode })

  return (
    <Menu>
      <MenuToggle>
        <Avatar
          backgroundColor={colorStyle.background.secondary}
          color={colorStyle.color.secondary}
          _hover={{ color: colorStyle.color.primary }}
        >
          <Icon icon='user-team' size='5x' />
        </Avatar>
      </MenuToggle>

      <MenuList />
    </Menu>
  )
}

export default CustomMenuToggleIcon
