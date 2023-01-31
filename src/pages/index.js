import Head from 'next/head'
import { Box } from '@/components/box'
import { Background } from '@/components/background'


const boxes = [
  {
    color: '#864b3f',
    top: 10,
    left: 10,
  },
  {
    color: '#f2ad3e',
    top: 20,
    left: 40,
  },
  {
    color: '#7e8c4c',
    top: 60,
    left: 40,
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
          {boxes.map((args) => <Box {...args} />)}
        </Background>
      </main>
    </>
  )
}
