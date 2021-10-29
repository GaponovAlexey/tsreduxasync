import React, { ReactElement, useState } from 'react'

interface Props {
	
}

export default function NewTodoForm({}: Props): ReactElement {
	const [state, setstate] = useState('')
	const send = () => {
		
	}
	return (
		<div>
			<input value={state} onChange={e => setstate(e.target.value)} />
			<button onClick={() => send()} >send</button>
		</div>
	)
}
