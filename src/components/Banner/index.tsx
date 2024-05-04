import { Flex, NavLink, Image} from '@mantine/core';
import List from './List';
import styles from './styles.module.css';


function HeroBanner(){
    const menu = [
        {
            option: 'Personagens'
        },
        {
            option: 'Akuma No Mi'
        },
        {
            option: 'Mapa'
        },
        {
            option: 'Sobre'
        }
    ];

    return(
            <Flex 
                p={'8px 8px 8px 8px'} 
                maw={'100vw'} 
                bg={'#1663ae'} 
                justify={'space-between'}
                style={{
                    borderRadius: '0 0 4px 4px'
                }}
            >
                <Image
                    src={"../../../../public/onePiece-logo.png  "}
                    w={40}
                />
                <Flex c={'#FFF'}>
                <NavLink 
                    classNames={styles} 
                    style={{
                        width: 'auto',
                    }}
                    href="#required-for-focus"
                    label="Personagens"
                />
                <NavLink classNames={styles}
                    style={{
                        width: '10vw'
                    }}
                    href="#required-for-focus"
                    label="Akuma no mi"
                />
                <NavLink classNames={styles}
                    style={{
                        width: 'auto'
                    }}
                    href="#required-for-focus"
                    label="Mares"
                />
                <NavLink classNames={styles}
                    style={{
                        width: '10vw',
                    }}
                    href="#required-for-focus"
                    label="Galeria de fotos"
                />
                <NavLink classNames={styles}
                    style={{
                        width: '10vw',
                    }}
                    href="#required-for-focus"
                    label="Batalhas épicas"
                />
                </Flex>
            </Flex>
                
    )    
}


export default  HeroBanner