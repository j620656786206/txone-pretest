import { MenuList } from '@tonic-ui/react'
import { menuList } from './config'
import CustomMenuItem from '../CustomMenuItem'

const CustomMenuList = () => {
  return (
    <MenuList maxHeight={116} overflow='auto' width='max-content'>
      {menuList.map(({ icon, text }, index) => (
        <CustomMenuItem
          key={`${icon}-${text}-${index}`}
          icon={icon}
          text={text}
        />
      ))}
    </MenuList>
  )
}

export default CustomMenuList
