import React from "react";
import { Input } from "../../UI/Input";
import { CardsList } from "../../UI/CardsList";

export const Main = () => {
  return (
    <main className='main'>
      <div className="container">
        <h1>Top Chuck{'\u00A0'}Norris facts</h1>
        <Input/>
        <CardsList/>
      </div>
    </main>
  )
}