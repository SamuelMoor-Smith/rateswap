"use client";
import { useState } from 'react';

const people = [
    {
      name: 'Leslie Alexander',
      email: 'leslie.alexander@example.com',
      role: 'Co-Founder / CEO',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      lastSeen: '3h ago',
      lastSeenDateTime: '2023-01-23T13:23Z',
    },
    {
      name: 'Michael Foster',
      email: 'michael.foster@example.com',
      role: 'Co-Founder / CTO',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      lastSeen: '3h ago',
      lastSeenDateTime: '2023-01-23T13:23Z',
    },
    {
      name: 'Dries Vincent',
      email: 'dries.vincent@example.com',
      role: 'Business Relations',
      imageUrl:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      lastSeen: null,
    },
    {
      name: 'Lindsay Walton',
      email: 'lindsay.walton@example.com',
      role: 'Front-end Developer',
      imageUrl:
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      lastSeen: '3h ago',
      lastSeenDateTime: '2023-01-23T13:23Z',
    },
    {
      name: 'Courtney Henry',
      email: 'courtney.henry@example.com',
      role: 'Designer',
      imageUrl:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      lastSeen: '3h ago',
      lastSeenDateTime: '2023-01-23T13:23Z',
    },
    {
      name: 'Tom Cook',
      email: 'tom.cook@example.com',
      role: 'Director of Product',
      imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      lastSeen: null,
    },
  ]
  
  // Client component that uses useState
  export const PeopleList = ({}) => {
    const [selectedPerson, setSelectedPerson] = useState<string | null>(null);
  
    return (
      <ul role="list" className="divide-y divide-gray-700">
          {people.map((person) => (
            <li
              key={person.email}
              tabIndex={0} // Enable focus on this element
              className={`focus:bg-purple-600 focus:text-gray-200 flex justify-between gap-x-6 py-5 px-5 rounded-md ${selectedPerson === person.email ? 'bg-purple-600 text-gray-200' : ''}`}
              onClick={() => setSelectedPerson(person.email)}
            >
              <div className="flex gap-x-4">
                <img className="h-12 w-12 flex-none rounded-full bg-gray-700" src={person.imageUrl} alt="" />
                <div className="min-w-0 flex-auto">
                  <p className="text-sm font-semibold leading-6">{person.name}</p>
                  <p className="mt-1 truncate text-xs leading-5">{person.email}</p>
                </div>
              </div>
              <div className="hidden sm:flex sm:flex-col sm:items-end">
                <p className="text-sm leading-6">{person.role}</p>
                {person.lastSeen ? (
                  <p className="mt-1 text-xs leading-5">
                    Last seen <time dateTime={person.lastSeenDateTime}>{person.lastSeen}</time>
                  </p>
                ) : (
                  <div className="mt-1 flex items-center gap-x-1.5">
                    <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                      <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    </div>
                    <p className="text-xs leading-5">Online</p>
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
    );
  };


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