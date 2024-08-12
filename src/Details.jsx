/* eslint-disable react/prop-types */
// /* eslint-disable react/prop-types */
// export function Details({ title, setTitle }) {
//     return (
//         <>
//         <div>
//             <h1>{title}</h1>
//             <button onClick={()=>setTitle(prev => prev + 'Hui')}>Click Me</button>
//         </div>
//         </>
     
//     )
// }

export function Details({details, setDetails}) {
    return (
        <>
        <div>
            <h1>{details.title}</h1>
            <button onClick={() => setDetails(prev => {
                return {
                    ...prev,
                    title: prev.title + '...'
                }
            })}>{details.buttonText}</button>
            
        </div>
        </>
        asdasdasd
    )
}