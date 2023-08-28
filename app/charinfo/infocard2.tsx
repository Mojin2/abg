// "use client";
// import useCharacter from "@/libs/client/useCharacter";

// export default function InfoCard() {
//   const { profile, equipment } = useCharacter();
//   const imgsrc = profile?.CharacterImage;

//   return (
//     <div className="mt-4">
//       {/* Character Info */}
//       <div className="bg-slate-950 mx-4 my-4 relative h-[460px] rounded-md shadow-2xl max-w-sm">
//         <div className="flex flex-col justify-center items-center">
//           {/* Image */}
//           <div className="py-2">
//             <img src={imgsrc} className="" />
//           </div>
//           {/* Level Info */}
//           <div className="absolute py-3 bottom-0 flex flex-col  text-slate-100 bg-slate-950 w-full justify-center items-center ">
//             <div className="flex flex-row space-x-2 items-end">
//               <span className="font-bold text-2xl">
//                 {profile?.CharacterName}
//               </span>
//               <span className="font-bold text-cyan-600">{profile?.Title}</span>
//             </div>
//             <div className="flex flex-row space-x-10 justify-between px-2">
//               <div className="flex flex-col text-center ">
//                 <span className="text-slate-400 text-sm">아이템</span>
//                 <span className="font-bold text-lg">{`Lv.${profile?.CharacterLevel}`}</span>
//               </div>
//               <div className="flex flex-col text-center">
//                 <span className="text-slate-400 text-sm">전투</span>
//                 <span className="font-bold text-lg">
//                   {profile?.ItemMaxLevel}
//                 </span>
//               </div>
//             </div>
//           </div>
//           {/* Equipment Info */}
//           <div className="absolute bottom-0 h-full z-0 w-full flex flex-row justify-between px-2 pt-2">
//             <div className="space-y-2 flex flex-col">
//               {equipment?.map((data, idx) => {
//                 if (idx < 6)
//                   return (
//                     <div
//                       className="aspect-square w-12 rounded-md bg-gradient-to-br from-[#3d3325] to-[#dcc999]"
//                       key={idx}
//                     >
//                       <img src={`${data.Icon}`} />
//                     </div>
//                   );
//               })}
//             </div>
//             <div className="space-y-2">
//               {equipment?.map((data, idx) => {
//                 if (idx >= 6 && idx < 13)
//                   return (
//                     <div
//                       className="aspect-square w-12 rounded-md bg-gradient-to-br from-[#3d3325] to-[#dcc999]"
//                       key={idx}
//                     >
//                       <img src={`${data.Icon}`} />
//                     </div>
//                   );
//               })}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

export default function InfoCcard() {
  return <div> info</div>;
}
