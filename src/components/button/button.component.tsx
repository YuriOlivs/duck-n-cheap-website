export function Button({ value, onClick, className }) {
   return (
      <button
      onClick={onClick}
      className={`bg-[#1A475C] text-black p-2 rounded-md ${className} cursor-pointer`}
      >
         <span className="font-bold text-white text-lg">{ value }</span>
      </button>
   )
}