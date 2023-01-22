import React, { useEffect,useState } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {

  const [bots, setBots] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/bots")
      .then((response) => response.json())
      .then((bots)=>setBots(bots));
  }, []);
function castBots(id,cast=true){
 setBots(bots.map(bot=> id===bot.id ?{...bot, isCast: cast}: bot))
}
 function unCastBots(id){
  setBots(bots.map(bot=> id===bot.id ?{...bot, isCast: false}: bot))

 }
  function deleteBots(deletedBotId){
    setBots(bots.filter(bot => bot.id !== deletedBotId))
  }
 
