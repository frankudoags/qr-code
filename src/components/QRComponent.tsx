import React from 'react'
import QRCode from 'react-qr-code'

const QRComponent = () => {

  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <div className='flex flex-col justify-center items-center min-h-[70vh] w-full max-w-7xl mx-auto'>
      <h1 className='text-4xl text-center tracking-tight font-bold text-slate-800 max-w-7xl sm:text-5xl md:text-6xl lg:text-8xl'>
        QR Code Generator
      </h1>
      
      {/* Input */}
      <div className='flex flex-col gap-4 mt-8 px-4 w-full justify-center'>
      <label className='text-center max-w-4xl mt-4 text-slate-500'>
        Enter a value to generate a QR code.
      </label>
        <input
          type='text'
          className='inline-flex items-center justify-center w-full sm:w-[70%] mx-auto px-10 py-3 border border-gray-300 text-base font-medium rounded-md text-slate-700 focus:outline-none focus:ring-1 focus:ring-slate-500 focus:border-slate-500'
          value={value}
          onChange={handleChange}
        />

        {/* Output */}
        {value && (
          <div className='flex flex-col sm:flex-row gap-4 mt-8 px-4 w-full justify-center'>
            <QRCode value={value} />
            </div>
        )}

      </div>
    </div>
  )
}

export default QRComponent
