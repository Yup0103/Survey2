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
  const defaultFocusClasses = 'focus:border-orange-500 focus:ring-orange-500 focus:ring-1 focus:outline-none';
  const baseInputClasses = `
    w-full px-4 py-3 rounded-lg border border-gray-200
    focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent
    transition-all duration-200
    hover:border-orange-200 hover:bg-orange-50/30
    placeholder:text-gray-400
  `;
  
  const selectClasses = `
    w-full px-4 py-3 rounded-lg border border-gray-200
    focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent
    transition-all duration-200
    hover:border-orange-200 hover:bg-orange-50/30
    text-gray-700
  `;

  // Use provided className or default classes
  const getInputClassName = (defaultClasses) => {
    return className || `${defaultClasses} ${defaultFocusClasses} ${baseInputClasses}`;
  };

  if (type === 'radio') {
    return (
      <div className="mb-6">
        <label className="block text-base font-medium text-gray-700 mb-3">
          {label}{required && <span className="text-red-500 ml-1">*</span>}
        </label>
        <div className="flex flex-wrap gap-x-8 gap-y-3">
          {options.map((option) => (
            <div key={option.value} className="flex items-center">
              <input
                type="radio"
                id={`${id}_${option.value}`}
                name={name}
                value={option.value}
                checked={value === option.value}
                onChange={onChange}
                className="h-5 w-5 text-orange-500 border-2 border-gray-300 focus:ring-orange-500 focus:ring-1 focus:outline-none checked:bg-orange-500 checked:border-orange-500"
                required={required}
              />
              <label
                htmlFor={`${id}_${option.value}`}
                className="ml-3 text-base font-medium text-gray-600 cursor-pointer hover:text-gray-800 transition-colors"
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
      <div className="mb-6">
        <label htmlFor={id} className="block text-base font-medium text-gray-700 mb-3">
          {label}{required && <span className="text-red-500 ml-1">*</span>}
        </label>
        <div className="relative">
          <select
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            className={`${selectClasses} text-gray-700`}
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
            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'textarea') {
    return (
      <div className="mb-6">
        <label htmlFor={id} className="block text-base font-medium text-gray-700 mb-3">
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
    <div className="mb-6">
      <label htmlFor={id} className="block text-base font-medium text-gray-700 mb-3">
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