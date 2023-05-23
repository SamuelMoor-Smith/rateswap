"use client";
import React from "react";
import Select from "react-select";

export type CurrencyOption = {
  value: string,
  label: string,
  image: {src: string},
}

const currencyOptions = [
  { value: 'USD', label: 'USD', image: { src: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png' } },
  { value: 'CAD', label: 'CAD', image: { src: 'https://cdn.britannica.com/68/7068-004-7848FEB4/Flag-Canada.jpg' } },
  { value: 'EUR', label: 'EUR', image: { src: 'https://media.istockphoto.com/id/854115776/photo/flag-of-england.jpg?s=612x612&w=0&k=20&c=EojPOFUwYV_8vhsJ9RR06rmTwOsSpfVqWbbxGiVpxgk=' } }
];

const formatOptionLabel = ({ value, label, image }: CurrencyOption) => (
  <div className="flex items-center">
    <img src={image.src} alt={label} style={{ width: '20px', marginRight: '8px'}} />
    {label}
  </div>
);

export const Amount = ({}) => {
  return (
    <div>
      <div className="relative mt-2 shadow-sm flex">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <span className="text-gray-500 text-lg">$</span>
        </div>
        <input
          type="text"
          name="price"
          id="price"
          className="block w-full border-0 py-3 pl-7 pr-20 text-lg text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-6 rounded-l-full"
          placeholder="0.00"
        />
        <div className="flex items-center border border-gray-300 rounded-r-full" style={{ width: '200px' }}>
          <Select
            id="currency"
            name="currency"
            className="w-full h-full border-0 bg-transparent pt-1 pl-2 pr-7 text-lg text-yellow-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
            options={currencyOptions}
            formatOptionLabel={formatOptionLabel}
            isSearchable={false}
            styles={{
              control: (base: any) => ({
                ...base,
                width: '100%',
                border: 0,
                boxShadow: 'none',
                backgroundColor: 'transparent',
              }),
              menu: (base: any) => ({
                ...base,
                borderRadius: 0,
                marginTop: 0,
                backgroundColor: 'transparent',
              }),
              menuList: (base: any) => ({
                ...base,
                padding: 0,
                boxShadow: 'none',
                backgroundColor: 'black',
              }),
              dropdownIndicator: (base: any) => ({
                ...base,
                display: 'none',
                backgroundColor: 'transparent',
              }),
              singleValue: (base: any) => ({
                ...base,
                color: '#fde047',
              }),
              placeholder: (base: any) => ({
                ...base,
                color: '#fde047',
              }),
            }}
          />
        </div>
      </div>
    </div>
  )
}
