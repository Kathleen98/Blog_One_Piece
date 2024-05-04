import './App.css'
import '@mantine/core/styles.css';
import HeroBanner from './components/Banner/index';
import CarouselCharacter from './components/Carousel';
import { Grid, Image, Title, Text, Flex } from '@mantine/core';

function App() {


  return (
    <>
      <Grid>
        <Grid.Col span={16}>
          <HeroBanner/>
        </Grid.Col>
      </Grid>

      <Grid p={16}>
        <Grid.Col  
          span={6}
          pl={32}
        >
          <Image
            w={'100%'}
            h={'75vh'}
            radius={6}
            src='https://images4.alphacoders.com/164/thumb-1920-164904.jpg'
          />
        </Grid.Col>
        <Grid.Col pr={16} pl={16} span={6}>
          <Title
            style={{
              textAlign: 'left',
              textTransform: 'uppercase'
            }}
            fz={20}
            c={'#1d1c22'}
            pl={16}
          >
            One Piece
          </Title>
          <Flex
            direction={'column'}
            gap={16}
            pl={16}
            pt={16}
          >
          <Text 
            style={
              {
                lineHeight: '1.5',
                textAlign: 'left'
              }
            }
            fz={14} 
            c={'#1d1c22'}
          >
            Ahoy, nakama! Preparados para zarpar rumo a uma aventura épica nos mares tumultuados do mundo de One Piece? Esta lendária série de mangá, criada pelo mestre Eiichiro Oda, nos leva em uma jornada que desafia os limites da imaginação desde julho de 1997, quando seus capítulos começaram a ser serializados na revista semanal Shōnen Jump.
          </Text>
          <Text 
            style={
              {
                lineHeight: '1.5',
                textAlign: 'left'
              }
            }
            fz={14} 
            c={'#1d1c22'}
          >
            Ah, mas essa não é apenas uma história qualquer! One Piece é um tesouro que já soma mais de 108 volumes tankōbon, publicados pela poderosa editora Shueisha até abril de 2024. E no centro dessa tempestade de emoções está Monkey D. Luffy, um jovem destemido cujo destino foi selado no momento em que devorou um fruto do diabo, ganhando um corpo de borracha em troca!
          </Text>

          <Text 
            style={
              {
                lineHeight: '1.5',
                textAlign: 'left'
              }
            }
            fz={14}
            c={'#1d1c22'}
          >
            Com sua leal tripulação, os destemidos Piratas do Chapéu de Palha, Luffy desbrava os perigos da Grand Line, determinado a encontrar o maior tesouro de todos: o lendário "One Piece", que promete torná-lo o Rei dos Piratas, o soberano dos sete mares!
          </Text>

          <Text 
            style={
              {
                lineHeight: '1.5',
                textAlign: 'left'
              }
            }
            fz={14}
            c={'#1d1c22'}
          >
            E não é que a jornada desse bando de aventureiros chegou a ultrapassar a marca dos mil capítulos na Weekly Shonen Jump, em janeiro de 2021? Uma conquista tão grandiosa que só poucos mangás tiveram o privilégio de alcançar. Preparados para embarcar nessa emocionante jornada com Luffy e sua turma? A próxima grande aventura nos espera!
          </Text>
          </Flex>
        </Grid.Col>
      </Grid>

      <Flex >
        <CarouselCharacter/>
      </Flex>
    </>
  )
}

export default App
