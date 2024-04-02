import { HiMagnifyingGlass } from 'react-icons/hi2';
import {AiFillCloseCircle} from 'react-icons/ai';
import { Input, InputGroup, InputLeftElement, InputRightElement} from '@chakra-ui/react';
import { useState } from 'react';
import styles from './InputRight.module.css';

function InputRight(params) {
    const [value,setValue] = useState('')
    const isShow = value.length > 0;
    const showButtonClear = isShow ? {display: 'block'} : {display:'none'}
    const showBoderInput = isShow ? `${styles.border_input}` : '';
    const showPrimaryColor = isShow ? 'var(--primary-color)' : 'var(--gray-color)';
    const handleChange = (e) => {
        setValue(e.target.value)
    }
    return (
        <div className={`${styles.wrapper}`}>
            <div className={`${styles.position} ${showBoderInput}`}>
                <InputGroup 
                    h={'100%'} 
                    w={'100%'} 
                    ml={'12px'} 
                    mr={'12px'}
                >
                    <InputLeftElement
                        variant={'unstyled'}
                        fontSize={'1.8rem'}
                        mt={'6px'}
                        color={showPrimaryColor}
                        children={<HiMagnifyingGlass/>} 
                    />
                    <Input 
                        onChange={(e) => handleChange(e)}
                        value={value}
                        variant={'unstyled'}
                        h={'100%'}
                        fontSize={'1.6rem'}
                        placeholder='Search tweets' 
                        _placeholder={{fontSize:'1.6rem', color: 'var(--gray-color)'}}
                    />
                    {isShow ? 
                        <InputRightElement 
                        children={<AiFillCloseCircle/>}
                        variant={'unstyled'}
                        color={showPrimaryColor}
                        fontSize={'1.8rem'}
                        mt={'6px'}
                        onClick={() => setValue('')}
                        cursor={'pointer'}
                        /> : '' }
                </InputGroup>
                        
            </div>
            <div 
                className={styles.result}
                style={showButtonClear}
            >
                Try searching for people, topics, or keywords
            </div>
        </div>
    );
}

export default InputRight;
