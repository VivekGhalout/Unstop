import { Box, Drawer, DrawerBody, DrawerContent, DrawerOverlay, HStack, Spacer, Text, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { HiOutlineMenuAlt2 } from 'react-icons/hi';
import { RxCross2 } from 'react-icons/rx';
import { LuLayoutDashboard } from 'react-icons/lu';
import { BiTask } from 'react-icons/bi';
import { MdOutlineLibraryAddCheck } from 'react-icons/md';

function SideMenu() {

    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Box  color={'#1C4980'}>
            <HStack>
                <Box p={'8px'} bg={'#F6F8FA'} borderRadius={'20px'} onClick={onOpen} ><HiOutlineMenuAlt2 size={'25px'} /></Box>
                <Text bg={'white'} pb={'3px'} fontWeight={'600'}>Assessment</Text>
            </HStack>
            <Drawer placement={'left'} onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent >
                    <DrawerBody pt={'40px'} bg={'#F2F8FE'}>
                        <HStack p={'10px'} color={'#1C4980'}>
                            <Text>Menu</Text>
                            <Spacer />
                            <Box onClick={onClose}><RxCross2 /></Box>
                            
                        </HStack>
                        <Box>
                            <HStack color={'#1C4980'} p={'15px'}>
                                <LuLayoutDashboard />
                                <Text>Dashboard</Text>
                            </HStack>
                            <HStack color={'#0073E6'} bg={'#E5F1FC'} p={'15px'} borderRadius={'10px'} border={'1px solid #0073E6'}>
                                <BiTask />
                                <Text>Assessment</Text>
                            </HStack>
                            <HStack color={'#1C4980'} p={'15px'}>
                                <MdOutlineLibraryAddCheck />
                                <Text>My Library</Text>
                            </HStack>
                            <HStack color={'#1C4980'} p={'15px'}>
                                <LuLayoutDashboard />
                                <Text>Round Status</Text>
                                <Text color={'#D63500'} pt={'2px'} px={'15px'} fontSize={'10px'} h={'20px'} borderRadius={'10px'} bg={'#FBEBEA'} border={'1px solid #D63500'}>Admin</Text>
                            </HStack>
                        </Box>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Box>
    )
}

export default SideMenu