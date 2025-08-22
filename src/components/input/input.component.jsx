export function Input({ type, placeholder, value, onChange, disabled, className, ...props }) {
   return (
      <input
      className={`bg-[#E4E4E4] text-black p-2 rounded-md ${className}`}
      type={type || 'text'}
      placeholder={placeholder || 'Placeholder'}
      value={value}
      onChange={onChange}
      disabled={disabled || false}
      {...props}
      />
   )
}