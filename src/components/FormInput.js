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
  className = ''
}, ref) => {
  // Base classes for focus states and enhanced design
  const defaultFocusClasses = 'focus:border-orange-500 focus:ring-orange-500 focus:ring-2 focus:outline-none';
  const baseInputClasses = `
    w-full px-4 py-4 sm:py-3 rounded-xl border-2 border-gray-200
    focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent
    transition-all duration-200
    hover:border-orange-200 hover:bg-orange-50/30
    placeholder:text-gray-400 text-base sm:text-lg
  `;
  
  const selectClasses = `
    w-full px-4 py-4 sm:py-3 rounded-xl border-2 border-gray-200
    focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent
    transition-all duration-200
    hover:border-orange-200 hover:bg-orange-50/30
    text-base sm:text-lg text-gray-700 appearance-none
  `;

  // Use provided className or default classes
  const getInputClassName = (defaultClasses) => {
    return className || `${defaultClasses} ${defaultFocusClasses} ${baseInputClasses}`;
  };

  if (type === 'radio') {
    return (
      <div className="mb-8">
        <label className="block text-base sm:text-lg font-medium text-gray-700 mb-4">
          {label}{required && <span className="text-red-500 ml-1">*</span>}
        </label>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-x-8">
          {options.map((option) => (
            <div key={option.value} className="flex items-center">
              <input
                type="radio"
                id={`${id}_${option.value}`}
                name={name}
                value={option.value}
                checked={value === option.value}
                onChange={onChange}
                className="h-6 w-6 border-2 border-gray-300 text-orange-500 focus:ring-orange-500 checked:bg-orange-500 checked:[background-image:url('data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PScwIDAgMTYgMTYnIGZpbGw9J3doaXRlJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnPjxjaXJjbGUgY3g9JzgnIGN5PSc4JyByPSczJy8+PC9zdmc+Jyl]"
                required={required}
              />
              <label
                htmlFor={`${id}_${option.value}`}
                className="ml-4 text-base sm:text-lg font-medium text-gray-600 cursor-pointer hover:text-gray-800 transition-colors"
              >
                {option.label}
              </label>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (type === 'select') {
    return (
      <div className="mb-8">
        <label htmlFor={id} className="block text-base sm:text-lg font-medium text-gray-700 mb-4">
          {label}{required && <span className="text-red-500 ml-1">*</span>}
        </label>
        <div className="relative">
        <select
          id={id}
          name={name}
          value={value}
          onChange={onChange}
            className={`${selectClasses}`}
          required={required}
        >
            <option value="" className="text-gray-400">Select an option</option>
          {options.map((option) => (
              <option key={option.value} value={option.value} className="text-gray-700">
              {option.label}
            </option>
          ))}
        </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'textarea') {
    return (
      <div className="mb-8">
        <label htmlFor={id} className="block text-base sm:text-lg font-medium text-gray-700 mb-4">
          {label}{required && <span className="text-red-500 ml-1">*</span>}
        </label>
        <textarea
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          className={getInputClassName('border-gray-300 resize-none hover:border-gray-400')}
          required={required}
          placeholder={placeholder}
          rows="4"
        />
      </div>
    );
  }

  return (
    <div className="mb-8">
      <label htmlFor={id} className="block text-base sm:text-lg font-medium text-gray-700 mb-4">
        {label}{required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <input
        ref={ref}
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className={getInputClassName('border-gray-300 hover:border-gray-400')}
      />
    </div>
  );
});

export default FormInput; 