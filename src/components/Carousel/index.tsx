import styles from './styles.module.css';
import { Carousel} from '@mantine/carousel';
import { Card, Image, Avatar, Title, Flex} from '@mantine/core';
import '@mantine/carousel/styles.css';


function CarouselCharacter(){
    return(
        <Flex  >
            <Title 
                style={{textAlign: 'center', textTransform: 'uppercase'}}
                pt={16}
                pb={16}
                size={20}
                fw={500}
                c={'#1164B1'}
            >
                Personagens
            </Title>

            <Avatar
                src="https://i.pinimg.com/564x/62/7f/02/627f02f8de7b28d584d4c4e099bdcfff.jpg"
                alt='Nami'
            />

            <Avatar
                src="https://i.pinimg.com/564x/99/ff/6a/99ff6a060b2a59f99a1377880a057ecc.jpg"
                alt='Nami'
            />
            <Avatar
                src="https://i.pinimg.com/564x/3d/d9/37/3dd937012836726e38ad649049f2faf3.jpg"
                alt='Nami'
            />

            <Avatar
                src="https://i.pinimg.com/564x/f6/5d/46/f65d4648d2553fcc14fb7426f6176fa0.jpg"
                alt='Chopper'
            />

            <Avatar
                src="https://i.pinimg.com/564x/5b/9b/1d/5b9b1df04f5891011138929fe938411c.jpg"
                alt='Chopper'
            />

            <Avatar
                src="https://i.pinimg.com/564x/07/22/a1/0722a142cc3d61709838d8cb383c6462.jpg"
                alt='Chopper'
            />
                
        </Flex>

    )
}

export default CarouselCharacter;