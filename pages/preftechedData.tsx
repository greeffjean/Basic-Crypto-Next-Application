
import type { NextPage } from 'next'
import { useQueries, useQuery } from 'react-query';
import { apiEntriesResponse } from '../types';

const PrefetchedData: NextPage = () => {
    const { data, error, isLoading } = useQuery('apiEntries', () => fetch('https://api.publicapis.org/entries'));
    
    return (
        <>
            <h1>API Entries</h1>
            <section>
                <table>
                    <tr>
                        <th>API</th>
                        <th>Description</th>
                        <th>Auth</th>
                        <th>HTTPS</th>
                        <th>Cors</th>
                        <th>Link</th>
                        <th>Category</th>
                    </tr>

                    {Object.keys(bpi).map(v => (
                        <tr key={v}>
                            <td>{bpi[v]['description']}</td>
                            <td>{bpi[v]['rate']}</td>
                        </tr>
                    ))}

                </table>
            </section>
        </>
    )
}

export default PrefetchedData;