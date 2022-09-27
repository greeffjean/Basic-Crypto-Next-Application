
import type { NextPage } from 'next'
import { useQueries, useQuery } from 'react-query';
import { coinDeskResponse } from '../types';

export async function getServerSideProps() {
    const data: coinDeskResponse = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json').then((response) => {
        return response.json();
    });

    return {
        props: {
            data
        }
    }
}

const ServerGenerated: NextPage<{ data: coinDeskResponse }> = ({ data }) => {
    const {
        bpi,
        disclaimer,
        chartName,
        time
    } = data;

    return (
        <>
        <h1>{chartName}</h1>
        <section>
            <h3>BPI</h3>
            <table>
                <tr>
                    <th>Currency</th>
                    <th>Rate</th>
                </tr>
                {Object.keys(bpi).map(v => (
                   <tr key={v}>
                    <td>{bpi[v]['description']}</td>
                    <td>{bpi[v]['rate']}</td>
                   </tr>
                ))}
            </table>
        </section>
        <footer>{disclaimer}</footer>
        </>
    )
}

export default ServerGenerated;