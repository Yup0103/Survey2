import React, { forwardRef } from 'react';

const FormInput = forwardRef(({
  id,
  name,
  label,
  type = 'text',
  value,
  onChange,
  required = false,
  placeholder = '',
  options = [],
  className = '',
  isDarkMode,
  labelClassName = "text-white font-medium mb-2",
  inputClassName = "",
  optionClassName = "text-white",
  ...props
}, ref) => {
  
  const baseInputClasses = `
    w-full px-4 py-3 rounded-lg
    bg-gray-800 text-white
    border border-gray-600
    focus:border-pink-500 focus:ring-1 focus:ring-pink-500
    placeholder-gray-400
  `;

  if (type === 'radio') {
    return (
      <div className="form-control w-full">
        <label className={labelClassName}>
          {label}{required && <span className="text-red-500 ml-1">*</span>}
        </label>
        <div className="flex flex-row space-x-8 mt-2">
          {options.map((option) => (
            <label key={option.value} className="flex items-center space-x-3 cursor-pointer">
              <input
                type="radio"
                name={name}
                value={option.value}
                checked={value === option.value}
                onChange={onChange}
                required={required}
                className="w-5 h-5 text-pink-500 border-gray-600 focus:ring-pink-500 focus:ring-offset-gray-800 bg-gray-700"
              />
              <span className="text-gray-200 text-base">{option.label}</span>
            </label>
          ))}
        </div>
      </div>
    );
  }

  if (type === 'select') {
    return (
      <div className="form-control w-full">
        <label htmlFor={id} className={labelClassName}>
          {label}{required && <span className="text-red-500 ml-1">*</span>}
        </label>
        <div className="relative mt-2">
          <select
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            className={`${baseInputClasses} appearance-none ${inputClassName}`}
            required={required}
          >
            <option value="" className="bg-gray-800 text-gray-400">Select {label}</option>
            {options.map((option) => (
              <option key={option.value} value={option.value} className="bg-gray-800 text-white">
                {option.label}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="form-control w-full">
      <label htmlFor={id} className={labelClassName}>
        {label}{required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <div className="mt-2">
        <input
          ref={ref}
          type={type}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          placeholder={placeholder}
          className={`${baseInputClasses} ${inputClassName}`}
          {...props}
        />
      </div>
    </div>
  );
});

export default FormInput; 