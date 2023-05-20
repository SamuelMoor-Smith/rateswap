export type Option = {
    id: string,
    token: string,
    percent: number,
    avatar: string,
    date: string,
    title?: string,
}

export const options: Option[] = [
    {
        id: '1',
        token: 'ETH',
        percent: 3.23,
        avatar: '/prince-akachi-LWkFHEGpleE-unsplash.jpg',
        date: '2021-06-30',
        title: 'ETH',
    },
    {
        id: '1',
        token: 'ATOM',
        percent: 1.89,
        avatar: '/prince-akachi-LWkFHEGpleE-unsplash.jpg',
        date: '2021-09-29',
        title: 'ETH',
    }
];