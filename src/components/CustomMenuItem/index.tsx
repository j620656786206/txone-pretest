import { MenuItem, Icon, Text } from '@tonic-ui/react'

type TProps = {
  icon?: string
  text?: string
}

const CustomMenuItem = ({ icon, text }: TProps) => {
  return (
    <MenuItem>
      {icon && <Icon icon={icon} mr='2x' />}
      <Text>{text}</Text>
    </MenuItem>
  )
}

export default CustomMenuItem
