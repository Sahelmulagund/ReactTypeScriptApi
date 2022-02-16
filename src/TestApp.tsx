import React, { useRef, useState } from "react";


const TestApp = ()=> {
	const [hits, setHits] = useState<any>([]);
	const[isLoading, setIsLoading] = useState<boolean>(true);
	const[isFirstLoad,setIsFirstLoad] = useState<boolean>(true);
	const [error,setError] = useState(null);
	const [targetElement, setTargetElement] = useState(null);
	const prevY = useRef(0) //storing last intersection y position,

	const options = {
		root:null,
		rootMargin:"0px",
		threshold:1.0,
	}
	const handleObserver = (entities:any,observer:any)=>{
		const y =entities[0].boundingClientRect.y;
		if(prevY.current > y){
			 
		}
		prevY.current = y;

	}

}

export default TestApp;