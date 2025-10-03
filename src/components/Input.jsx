import {useId,forwardRef} from 'react'
/**
	* @param{String}value
	* @param{String}placeholder
	* @param{(s: String)=>void}onChange
	* @param{String}label
*/
export const Input = forwardRef(function Input({value,placeholder,onChange,label},ref){
	const id = useId()
 return <div>
	 <label className="form-check-label" htmlFor={id}>{label}</label>
	 <input
	 ref={ref}
	 type="text"
	 id={id}
	 className="form-control"
	 value={value}
	 placeholder={placeholder}
	 onChange={(e)=>onChange?.(e.target.value)}
	 />
	</div>

})
