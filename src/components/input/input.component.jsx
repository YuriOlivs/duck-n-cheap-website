export function Input({ type, placeholder, value, onChange, disabled, className, ...props }) {
   return (
      <input
      className={`
         bg-[#E4E4E4] text-black p-2 rounded-md 
         ring-1 ring-[#E4E4E4]
         focus:outline-none focus:ring-1 focus:ring-[#b3b3b3]
         transition-all duration-300 ease-in-out
         ${className}
         `
      }
      type={type || 'text'}
      placeholder={placeholder || 'Placeholder'}
      value={value}
      onChange={onChange}
      disabled={disabled || false}
      {...props}
      />
   )
}