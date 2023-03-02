// import React, { useEffect, useState, createContext, FC } from 'react';
// import next from '../../images/next.svg';
// import prev from '../../images/prev.svg';
//
// // export const SliderContext = createContext();
//
// interface SliderProps {
//   width: string;
//   height: string;
// }
//
// export const Slider: FC<SliderProps> = ({ width, height }) => {
//   const [items, setItems] = useState([]);
//   const [slide, setSlide] = useState(0);
//   const [touchPosition, setTouchPosition] = useState(null);
//
//   useEffect(() => {
//     const loadData = async () => {
//       const cardSlide = await fetch('https://reqres.in/api/users')
//         .then((res) => res.json())
//         .then((res) => {
//           setItems(res.data);
//         });
//     };
//     loadData().then((data) => console.log(data));
//   }, []);
//
//   return (
//     <div className="slider" style={{ width, height }}>
//       {items.map((item) => {
//         return (
//           <div key={item.id}>
//             <p>{item.first_name}</p>
//             <p>{item.last_name}</p>
//           </div>
//         );
//       })}
//     </div>
//   );
// };
