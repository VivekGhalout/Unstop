import React from 'react'
import { LuLayoutDashboard } from 'react-icons/lu';
import { LuClipboardSignature } from 'react-icons/lu';
import { LuClipboardCheck } from 'react-icons/lu';
import { BsQuestionSquare } from 'react-icons/bs';
import { BiMobile } from 'react-icons/bi';
import { LuServer } from 'react-icons/lu';
import { LuUsers } from 'react-icons/lu';
import { PiGlobeBold } from 'react-icons/pi';
import { FiLink2 } from 'react-icons/fi';
import { BiPlus } from 'react-icons/bi';
import { BsHandbag } from 'react-icons/bs';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { AiOutlineLink } from 'react-icons/ai';
import { Flex, IconButton, Text, Box, useDisclosure, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, Input, DrawerFooter, Button, Select, Grid, GridItem, Tag, TagLabel, TagCloseButton } from '@chakra-ui/react'

function Desktop({ viewPort, setViewPort }) {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Flex gap={"20px"} bg={"#DADCE0"}>
            <Flex w={"140px"} h={"992px"} p={"16px 20px 20px 30px"} flexDirection={"column"} gap={"16px"} bg={"#fff"}>
                <Box w={"90px"}>
                    <Flex w={"90px"} h={"70px"} p={"10px"} fontSize={"12px"} fontWeight={"500"} flexDirection={"column"} gap={"6px"} alignItems={"center"} color={"#1C4980"} marginTop={"16px"}>
                        <LuLayoutDashboard size={"18px"} />
                        Dashboard
                    </Flex>
                    <Flex w={"90px"} h={"70px"} p={"10px"} fontSize={"12px"} fontWeight={"500"} flexDirection={"column"} gap={"6px"} alignItems={"center"} marginTop={"16px"} border={"1px solid #0073E6"} bg={"#E5F1FC"} borderRadius={"8px"} color={"#0073E6"}>
                        <LuClipboardSignature size={"18px"} />
                        Assesment
                    </Flex>
                    <Flex w={"90px"} h={"70px"} p={"10px"} fontSize={"12px"} fontWeight={"500"} flexDirection={"column"} gap={"6px"} alignItems={"center"} color={"#1C4980"} marginTop={"16px"}>
                        <BsQuestionSquare size={"18px"} />
                        Library
                    </Flex>
                </Box>
                <Flex borderTop={"1px dashed #DCDCDC"} w={"90px"} h={"120px"} p={"20px 10px 10px 10px"} fontSize={"12px"} fontWeight={"500"} flexDirection={"column"} gap={"10px"} alignItems={"center"} textAlign={"center"}>
                    <Text color={"D63500"} border={"1px solid #D63500"} borderRadius={"22px"} p={"0px 8px"} h={"18px"} bg={"#FBEBEA"}>Admin</Text>
                    <LuClipboardCheck size={"20px"} />
                    Round Status
                </Flex>
            </Flex>
            <Box w={"1264px"} h={"1020px"}>
                <Flex w={"1264px"} h={"70px"} p={"0px 20px"} borderBottom={"1px solid #DADCE0"} justifyContent={"space-between"} alignItems={"center"} bg={"#fff"} borderRadius={"12px 12px 0px 0px"}>
                    <Flex justifyContent={"center"} alignItems={"center"} w={"276px"} h={"70px"} gap={"20px"}>
                        <Text fontSize={"20px"} fontWeight={"600"} h={"40px"} w={"140px"} borderRight={"2px solid #DADCE0"} color={"#1C4980"}>Assesment</Text>
                        <Text fontSize={"14px"} fontWeight={"600"} h={"28px"} w={"116px"} color={"#0073E6"}>My Assesment</Text>
                    </Flex>
                    <Box onClick={() => {setViewPort(!viewPort)}}>
                        <BiMobile size={"25px"} />
                    </Box>
                </Flex>
                <Box w={"1264px"} h={"664px"} p={"20px"} bg={"#fff"} borderRadius={"0px 0px 12px 12px"}>
                    <Flex h={"155px"} flexDirection={"column"} justifyContent={"space-between"}>
                        <Text fontSize={"18px"} fontWeight={"500"} color={"#1C4980"}>Assessment Overview</Text>
                        <Flex h={"114px"} borderRadius={"12px"} border={"1px solid #DADCE0"} justifyContent={"center"}>
                            <Box p={"16px 20px"} h={"114px"} w={"162px"}>
                                <Text fontSize={"14px"} fontWeight={"600"} color={"#1C4980"}>Total Assessment</Text>
                                <Flex gap={"10px"} alignItems={"center"} pt={"15px"} color={"#1C4980"}>
                                    <IconButton
                                        variant='outline'
                                        bg="#EBE8FD"
                                        size='md'
                                        icon={<LuServer color={"#8F00FF"} size={"20px"} />}
                                    />
                                    <Text fontSize={"20px"} fontWeight={"700"}>34</Text>
                                </Flex>
                            </Box>
                            <Box p={"16px 20px"} h={"114px"} w={"369px"} borderLeft={"1px solid #DADCE0"}>
                                <Text fontSize={"14px"} fontWeight={"600"} color={"#1C4980"}>Candidates</Text>
                                <Flex gap={"25px"} alignItems={"center"} pt={"15px"} color={"#1C4980"}>
                                    <IconButton
                                        variant='outline'
                                        bg="#EBE8FD"
                                        size='md'
                                        icon={<LuUsers color={"#8F00FF"} size={"20px"} />}
                                    />
                                    <Box borderRight={"2px solid #DADCE0"} pr={"25px"}>
                                        <Text fontSize={"20px"} fontWeight={"700"} color={"#1C4980"}>11,145 <Text as={"span"} fontSize={"12px"} fontWeight={"500"} color={"#05C165"}>+89</Text></Text>
                                        <Text fontSize={'12px'} fontWeight={"500"} color={"#1C4980"}>Total Candidates</Text>
                                    </Box>
                                    <Box>
                                        <Text fontSize={"20px"} fontWeight={"700"} color={"#1C4980"}>1,14 <Text as={"span"} fontSize={"12px"} fontWeight={"500"} color={"#05C165"}>+89</Text></Text>
                                        <Text fontSize={'12px'} fontWeight={"500"} color={"#1C4980"}>Who Attamped</Text>
                                    </Box>
                                </Flex>
                            </Box>
                            <Box p={"16px 20px"} h={"114px"} w={"499px"} borderLeft={"1px solid #DADCE0"}>
                                <Text fontSize={"14px"} fontWeight={"600"} color={"#1C4980"}>Candidates Source</Text>
                                <Flex gap={"25px"} alignItems={"center"} pt={"15px"} color={"#1C4980"}>
                                    <IconButton
                                        variant='outline'
                                        bg="#FCE8EF"
                                        size='md'
                                        icon={<PiGlobeBold color={"#E9407A"} size={"20px"} />}
                                    />
                                    <Box borderRight={"2px solid #DADCE0"} pr={"25px"}>
                                        <Text fontSize={"20px"} fontWeight={"700"} color={"#1C4980"}>11,000 <Text as={"span"} fontSize={"12px"} fontWeight={"500"} color={"#05C165"}>+89</Text></Text>
                                        <Text fontSize={'12px'} fontWeight={"500"} color={"#1C4980"}>E-mail</Text>
                                    </Box>
                                    <Box borderRight={"2px solid #DADCE0"} pr={"25px"}>
                                        <Text fontSize={"20px"} fontWeight={"700"} color={"#1C4980"}>145 <Text as={"span"} fontSize={"12px"} fontWeight={"500"} color={"#05C165"}>+89</Text></Text>
                                        <Text fontSize={'12px'} fontWeight={"500"} color={"#1C4980"}>Social Share</Text>
                                    </Box>
                                    <Box>
                                        <Text fontSize={"20px"} fontWeight={"700"} color={"#1C4980"}>145 <Text as={"span"} fontSize={"12px"} fontWeight={"500"} color={"#05C165"}>+89</Text></Text>
                                        <Text fontSize={'12px'} fontWeight={"500"} color={"#1C4980"}>Unique Link</Text>
                                    </Box>
                                </Flex>
                            </Box>
                            <Box p={"16px 20px"} h={"114px"} w={"188px"} borderLeft={"1px solid #DADCE0"}>
                                <Text fontSize={"14px"} fontWeight={"600"} color={"#1C4980"}>Total Purpose</Text>
                                <Flex gap={"10px"} alignItems={"center"} pt={"15px"} color={"#1C4980"}>
                                    <IconButton
                                        variant='outline'
                                        bg="#EBE8FD"
                                        size='md'
                                        icon={<FiLink2 color={"#0073E6"} size={"20px"} />}
                                    />
                                    <Text fontSize={"20px"} fontWeight={"700"}>11</Text>
                                </Flex>
                            </Box>
                        </Flex>
                    </Flex>
                    <Flex h={"445px"} flexDirection={"column"} gap={"16px"} mt={"30px"}>
                        <Text fontSize={"18px"} fontWeight={"500"} color={"#1C4980"}>My Assessment</Text>
                        <Flex h={"389px"} gap={"30px"}>
                            <Flex flexDirection={"column"} w={"388px"} h={"209px"} border={"1px dashed #DADCE0"} borderRadius={"12px"} p={"30px"} bg={"#F6F8FA"} gap={"12px"} textAlign={"center"} alignItems={"center"}>
                                <IconButton
                                    isRound={true}
                                    bg="#fff"
                                    h={"80px"}
                                    w={"68px"}
                                    icon={<BiPlus color={"#0073E6"} size={"40px"} />}
                                    onClick={onOpen}
                                />
                                <Drawer
                                    isOpen={isOpen}
                                    placement='bottom'
                                    onClose={onClose}
                                >
                                    <DrawerOverlay />
                                    <DrawerContent w={"591px"} m={"auto"} borderRadius={"8px 8px 0px 0px"}>
                                        <DrawerCloseButton />
                                        <DrawerHeader borderRadius={"8px 8px 0px 0px"} h={"70px"} borderBottom={"1px solid #DADCE0"}>Create new assessment</DrawerHeader>

                                        <DrawerBody>
                                            <Flex flexDirection={"column"} gap={"20px"}>
                                                <Flex flexDirection={"column"} gap={"10px"}>
                                                    <Text fontSize={"16px"} fontWeight={"500"} color={"#1C4980"}>Name of assessment</Text>
                                                    <Input
                                                        borderRadius={"8px"}
                                                        h={"50px"}
                                                        w={"531px"}
                                                        placeholder='Type Here'
                                                        fontSize={"14px"}
                                                        fontWeight={"500"}
                                                        color={"#1C4980"}
                                                    />
                                                </Flex>
                                                <Flex flexDirection={"column"} gap={"10px"}>
                                                    <Text fontSize={"16px"} fontWeight={"500"} color={"#1C4980"}>Purpose of the test is</Text>
                                                    <Select placeholder='Select' borderRadius={"8px"} h={"50px"} w={"531px"} fontSize={"14px"} color={"#1C4980"} fontWeight={"500"}>
                                                    </Select>
                                                </Flex>
                                                <Flex flexDirection={"column"} gap={"10px"}>
                                                    <Text fontSize={"16px"} fontWeight={"500"} color={"#1C4980"}>Description</Text>
                                                    <Select placeholder='Select' borderRadius={"8px"} h={"50px"} w={"531px"} fontSize={"14px"} color={"#1C4980"} fontWeight={"500"}>
                                                    </Select>
                                                </Flex>
                                                <Flex flexDirection={"column"} gap={"10px"} h={"180px"} borderRadius={"8px"}>
                                                    <Text fontSize={"16px"} fontWeight={"500"} color={"#1C4980"}>Skills</Text>
                                                    <Flex flexDirection={"column"}>
                                                        <Grid templateColumns='repeat(3, 1fr)' gap={"10px"} p={"16px"} h={"102px"} borderRadius={"8px 8px 0px 0px"} border={"1px solid #DDE5EA"}>
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
                                                        <Input
                                                            h={"50px"}
                                                            borderRadius={"0px 0px 8px 8px"}
                                                            placeholder='Type Here'
                                                            fontSize={"14px"}
                                                            fontWeight={"500"}
                                                            color={"#1C4980"}
                                                        />
                                                    </Flex>
                                                </Flex>
                                                <Flex flexDirection={"column"} gap={"10px"}>
                                                    <Text fontSize={"16px"} fontWeight={"500"} color={"#1C4980"}>Duration of assessment</Text>
                                                    <Input
                                                        borderRadius={"8px"}
                                                        h={"50px"}
                                                        w={"531px"}
                                                        placeholder='HH:MM:SS'
                                                        fontSize={"14px"}
                                                        fontWeight={"500"}
                                                        color={"#1C4980"}
                                                    />
                                                </Flex>
                                            </Flex>
                                        </DrawerBody>

                                        <DrawerFooter>
                                            <Button w={"531px"} h={"40px"} p={"10px 30px"} bg={"#0073E6"} color={"#fff"}>Save</Button>
                                        </DrawerFooter>
                                    </DrawerContent>
                                </Drawer>

                                <Text fontSize={"18px"} fontWeight={"500"} color={"#1C4980"}>New Assessment</Text>
                                <Text fontSize={"12px"} fontWeight={"500"} color={"#1C4980"}>From here you can add questions of multiple types like MCQs, subjective (text or paragraph)</Text>

                            </Flex>
                            <Flex flexDirection={"column"} w={"388px"} h={"209px"} border={"1px solid #DADCE0"} borderRadius={"12px"} p={"16px"} bg={"#fff"} gap={"16px"}>
                                <Flex>
                                    <Flex flexDirection={"column"} gap={"10px"}>
                                        <IconButton
                                            variant='outline'
                                            bg="#EBE8FD"
                                            w={"50px"}
                                            h={"50px"}
                                            icon={<BsHandbag color={"#8F00FF"} size={"20px"} />}
                                        />
                                        <Text fontSize={"18px"} fontWeight={"500"} color={"#1C4980"}>Math Assessment</Text>
                                        <Flex alignItems={"center"} gap={"10px"} fontSize={"14px"} fontWeight={"600"} color={"#1C4980"}>Job <FaRegCalendarAlt /> <Text fontSize={"12px"} fontWeight={"500"} color={"#8DA4BF"}> 20 Apr 2023</Text></Flex>
                                    </Flex>
                                </Flex>
                                <Flex justifyContent={"space-between"} alignItems={"center"} borderTop={"1px dashed #DADCE0"} pt={"5px"}>
                                    <Flex gap={"15px"}>
                                        <Box>
                                            <Text fontSize={"14px"} fontWeight={"600"} color={"#1C4980"}>00</Text>
                                            <Text fontSize={"12px"} fontWeight={"500"} color={"#1C4980"}>Duration</Text>
                                        </Box>
                                        <Box>
                                            <Text fontSize={"14px"} fontWeight={"600"} color={"#1C4980"}>00</Text>
                                            <Text fontSize={"12px"} fontWeight={"500"} color={"#1C4980"}>Questions</Text>
                                        </Box>
                                    </Flex>
                                    <Flex gap={"10px"}>
                                        <Flex gap={"4px"} alignItems={"center"} border={"1px solid #1C4980"} p={"2px 8px 2px 6px"} h={"30px"} w={"77px"} borderRadius={"50px"} color={"#1C4980"}>
                                            <AiOutlineLink />
                                            <Text>Share</Text>
                                        </Flex>
                                        <Flex alignItems={"center"} justifyContent={"center"} w={"30px"} h={"30px"} borderRadius={"33px"} color={"#fff"} bg={"#6548EE"} fontWeight={"600"}>LP</Flex>
                                    </Flex>
                                </Flex>
                            </Flex>
                            <Flex flexDirection={"column"} w={"388px"} h={"209px"} border={"1px solid #DADCE0"} borderRadius={"12px"} p={"16px"} bg={"#fff"} gap={"16px"}>
                                <Flex>
                                    <Flex flexDirection={"column"} gap={"10px"}>
                                        <IconButton
                                            variant='outline'
                                            bg="#EBE8FD"
                                            w={"50px"}
                                            h={"50px"}
                                            icon={<BsHandbag color={"#8F00FF"} size={"20px"} />}
                                        />
                                        <Text fontSize={"18px"} fontWeight={"500"} color={"#1C4980"}>Math Assessment</Text>
                                        <Flex alignItems={"center"} gap={"10px"} fontSize={"14px"} fontWeight={"600"} color={"#1C4980"}>Job <FaRegCalendarAlt /> <Text fontSize={"12px"} fontWeight={"500"} color={"#8DA4BF"}> 20 Apr 2023</Text></Flex>
                                    </Flex>
                                </Flex>
                                <Flex justifyContent={"space-between"} alignItems={"center"} borderTop={"1px dashed #DADCE0"} pt={"5px"}>
                                    <Flex gap={"15px"}>
                                        <Box>
                                            <Text fontSize={"14px"} fontWeight={"600"} color={"#1C4980"}>00</Text>
                                            <Text fontSize={"12px"} fontWeight={"500"} color={"#1C4980"}>Duration</Text>
                                        </Box>
                                        <Box>
                                            <Text fontSize={"14px"} fontWeight={"600"} color={"#1C4980"}>00</Text>
                                            <Text fontSize={"12px"} fontWeight={"500"} color={"#1C4980"}>Questions</Text>
                                        </Box>
                                    </Flex>
                                    <Flex gap={"10px"}>
                                        <Flex gap={"4px"} alignItems={"center"} border={"1px solid #1C4980"} p={"2px 8px 2px 6px"} h={"30px"} w={"77px"} borderRadius={"50px"} color={"#1C4980"}>
                                            <AiOutlineLink />
                                            <Text>Share</Text>
                                        </Flex>
                                        <Flex>
                                            <Flex alignItems={"center"} border={"2px solid #fff"} justifyContent={"center"} w={"30px"} h={"30px"} borderRadius={"33px"} color={"#fff"} bg={"#6548EE"} fontWeight={"600"}>LP</Flex>
                                            <Flex ml={"-20px"} border={"2px solid #fff"} alignItems={"center"} justifyContent={"center"} w={"30px"} h={"30px"} borderRadius={"33px"} color={"#fff"} bg={"#3079E1"} fontWeight={"600"}>LP</Flex>
                                            <Flex alignItems={"center"} ml={"-20px"} border={"2px solid #fff"} justifyContent={"center"} w={"30px"} h={"30px"} borderRadius={"33px"} color={"#fff"} bg={"#E9407A"} fontWeight={"600"}>LP</Flex>
                                        </Flex>
                                    </Flex>
                                </Flex>
                            </Flex>
                        </Flex>
                    </Flex>
                </Box>
            </Box>
        </Flex>
    )
}

export default Desktop