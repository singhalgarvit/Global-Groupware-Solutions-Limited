import React from 'react'

function Input({id,text,value,defaultValue,readonly}) {
  return (
    <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor={id}
                className="block text-sm/6 font-medium text-gray-900"
              >
                {text}
              </label>
              </div>
              <div className="mt-2">
                <input
                  id={id}
                  name={id}
                  type={id}
                  required
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  value={value}
                  defaultValue={defaultValue}
                  readOnly={readonly}
                />
              </div>
            </div>
  )
}

export default Input