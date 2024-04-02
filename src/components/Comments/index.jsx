/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { IoIosMore } from 'react-icons/io';
import { FaRegComment, FaRegHeart } from 'react-icons/fa';
import { HiOutlineUpload } from 'react-icons/hi';
import { TbRepeat } from 'react-icons/tb';
import { Avatar, Box, Button, Flex, Text, Tooltip, useBoolean } from '@chakra-ui/react';

const Comment = () => {
    const [flag, setFlag] = useBoolean();
    return (
        <Flex
            gap="20px"
            w="100%"
            p="20px"
            cursor="pointer"
            transition="all 0.3s ease-in-out"
            _hover={{ bgColor: 'var(--background-color)' }}
        >
            <Box position="relative">
                <Avatar
                    h={50}
                    w={50}
                    name="Dan Abrahmov"
                    src="https://bit.ly/dan-abramov"
                    onMouseEnter={setFlag.on}
                    onMouseLeave={setFlag.off}
                    cursor="pointer"
                    transition="all 0.3s ease-in-out"
                    _hover={{ filter: 'auto', brightness: '80%' }}
                />
                {/* {flag ? <PopupUser top={'60px'} left={'-110px'} setFlag={setFlag} /> : ''} */}
            </Box>

            <Flex flexDirection="column" w="100%">
                <User />
                <Replying />
                <Text>Exactly why you need travel insurance.</Text>
                <Bar />
            </Flex>
        </Flex>
    );
};

export default Comment;

const PopupUser = ({ top, left, setFlag }) => {
    const BoxStyle = {
        boxShadow: 'rgb(101 119 134 / 20%) 0px 0px 15px, rgb(101 119 134 / 15%) 0px 0px 3px 1px',
        bgColor: 'rgba(255,255,255,1.00)',
        borderRadius: '16px',
        overflow: 'hidden',
        position: 'absolute',
        top: top,
        right: '0px',
        left: left,
        bottom: '0px',
        w: '300px',
        minH: 'fit-content',
        p: '16px',
    };
    return (
        <Box sx={BoxStyle} onMouseEnter={setFlag.on}>
            <Flex justifyContent="space-between">
                <Avatar
                    h="64px"
                    w="64px"
                    name="Dan Abrahmov"
                    src="https://bit.ly/dan-abramov"
                    cursor="pointer"
                    transition="all 0.3s ease-in-out"
                    _hover={{ filter: 'auto', brightness: '80%' }}
                />
                <Button
                    bgColor="rgb(15, 20, 25)"
                    px="16px"
                    minH="36px"
                    minW="36px"
                    color="rgb(255, 255, 255)"
                    fontWeight="700"
                    fontSize="1.5rem"
                    borderRadius="18px"
                >
                    Follow
                </Button>
            </Flex>

            <Flex flexDirection="column" mt="8px">
                <Text whiteSpace="nowrap" color="rgb(15, 20, 25)" fontSize="1.7rem" fontWeight="700">
                    Lanrob
                </Text>
                <Text fontSize="1.5rem" color="rgb(83, 100, 113)" cursor="pointer">
                    @ColesLance
                </Text>
            </Flex>

            <Text mt="12px" color="rgb(15, 20, 25)" lineHeight="20px" fontSize="1.5rem" fontWeight="400">
                Deep crypto 2012 OG. Web 5.0 evangelist. Private NFT collector. -Lives in the MetaVerse.
            </Text>

            <Flex mt="12px">
                <Text display="flex" justifyContent="center" alignItems="center" gap="5px" mr="20px">
                    <Text fontWeight="bold" color="rgb(15, 20, 25)" fontSize="1.5rem">
                        700
                    </Text>
                    <Text fontSize="1.5rem" color="rgb(83, 100, 113)">
                        Following
                    </Text>
                </Text>
                <Text display="flex" justifyContent="center" alignItems="center" gap="5px">
                    <Text fontWeight="bold" color="rgb(15, 20, 25)" fontSize="1.5rem">
                        700
                    </Text>
                    <Text fontSize="1.5rem" color="rgb(83, 100, 113)">
                        Follower
                    </Text>
                </Text>
            </Flex>
        </Box>
    );
};
const User = () => {
    return (
        <Flex w="100%" justifyContent="space-between" position="relative">
            <Flex alignItems="center" justifyContent="center">
                <Text fontSize="1.6rem" as="b" pr="5px" cursor="pointer" _hover={{ textDecoration: 'underline' }}>
                    Lanrob
                </Text>
                <Text fontSize="1.5rem" color="rgb(83, 100, 113)" cursor="pointer">
                    @ColesLance
                </Text>
                <Text fontSize="1.5rem" color="rgb(83, 100, 113)" px="5px">
                    .
                </Text>
                <Tooltip label="7:10 PM . 10/11/2022" placement="bottom" fontSize="1.1rem" openDelay={500}>
                    <Text
                        fontSize="1.5rem"
                        color="rgb(83, 100, 113)"
                        cursor="pointer"
                        _hover={{ textDecoration: 'underline' }}
                    >
                        Nov 5
                    </Text>
                </Tooltip>
            </Flex>
            <Tooltip label="More" placement="bottom" fontSize="1.1rem" openDelay={500}>
                <Flex
                    alignItems="center"
                    p="5px"
                    borderRadius="100%"
                    position="absolute"
                    top="0"
                    right="0"
                    cursor="pointer"
                    transition="all 0.3s ease-in-out"
                    _hover={{ bgColor: 'rgba(29, 155, 240, 0.1)', color: 'var(--primary-color)' }}
                >
                    <IoIosMore size={20} />
                </Flex>
            </Tooltip>
        </Flex>
    );
};
const Replying = () => {
    return (
        <Text display="flex" color="rgb(83, 100, 113)">
            Replying to
            <Text ml="5px" color="rgb(29, 155, 240)" _hover={{ textDecoration: 'underline' }}>
                @vietnamenglish
            </Text>
        </Text>
    );
};

const Bar = () => {
    const iconBarStyle = {
        fontSize: '1.7rem',
        p: '7px',
        borderRadius: '100%',
        alignItems: 'center',
        transition: 'all 0.3s ease-in-out',
    };
    return (
        <Flex gap="50px" mt="10px" color="rgb(83, 100, 113)">
            <Tooltip label="Reply" placement="bottom" fontSize="1.1rem" openDelay={500}>
                <Flex alignItems="center" gap="10px" role="group">
                    <Flex
                        sx={iconBarStyle}
                        _groupHover={{ bgColor: 'rgba(29, 155, 240, 0.1)', color: 'var(--primary-color)' }}
                    >
                        <FaRegComment />
                    </Flex>
                    <Text fontSize="1.3rem" _groupHover={{ color: 'var(--primary-color)' }}>
                        0
                    </Text>
                </Flex>
            </Tooltip>

            <Tooltip label="Reteet" placement="bottom" fontSize="1.1rem" openDelay={500}>
                <Flex alignItems="center" gap="10px" role="group">
                    <Flex
                        sx={iconBarStyle}
                        transform="rotage(90deg)"
                        _groupHover={{ bgColor: 'rgba(0, 186, 124, 0.1)', color: 'rgb(0, 186, 124)' }}
                    >
                        <TbRepeat />
                    </Flex>
                    <Text fontSize="1.3rem" _groupHover={{ color: 'rgb(0, 186, 124)' }}>
                        0
                    </Text>
                </Flex>
            </Tooltip>

            <Tooltip label="Like" placement="bottom" fontSize="1.1rem" openDelay={500}>
                <Flex alignItems="center" gap="10px" role="group">
                    <Flex
                        sx={iconBarStyle}
                        transform="rotage(90deg)"
                        _groupHover={{ bgColor: 'rgba(249, 24, 128, 0.1)', color: 'rgb(249, 24, 128)' }}
                    >
                        <FaRegHeart />
                    </Flex>
                    <Text fontSize="1.3rem" _groupHover={{ color: 'rgb(249, 24, 128)' }}>
                        0
                    </Text>
                </Flex>
            </Tooltip>

            <Tooltip label="Share" placement="bottom" fontSize="1.1rem" openDelay={500}>
                <Flex alignItems="center" gap="10px" role="group">
                    <Flex
                        sx={iconBarStyle}
                        _groupHover={{ bgColor: 'rgba(29, 155, 240, 0.1)', color: 'var(--primary-color)' }}
                    >
                        <HiOutlineUpload />
                    </Flex>
                </Flex>
            </Tooltip>
        </Flex>
    );
};
