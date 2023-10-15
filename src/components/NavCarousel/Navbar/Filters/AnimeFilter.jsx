import React from 'react'

const animeNames = ['Anime Movies', "Chainsaw Man", "Dragon Ball", "JoJo", "One Piece", "Tokyo Revengers",
                    'AOT', "Cowboy Bebop", "Fairy Tail", "Jujutsu Kaisen", "One Punch Man", "Your Name"];
const secondAnimeList = ["Assassination Classroom", "Darling in the Franxx", "Fullmetal Alchemist", "Mob Psycho 100", "Senpai Collection", 
                        "Black Clover", "Death Note", "Gintama", "My Hero Academia", "Spy X Family",
                    "Bleach", "Demon Slayer", "Haikyuu", "My Neighbour Totoro", "Solo Leveling",
                    "Blue Lock", "Dr. Stone", "Hunter x Hunter", "Shinobi", "Tokyo Ghoul"];

import animeFilterStyling from "./AnimeFilter.module.css"
export default function AnimeFilter({marginStyles}) {
  return (
    <div className={animeFilterStyling.filter} style={marginStyles}>
        <div className={animeFilterStyling.listRenderer}>
            <div className={animeFilterStyling.list1}>
                {
                    animeNames.map((item, index)=> {
                        return (
                            <div key={index}>
                                 {
                                    item
                                }
                           </div>
                        )
                    })
                }
            </div>
            <div className={animeFilterStyling.list2}>
                {
                    secondAnimeList.map((item, index)=> {
                       return  <div key={index}>{item}</div>
                    })
                }
            </div>
        </div>
    </div>
  )
}
