import React from 'react'
import withCounter from "../hoc/withCounter"
const Like = ({count,increment,decrement}) => {
  return (
    <> 
    <div className='flex gap-3 flex-col mt-10'>
        <div className='text-center'>
          <h3>Likes: {count}</h3>
        </div>
        <div className='flex gap-2 justify-center'>
          <button onClick={increment} className='bg-red-700 text-white text-center p-2 rounded'>Like 👍</button>
          <button onClick={decrement} className='bg-red-700 text-white text-center p-2 rounded '>Dislike 👎</button> 
        </div>
       
    </div>
       
    </>
  )
}
// const disLike = ({count,decrement})=>{
//     return(
//         <>
//         <div className='flex justify-center items-center flex-col mt-20 gap-2'>
//         <h3>Dislikes: {count}</h3>
//         <button onClick={decrement} className='bg-red-700 text-white text-center p-2'>Dislike 👎</button> 
//         </div>
//         </>
//     )
// }
export const LikeHOC = withCounter(Like);
// export const DisLikeHOC = withCounter(disLike);

