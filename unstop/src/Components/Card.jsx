import { Box, Flex, HStack, Spacer, Text } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineLink } from 'react-icons/ai';
import { BiTimeFive } from 'react-icons/bi';
import { PiBriefcaseBold } from 'react-icons/pi';
import { BsThreeDotsVertical } from 'react-icons/bs';

function Card({ num, logoCount }) {

    return (
        <Box mt={'20px'} color={'#1C4980'} fontSize={'12px'} w={'95%'} borderRadius={'10px'} border={'1px solid #D8DADE'} py={'10px'} mx={'auto'}>
            <Flex borderBottom={'1px dashed #D8DADE'} p={'5px 10px 15px 10px'}>
                <HStack>
                    <Box p={'12px'} bg={'#EBE8FD'} borderRadius={'10px'}>
                        <PiBriefcaseBold size={'23px'} />
                    </Box>

                    <Box>
                        <Text fontWeight={'600'} fontSize={'15px'}>Math Assessment</Text>
                        <HStack>
                            <Text pr={'10px'} borderRight={'1px solid #9BAFC7'}>Job</Text>
                            <BiTimeFive size={'15px'} color='#9BAFC7' />
                            <Text color={'#9BAFC7'} fontWeight={'600'}>20 Apr 23</Text>
                        </HStack>
                    </Box>
                </HStack>
                <Spacer />
                <BsThreeDotsVertical size={'18px'} />
            </Flex>
            <Flex fontWeight={'600'} textAlign={'left'} p={'12px 10px 2px 10px'}>
                <Box >
                    <Text>00</Text>
                    <Text>Duration</Text>
                </Box>
                <Box ml={'15px'}>
                    <Text>00</Text>
                    <Text>Questions</Text>
                </Box>
                <Spacer />
                <HStack h={'30px'} border={'1px solid #1C4980'} borderRadius={'20px'} px={'8px'}>
                    <AiOutlineLink size={'17px'} />
                    <Text fontWeight={'600'}>Share</Text>
                </HStack>
                <HStack ml={'35px'} mt={'-5px'}>
                    {
                        logoCount?.map((el) => {
                            return <Text color={'white'} h={'30px'} ml={'-27px'} px={'10px'} pt={'5px'} borderRadius={'15px'} bg={el}>
                                LP
                            </Text>
                        })
                    }
                </HStack>
                <HStack h={'30px'}>
                    {num && <Text px={'5px'}>+{num}</Text>}
                </HStack>
            </Flex>
        </Box>
    )
}

export default Card
