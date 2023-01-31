import Head from 'next/head'
import { Box } from '@/components/box'
import { Background } from '@/components/background'


const boxes = [
  {
    color: '#92AA91',
    name: 'Karst',
    blend: 'exclusion',
    top: 10,
    left: 10,
  },
  {
    color: '#BEC684',
    name: 'Tacit',
    blend: 'exclusion',
    top: 20,
    left: 40,
  },
  {
    color: '#CFCF7F',
    name: 'Eremia',
    blend: 'exclusion',
    top: 60,
    left: 60,
  },
  {
    color: '#BEB17E',
    name: 'Rozu',
    blend: 'exclusion',
    top: 27,
    left: 18,
  },
  {
    color: '#C5987A',
    name: 'Marrakech',
    blend: 'luminosity',
    top: 5,
    left: 58,
  },
  {
    color: '#BE875C',
    name: 'Eidesis',
    blend: 'exclusion',
    top: 34,
    left: 63,
  },
  {
    color: '#B07056',
    name: 'Miraceti',
    blend: 'exclusion',
    top: 58,
    left: 36,
  },
  {
    color: '#826569',
    name: 'Hwyl',
    blend: 'color-dodge',
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
