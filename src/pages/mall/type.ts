import React from "react";

export interface BoxRefI {
  setRed: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface SlideUpI {
  seeHi: (msg: string) => void;
  el: HTMLDivElement | null;
}
