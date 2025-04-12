import React from 'react';

const FormInput = ({
  id,
  name,
  label,
  type = 'text',
  value,
  onChange,
  required = false,
  placeholder = '',
  options = []
}) => {
  if (type === 'radio') {
    return (
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {label}{required && <span className="text-red-500 ml-1">*</span>}
        </label>
        <div className="flex space-x-6">
          {options.map((option) => (
            <div key={option.value} className="flex items-center">
              <input
                type="radio"
                id={`${id}_${option.value}`}
                name={name}
                value={option.value}
                checked={value === option.value}
                onChange={onChange}
                className="h-4 w-4 text-primary border-gray-300 focus:ring-primary"
                required={required}
              />
              <label
                htmlFor={`${id}_${option.value}`}
                className="ml-2 text-sm font-medium text-gray-700"
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
      <div className="mb-4">
        <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
          {label}{required && <span className="text-red-500 ml-1">*</span>}
        </label>
        <select
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
          required={required}
        >
          <option value="">{placeholder || `Select ${label}`}</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    );
  }

  if (type === 'textarea') {
    return (
      <div className="mb-4">
        <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
          {label}{required && <span className="text-red-500 ml-1">*</span>}
        </label>
        <textarea
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
          required={required}
          placeholder={placeholder}
          rows="4"
        />
      </div>
    );
  }

  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
        {label}{required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
        required={required}
        placeholder={placeholder}
      />
    </div>
  );
};

export default FormInput; 