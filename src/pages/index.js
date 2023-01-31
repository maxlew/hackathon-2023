import Head from 'next/head'
import { Box } from '@/components/box'
import { Background } from '@/components/background'


const boxes = [
  {
    color: '#92AA91',
    name: 'Karst',
    blend: 'exclusion',
    top: 4,
    left: 3,
  },
  {
    color: '#BEC684',
    name: 'Tacit',
    blend: 'lighten',
    top: 11,
    left: 36,
  },
  {
    color: '#CFCF7F',
    name: 'Eremia',
    blend: 'lighten',
    top: 60,
    left: 60,
  },
  {
    color: '#BEB17E',
    name: 'Rozu',
    blend: 'color-dodge',
    top: 29,
    left: 9,
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
    top: 56,
    left: 6,
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
