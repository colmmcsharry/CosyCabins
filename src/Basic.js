import React, {useState, useEffect } from 'react';



export default function Basic() {
	const [count, setCount] = useState(0);
	const [name, setName] = useState(['lol', 'hehe', 'peter'])

return (
<div>

<p>You clicked {count} times </p>

<button onClick={() => setCount(count + 1) } >
	clickme
</button>

<br/>

<button onClick={() => setName(name[0])}> MakeColm</button>

<p>{name}</p>

<p> hello my name is {name[2]} </p>

</div>

	)

}