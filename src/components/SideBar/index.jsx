import { Link, NavLink } from 'react-router-dom';
import { useRef,  } from 'react';


import { BsTwitter, BsBookmarkCheck } from 'react-icons/bs';
import { BiHomeAlt, BiUser, BiHash } from 'react-icons/bi';
import { RiNotification4Line } from 'react-icons/ri';
import { FiMail } from 'react-icons/fi';
import { CiViewList } from 'react-icons/ci';
import { CgMoreO,CgMoreAlt } from 'react-icons/cg';

import {
    PopoverBody,
    Flex,
    Avatar,
    Box,
    Text,
    Popover,
    PopoverTrigger,
    PopoverContent ,
    PopoverArrow,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    useDisclosure,

} 
from '@chakra-ui/react'

import Status from '.././Twiterrs/Status'
import styles from './SideBar.module.css';



function SideBar() {
    const initialFocusRef = useRef()
    const { isOpen, onOpen, onClose } = useDisclosure()


    return (   
        <div className={styles.wrapper}>
            <div className={styles.top}>
                <ul className={styles.nav}>
                    <li>
                        <Link className={styles.icon} to="/">
                            <BsTwitter />
                        </Link>
                    </li>
                    <li>
                        <NavItem to="/">
                            <BiHomeAlt className={styles.icon} />
                            <span>Home</span>
                        </NavItem>
                    </li>
                    <li>
                        <NavItem to="/explore">
                            <BiHash className={styles.icon} />
                            <span>Explore</span>
                        </NavItem>
                    </li>
                    <li>
                        <NavItem to="/1">
                            <RiNotification4Line className={styles.icon} />
                            <span>Notifications</span>
                        </NavItem>
                    </li>
                    <li>
                        <NavItem to="/2">
                            <FiMail className={styles.icon} />
                            <span>Messages</span>
                        </NavItem>
                    </li>
                    <li>
                        <NavItem to="/3">
                            <BsBookmarkCheck className={styles.icon}  />
                            <span>Bookmarks</span>
                        </NavItem>
                    </li>
                    <li>
                        <NavItem to="/4">
                            <CiViewList className={styles.icon} />
                            <span>Lists</span>
                        </NavItem>
                    </li>
                    <li>
                        <NavItem to="/5">
                            <BiUser className={styles.icon} />
                            <span>Profile</span>
                        </NavItem>
                    </li>
                    <li>
                        <NavItem to="/6">
                            <CgMoreO className={styles.icon} />
                            <span>More</span>
                        </NavItem>
                    </li>
                </ul>
        
             <div>
                <div className={styles.btn} onClick={onOpen}>
                     <button className={styles.btn_}>Tweet</button>
                </div>

                <Modal onClose={onClose} size='5xl'  isOpen={isOpen}>
                        <ModalOverlay />
                            <ModalContent  borderRadius='15px' >
                                <ModalHeader >
                                  <ModalCloseButton p='20px' />
                                </ModalHeader >
                                 <ModalBody p='25px'>
                                 <Status/>
                            </ModalBody>
                        </ModalContent>
                 </Modal>
     </div>
      

            </div>


                <Popover
                    initialFocusRef={initialFocusRef}
                    placement='bottom'
                    closeOnBlur={true}
                >
                <PopoverTrigger
                    >
                    <div className={styles.user}>
                                <Flex>
                                    <Avatar boxSize='38' src='https://i.pinimg.com/originals/41/8d/ee/418deebeb5fe202a8d0fdeaf81a0c32d.jpg'/>
                                        <Box ml='6'>
                                                <Text fontWeight='bold'>
                                                    Haise Sasaki
                                                </Text>
                                                <Text fontSize='2xl'>
                                                    @Haisedzl
                                                </Text>
                                        </Box>
                                </Flex>
                             <div className={styles.btn}>
                                    <CgMoreAlt className={styles.user_info_btn}/>
                             </div>
                     </div>
                </PopoverTrigger>
                    <PopoverContent
                        color='black'
                        bg='white'
                        w='310px'
                        borderRadius='20' 
                        h='130px'
                        boxShadow='lg'
                       >
                    <PopoverArrow />
                        <PopoverBody>
                            <div className={styles.box_styles}>
                                <Box w='100%' p={7} color='black'>
                                        Add an existing account
                                </Box>
                            </div>
                            <div className={styles.box_styles}>
                                <Box w='100%' p={7} color='black'>
                                        Log out @Haisedzl
                                </Box>
                            </div>
                        </PopoverBody>
                </PopoverContent>
                </Popover>
            </div>
    );
}

const NavItem = ({ children, to }) => {
    return (
        <NavLink className={({ isActive }) => `${isActive ? styles.nav_item_active : ''} ${styles.nav_item}`} to={to}>
            {children}
        </NavLink>
    );
};

export default SideBar;
