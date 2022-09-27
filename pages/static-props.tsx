import type { NextPage } from 'next'
import { funCatFactResponse } from '../types';

export async function getStaticProps() {
    const data = await fetch('https://catfact.ninja/fact').then((response) => { return response.json()});
    return {
        props: {
            data
        }
    }
}

const StaticGenerated: NextPage<{data: funCatFactResponse}> = ({ data }) => {
    const { fact, length } = data;

    return (
        <>
        <h1>{fact}</h1>
        <span>Length is {length} chars.</span>
        </>
    )
}

export default StaticGenerated;