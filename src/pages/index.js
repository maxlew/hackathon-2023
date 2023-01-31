import Head from 'next/head'
import { Box } from '@/components/box'
import { Background } from '@/components/background'


const boxes = [
  {
    color: '#92AA91',
    name: 'Karst',
    top: 10,
    left: 10,
  },
  {
    color: '#BEC684',
    name: 'Tacit',
    top: 20,
    left: 40,
  },
  {
    color: '#CFCF7F',
    name: 'Eremia',
    top: 60,
    left: 60,
  },
  {
    color: '#BEB17E',
    name: 'Rozu',
    top: 27,
    left: 18,
  },
  {
    color: '#C5987A',
    name: 'Marrakech',
    top: 5,
    left: 58,
  },
  {
    color: '#BE875C',
    name: 'Eidesis',
    top: 34,
    left: 63,
  },
  {
    color: '#B07056',
    name: 'Miraceti',
    top: 58,
    left: 36,
  },
  {
    color: '#826569',
    name: 'Hwyl',
    top: 47,
    left: 12,
  },

]


export default function Home() {
  return (
    <>
      <Head>
        <title>The Sound of Fragrance</title>
      </Head>
      <main>
        <Background>
          {boxes.map((args) => <Box {...args}>{args.name}</Box>)}
        </Background>
      </main>
    </>
  )
}
