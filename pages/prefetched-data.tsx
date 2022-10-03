
import type { NextPage } from 'next'
import { useQuery } from 'react-query';
import { apiEntriesResponse, entriesType } from '../types';

const PrefetchedData: NextPage = () => {
    const res = useQuery<apiEntriesResponse>('test', () => fetch('/api/hello').then(res => { return res.json()}), { refetchOnWindowFocus: false } );

    if (res.error) {
        return <><h1>There has been an error</h1></>
    } else if (res.isLoading) {
        return <><h2>The page is loading...</h2></>
    }
    else {
        return <>
            <h1>API Entries</h1>
            <section>
                <table>
                    <tbody>
                    <tr>
                        <th>API</th>
                        <th>Description</th>
                        <th>Auth</th>
                        <th>HTTPS</th>
                        <th>Cors</th>
                        <th>Link</th>
                        <th>Category</th>
                    </tr>

                    {res?.data?.entries.map((v: entriesType, i: number) => (
                        <tr key={v.API + i}>
                            <td>{v.Description}</td>
                            <td>{v.Auth}</td>
                            <td>{v.HTTPS}</td>
                            <td>{v.Cors}</td>
                            <td>{v.Link}</td>
                            <td>{v.Category}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </section>
        </>
    }

}

export default PrefetchedData;