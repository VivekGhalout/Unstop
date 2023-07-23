import { Box, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, Flex, FormLabel, Grid, HStack, Input, Select, SimpleGrid, Spacer, Tab, TabList, Tabs, Tag, TagCloseButton, TagLabel, Text, VStack, useDisclosure } from '@chakra-ui/react'
import React, { useState } from 'react'
import { MdOutlineLaptopMac, MdFilterAlt } from 'react-icons/md';
import { AiOutlinePlus } from 'react-icons/ai';
import { BiSolidBarChartAlt2, BiSearchAlt2 } from 'react-icons/bi';
import { LuServer, LuUsers } from 'react-icons/lu';
import { PiGlobeBold } from 'react-icons/pi';
import { FiLink2 } from 'react-icons/fi';
import Card from './Card';
import SideMenu from './SideMenu';




function MobileView({ viewPort, setViewPort }) {

    const { isOpen, onOpen, onClose } = useDisclosure()

    const [toggle, setToggle] = useState(false)

    const arr = [
        {
            id: 1,
            logoCount: ['#6548EE']
        },
        {
            id: 2,
            num: 324,
            logoCount: ['#6548EE', '#3079E1', '#E9407A']
        },
        {
            id: 3,
            num: 324,
            logoCount: ['#6548EE', '#3079E1', '#E9407A']
        },
        {
            id: 4,
            num: 324,
            logoCount: ['#6548EE', '#3079E1', '#E9407A']
        },
        {
            id: 5,
            num: 324,
            logoCount: ['#6548EE', '#3079E1', '#E9407A']
        },
        {
            id: 6,
            num: 324,
            logoCount: ['#6548EE', '#3079E1', '#E9407A']
        },
        {
            id: 7,
            num: '32,4090',
            logoCount: ['#6548EE', '#E9407A']
        },
    ]

    return (
        <Box pb={'20px'} color={'#1C4980'} w={'25%'} border={'1px solid black'} minH={'100vh'} mx={'auto'}>
            <HStack px={'15px'} py={'18px'}>
                <SideMenu />
                <Spacer />
                <Box onClick={() => { setViewPort(!viewPort) }}>
                    <MdOutlineLaptopMac size={'20px'} />
                </Box>
            </HStack>

            <Tabs>
                <TabList >
                    <Tab w={'50%'} fontSize={'15px'} fontWeight={'600'}>My Assessments</Tab>
                    <Tab w={'50%'} fontSize={'15px'} fontWeight={'600'}>Unstop Assessments</Tab>
                </TabList>
            </Tabs>

            <Box display={toggle ? '' : 'none'} w={'92%'} mx={'auto'} my={'20px'} fontWeight={'500'} border={'1px solid #E3E5E8'} borderRadius={'10px'}>
                <Flex >
                    <Box p={'15px'} w={'50%'}>
                        <Text textAlign={'left'} pb={'8px'}>Total Assessment</Text>
                        <HStack>
                            <Box p={'13px'} bg={'#EBE8FD'} borderRadius={'10px'}>
                                <LuServer color='#6548EE' />
                            </Box>
                            <Text>34</Text>
                        </HStack>
                    </Box>
                    <Box w={'50%'} borderLeft={'1px solid #E3E5E8'} p={'15px'}>
                        <Text textAlign={'left'} pb={'8px'}>Total Purpose</Text>
                        <HStack>
                            <Box p={'13px'} bg={'#E5F1FC'} borderRadius={'10px'} color={'#0073E6'}>
                                <FiLink2 />
                            </Box>
                            <Text>11</Text>
                        </HStack>
                    </Box>
                </Flex>
                <Box textAlign={'left'} borderTop={'1px solid #E3E5E8'} borderBottom={'1px solid #E3E5E8'} p={'15px'}>
                    <Text pb={'8px'}>Candidates</Text>
                    <HStack>
                        <Box p={'13px'} bg={'#EBE8FD'} borderRadius={'10px'}>
                            <LuUsers color='#6548EE' />
                        </Box>
                        <Box>
                            <Text>11,145 <Text as={'span'} color={'#05C165'} fontSize={'11px'}>+89</Text></Text>
                            <Text fontSize={'10px'}>Total Candidate</Text>
                        </Box>
                        <Box borderLeft={'1px solid #E3E5E8'} ml={'5px'} pl={'9px'}>
                            <Text>1,14 <Text color={'#05C165'} fontSize={'11px'} as={'span'}>+89</Text></Text>
                            <Text fontSize={'10px'}>Who Attempted</Text>
                        </Box>
                    </HStack>
                </Box>
                <Box textAlign={'left'} p={'15px'}>
                    <Text pb={'8px'}>Candidates Source</Text>
                    <HStack>
                        <Box p={'13px'} bg={'#FCE8EF'} borderRadius={'10px'} >
                            <PiGlobeBold color='#E9407A' />
                        </Box>
                        <Box>
                            <Text>11,000 <Text color={'#05C165'} fontSize={'11px'} as={'span'}>+89</Text></Text>
                            <Text fontSize={'10px'}>E-mail</Text>
                        </Box>
                        <Box borderLeft={'1px solid #E3E5E8'} pl={'9px'} ml={'5px'}>
                            <Text>11,000 <Text color={'#05C165'} fontSize={'11px'} as={'span'}>+89</Text></Text>
                            <Text fontSize={'10px'}>Social Share</Text>
                        </Box>
                        <Box borderLeft={'1px solid #E3E5E8'} pl={'9px'} ml={'5px'}>
                            <Text>11,000 <Text color={'#05C165'} fontSize={'11px'} as={'span'}>+89</Text></Text>
                            <Text fontSize={'10px'}>Unique link</Text>
                        </Box>
                    </HStack>
                </Box>
            </Box>

            <Flex px={'20px'} py={'20px'}>
                <Text fontWeight={'600'} fontSize={'17px'}>My Assessment</Text>
                <Spacer />
                <HStack gap={'23px'}>
                    <BiSearchAlt2 size={'21px'} />
                    <MdFilterAlt size={'25px'} />
                    <Box onClick={() => { setToggle(!toggle) }} p={'10px'} borderRadius={'30px'} bg={!toggle ? "white" : '#F2F8FE'} border={!toggle ? "" : '1px solid #0073E6'}>
                        <BiSolidBarChartAlt2 size={'20px'} />
                    </Box>

                </HStack>
            </Flex>
            <VStack py={'25px'} px={'15px'} w={'95%'} bg={'#F6F8FA'} border={'1px dashed #D8DADE'} borderRadius={'10px'} mx={'auto'}>
                <Box p={'15px'} bg={'white'} borderRadius={'40px'} onClick={onOpen}><AiOutlinePlus size={'25px'} color='#0073E6' /></Box>
                <Text fontWeight={'600'}>New Assessment</Text>
                <Text mx={'34px'} fontWeight={'600'} fontSize={'12px'}>
                    From here you can add questions of multiple types like MCQs, subjective (text or paragraph)!
                </Text>
            </VStack>

            <Drawer placement={'bottom'} size={'200px'} onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent w={'25%'} mx={'auto'}>
                    <DrawerHeader borderBottomWidth='1px'>Basic Drawer</DrawerHeader>
                    <DrawerBody >
                        <FormLabel>Name of the assessment</FormLabel>
                        <Input placeholder='Type Here' />
                        <FormLabel>Purpose of the test is</FormLabel>
                        <Select placeholder='Select'></Select>
                        <FormLabel>Description</FormLabel>
                        <Select placeholder='Select'></Select>
                        <FormLabel>Skills</FormLabel>
                        <Grid templateColumns='repeat(2, 1fr)' gap={"10px"} p={"16px"} h={"216px"} borderRadius={"8px 8px 0px 0px"} border={"1px solid #DDE5EA"}>
                            <Tag
                                w="142px"
                                h="30px"
                                borderRadius='22px'
                                bg="#DDEDFF"
                                p={"6px 8px"}
                            >
                                <TagLabel fontSize={"12px"} fontWeight={"500"} color={"#1C4980"}>UI/UX and Design</TagLabel>
                                <TagCloseButton color={"#1C4980"} />
                            </Tag>
                            <Tag
                                w="142px"
                                h="30px"
                                borderRadius='22px'
                                bg="#DDEDFF"
                                p={"6px 8px"}
                            >
                                <TagLabel fontSize={"12px"} fontWeight={"500"} color={"#1C4980"}>No of Question</TagLabel>
                                <TagCloseButton color={"#1C4980"} />
                            </Tag>
                            <Tag
                                w="142px"
                                h="30px"
                                borderRadius='22px'
                                bg="#DDEDFF"
                                p={"6px 8px"}
                            >
                                <TagLabel fontSize={"12px"} fontWeight={"500"} color={"#1C4980"}>Web Development</TagLabel>
                                <TagCloseButton color={"#1C4980"} />
                            </Tag>
                            <Tag
                                w="142px"
                                h="30px"
                                borderRadius='22px'
                                bg="#DDEDFF"
                                p={"6px 8px"}
                            >
                                <TagLabel fontSize={"12px"} fontWeight={"500"} color={"#1C4980"}>UI/UX and Design</TagLabel>
                                <TagCloseButton color={"#1C4980"} />
                            </Tag>
                            <Tag
                                w="142px"
                                h="30px"
                                borderRadius='22px'
                                bg="#DDEDFF"
                                p={"6px 8px"}
                            >
                                <TagLabel fontSize={"12px"} fontWeight={"500"} color={"#1C4980"}>Web Development</TagLabel>
                                <TagCloseButton color={"#1C4980"} />
                            </Tag>

                        </Grid>
                        <Input placeholder='Type here' />
                        <FormLabel>Duration of assessment</FormLabel>
                        <Input type='date' placeholder='Type Here' />
                    </DrawerBody>
                </DrawerContent>
            </Drawer>

            {
                arr.map((el) => {
                    return <Card {...el} />
                })
            }

        </Box>
    )
}

export default MobileView