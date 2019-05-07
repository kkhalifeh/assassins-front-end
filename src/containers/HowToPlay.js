import React from 'react'

const HowToPlay = props => {

  const redirectToDashboard = (e) => {
    e.preventDefault()
    props.history.push('/')
  }
  return (
    <div>
      <p>Welcome to Murder with Friends: The Web 2.0 way to murder your friends for fun!</p>
      <p>In Murder with Friends, you have a target, a friend, to hunt down and kill anywhere in the world.</p>
      <p>Once they are murdered, they are out of the game. The winner is the last friend standing.</p>
      <h4>How it works:</h4>
        <ul>
          <li>To successfully murder a target, you must throw, fire, or otherwise place a (clean) sock or nerf dart on their person. </li>
          <li>Once you kill your target or your assailant, they must give you their “Secret Code” given to them by the app. </li>
          <li>Enter it into your app to kill them and get a new target.</li>
        </ul>
      <h4>Murder Caveats:</h4>
        <ul>
          <li>No witnesses. If another active player aside from you and the victim sees you firing your weapon (throwing the sock, shooting the nerf dart), the kill doesn’t count. You can, however, shoot a victim while other players are looking at the victim (feel free to sneak up on two friends and assassinate them while they’re next to their buddy).</li>
          <li>Once your weapon (sock, nerf dart) is drawn, your victim can “fire in self defense”. In that case, if they shoot you before you shoot them, you die and are out of the game.</li>
        </ul>
      <h4>Tips:</h4>
        <ul>
          <li>If someone tells you who they’re hunting, they’re most likely lying to you.</li>
          <li>If someone asks you who you’re hunting, you should probably lie to them.</li>
        </ul>

      <button onClick={redirectToDashboard} className="btn btn-danger btn-block">Back to Home</button>
    </div>
  )
}

export default HowToPlay
