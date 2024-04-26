import { useState, useEffect } from "react";
import GetAllUsers from "../Services/UserService";
import '../site.css';

export default function Home() {
    return(
      <>
        <div className="homepage-div">
          <h2>This is the home page</h2>
        </div>
      </>
    )
  }