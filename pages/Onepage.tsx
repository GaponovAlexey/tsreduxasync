import React from 'react'

export const Onepage = ({ id, client_id, delets }) => {
	return (
		<div
			onClick={() => delets(id)}
			style={{ color: 'red ', }} >
			{client_id}
		</div>
	)
}
