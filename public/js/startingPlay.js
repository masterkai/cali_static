// const startPlayState = {
//   TabsActiveDefault: [true, false, false, false, false, false],
//   TabsData: [
//     {
//       "n": "0",
//       "icon": "baccarat",
//       "tabName": "真人娛樂",
//       "tabImage": "/images/startPlay/truePeople_photo.jpg",
//       "gameProvider": ["allbet", "Cali_logo", "DreamGaming", "WM", "SAgaming"]
//     },
//     {
//       "n": "1",
//       "icon": "futbol-solid",
//       "tabName": "體育博彩",
//       "tabImage": "/images/startPlay/sport_photo.jpg",
//       "gameProvider": ["SUPER", "AFBCash"]
//     },
//     {
//       "n": "2",
//       "icon": "ticket-alt-solid",
//       "tabName": "賓果彩票",
//       "tabImage": "/images/startPlay/lottery_photo.jpg",
//       "gameProvider": ["Klottery", "SUPERbingo"]
//     },
//     {
//       "n": "3",
//       "icon": "alien-monster-solid",
//       "tabName": "電子遊戲",
//       "tabImage": "/images/startPlay/slot_photo.jpg",
//       "gameProvider": ["RTGslots", "DREAMTECH_GAMING", "SAgaming", "betixion", "betsoft"]
//     },
//     {
//       "n": "4",
//       "icon": "responsibility",
//       "tabName": "棋牌",
//       "tabImage": "/images/startPlay/poker_photo.jpg",
//       "gameProvider": ["LUCKY_GAMING", "MG"]
//     },
//     {
//       "n": "5",
//       "icon": "fish",
//       "tabName": "捕魚王",
//       "tabImage": "/images/startPlay/fish_photo.jpg",
//       "gameProvider": ["allbet", "SAgaming"]
//     }
//   ]
// };
//
//
// const _class = {
//   true: "iconTab active",
//   false: 'iconTab'
// };
//
// const expandTab = (index) => {
//   const reset = startPlayState.TabsActiveDefault.map(() => false);
//   reset[index] = true;
//   startPlayState.TabsActiveDefault = reset;
//   $('#startingPLAY .tabs').remove();
//   startPlayingDesktop.insertAdjacentHTML('beforeend', renderStartPlayTabs(startPlayState.TabsData))
// };
//
// const startPlayingDesktop = document.getElementById('startingPLAY');
//
// const renderStartPlayTabs = data => {
//   const html = data.map((item, index) => {
//     const {icon, tabName, gameProvider, tabImage, n} = item;
//     return `<li class='tabs' onclick="expandTab(${n})">
//         <div class="${_class[startPlayState.TabsActiveDefault[index]]}">
//           <span class="iconfont icon_${icon}"></span>
//           <p>${tabName}</p>
//         </div>
//         ${
//       startPlayState.TabsActiveDefault[index] ? `<div class='contentBox'>
//             <img class='contentIMG' src='build${tabImage}'/>
//             <div class='iconBox'>
//               ${
//         gameProvider.length > 2 ? gameProvider.map(p =>
//           `<div class='iconBtn' style='max-width:50px;max-height: 50px'>
//                     <span style="font-size: 3rem;" title="${p}" class="tip iconfont icon_${p}" ></span>
//                   </div>`
//         ).join('') : gameProvider.map(p =>
//           `<div class='iconBtn' style='max-width:120px'>
//                     <span class="iconfont icon_${p}"></span>
//                   </div>`
//         ).join('')
//
//       }
//             </div>
//           </div>` : ''
//     }
//       </li>`
//   }).join('');
//
//   return html;
//
// }
//
// startPlayingDesktop.insertAdjacentHTML('beforeend', renderStartPlayTabs(startPlayState.TabsData))