//next google fonts
import {
  Roboto_Flex,
  Roboto_Serif,
  Roboto_Mono,
  Righteous,
} from "@next/font/google";

const robotoFlex = Roboto_Flex({
  variable: "--ff-roboto-flex",
});
const robotoSerif = Roboto_Serif({
  variable: "--ff-roboto-serif",
});
const robotoMono = Roboto_Mono({
  variable: "--ff-roboto-mono",
});
const righteous = Righteous({
  weight: "400",
  variable: "--ff-righteous",
});

import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
  setTo,
  reset,
  addSymbolAfter,
  addSymbolBefore,
  selectSymbolBefore,
  selectValue,
  selectSymbolAfter,
  add,
} from "./counterSlice";

import { Menu, Dialog } from "@headlessui/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMinus,
  faPlus,
  faEllipsisVertical,
} from "@fortawesome/free-solid-svg-icons";

const DIALOGS = {
  incrementBy: "incrementBy",
  addSubstract: "addSubstract",
  setTo: "setTo",
  addSymbol: "addSymbol",
  reset: "reset",
};

const MENU_ITEMS = [
  {
    title: "Increment By...",
    dialog: DIALOGS.incrementBy,
  },
  {
    title: "Add/Substract",
    dialog: DIALOGS.addSubstract,
  },
  {
    title: "Set To...",
    dialog: DIALOGS.setTo,
  },
  {
    title: "Add Symbol Before/After",
    dialog: DIALOGS.addSymbol,
  },
  {
    title: "Reset",
    dialog: DIALOGS.reset,
  },
];

let currentDialog = "";

const initialIncrementAmount = () => 1;
const initialSetToAmount = () => "";
const initialSymbolAfter = () => "";
const initialSymbolBefore = () => "";
const initialAddAmount = () => "";

export default function Counter() {
  const result =
    (useSelector(selectSymbolBefore) ?? "") +
    String(useSelector(selectValue)) +
    (useSelector(selectSymbolAfter) ?? "");
  const [incrementAmount, setIncrementAmount] = useState(() =>
    initialIncrementAmount()
  );
  const [addAmount, setAddAmount] = useState(() => initialAddAmount());
  const [setToAmount, setSetToAmount] = useState(() => initialSetToAmount());
  const [symbolAfter, setSymbolAfter] = useState(() => initialSymbolAfter());
  const [symbolBefore, setSymbolBefore] = useState(() => initialSymbolBefore());

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const dispatch = useDispatch();

  const setDialog = (dialogName) => {
    currentDialog = dialogName;
    setIsDialogOpen(true);
  };

  const DialogSwitch = () => {
    switch (currentDialog) {
      case DIALOGS.incrementBy:
        return (
          <div
            className={`${
              isDialogOpen &&
              "fixed top-0 left-0 z-10 h-full w-full bg-black/50"
            }`}
          >
            <Dialog
              open={isDialogOpen}
              onClose={() => {
                setIsDialogOpen(false);
              }}
              className={`${robotoFlex.variable} ${robotoSerif.variable} ${robotoMono.variable} absolute left-1/2 top-1/2 z-10 w-3/4 -translate-x-1/2 -translate-y-1/2 md:w-auto`}
            >
              <Dialog.Panel className="relative z-10 flex flex-col rounded-md bg-zinc-500 p-5 text-black transition-all">
                <Dialog.Title
                  as="h3"
                  className="pb-4 font-sans text-2xl font-medium"
                >
                  Increment By
                </Dialog.Title>
                <form className="pb-1">
                  <input
                    value={incrementAmount}
                    onChange={(e) => setIncrementAmount(e.target.value)}
                    type="number"
                    min="1"
                    className="text-l focus:ring-offset- w-full rounded-md bg-zinc-200 p-2 focus:outline-none focus:ring-1 focus:ring-white focus:ring-offset-2 focus:ring-offset-zinc-700"
                  />
                </form>
                <Dialog.Description className="pb-5 font-sans text-base font-light">
                  Set a number the counter will be incremented by
                </Dialog.Description>
                <button
                  onClick={() => {
                    setIsDialogOpen(false);

                    dispatch(incrementByAmount(incrementAmount));
                  }}
                  className="rounded-md bg-black p-2 font-sans text-2xl font-medium text-zinc-400 hover:text-cyan-300"
                >
                  {"Increment by " + incrementAmount}
                </button>
              </Dialog.Panel>
            </Dialog>
          </div>
        );
      case DIALOGS.addSubstract:
        return (
          <div
            className={`${
              isDialogOpen &&
              "fixed top-0 left-0 z-10 h-full w-full bg-black/50"
            }`}
          >
            <Dialog
              open={isDialogOpen}
              onClose={() => setIsDialogOpen(false)}
              className={`${robotoFlex.variable} ${robotoSerif.variable} ${robotoMono.variable} absolute top-1/2 left-1/2 z-10 w-3/4 -translate-x-1/2 -translate-y-1/2 md:w-auto`}
            >
              <Dialog.Panel className="flex flex-col rounded-md bg-zinc-500 p-5 text-black transition-all">
                <Dialog.Title
                  as="h3"
                  className="pb-4 font-sans text-2xl font-medium"
                >
                  Add/Substract From Total
                </Dialog.Title>
                <form className="pb-1">
                  <input
                    type="number"
                    value={addAmount}
                    onChange={(e) => setAddAmount(e.target.value)}
                    className="text-l focus:ring-offset- w-full rounded-md bg-zinc-200 p-2 focus:outline-none focus:ring-1 focus:ring-white focus:ring-offset-2 focus:ring-offset-zinc-700"
                  />
                </form>
                <Dialog.Description className="pb-5 font-sans text-base font-light">
                  Add a positive or negative number to the total
                </Dialog.Description>
                <button
                  onClick={() => {
                    setIsDialogOpen(false);
                    dispatch(add(addAmount));
                  }}
                  className="rounded-md bg-black p-2 font-sans text-2xl font-medium text-zinc-400 hover:text-cyan-300"
                >
                  {addAmount >= 0
                    ? "Add " + addAmount + " to Total"
                    : "Substract " + Math.abs(addAmount) + " from Total"}
                </button>
              </Dialog.Panel>
            </Dialog>
          </div>
        );
      case DIALOGS.setTo:
        return (
          <div
            className={`${
              isDialogOpen &&
              "fixed top-0 left-0 z-10 h-full w-full bg-black/50"
            }`}
          >
            <Dialog
              open={isDialogOpen}
              onClose={() => setIsDialogOpen(false)}
              className={`${robotoFlex.variable} ${robotoSerif.variable} ${robotoMono.variable} absolute top-1/2 left-1/2 z-10 w-3/4 -translate-x-1/2 -translate-y-1/2 md:w-auto`}
            >
              <Dialog.Panel className="flex flex-col rounded-md bg-zinc-500 p-5 text-black transition-all">
                <Dialog.Title
                  as="h3"
                  className="pb-4 font-sans text-2xl font-medium"
                >
                  Set Counter To New Value
                </Dialog.Title>
                <form className="pb-5">
                  <input
                    value={setToAmount}
                    onChange={(e) => setSetToAmount(e.target.value)}
                    type="number"
                    className="text-l focus:ring-offset- w-full rounded-md bg-zinc-200 p-2 focus:outline-none focus:ring-1 focus:ring-white focus:ring-offset-2 focus:ring-offset-zinc-700"
                  />
                </form>
                <button
                  onClick={() => {
                    setIsDialogOpen(false);
                    dispatch(setTo(setToAmount));
                  }}
                  className="rounded-md bg-black p-2 font-sans text-2xl font-medium text-zinc-400 hover:text-cyan-300"
                >
                  {"Set Counter to " + setToAmount}
                </button>
              </Dialog.Panel>
            </Dialog>
          </div>
        );
      case DIALOGS.addSymbol:
        return (
          <div
            className={`${
              isDialogOpen &&
              "fixed top-0 left-0 z-10 h-full w-full bg-black/50"
            }`}
          >
            <Dialog
              open={isDialogOpen}
              onClose={() => setIsDialogOpen(false)}
              className={`${robotoFlex.variable} ${robotoSerif.variable} ${robotoMono.variable} absolute top-1/2 left-1/2 z-10 w-3/4 -translate-x-1/2 -translate-y-1/2 md:w-auto`}
            >
              <Dialog.Panel className="flex flex-col rounded-md bg-zinc-500 p-5 text-black transition-all">
                <Dialog.Title
                  as="h3"
                  className="pb-4 font-sans text-2xl font-medium"
                >
                  Add Symbol Before or After Counter
                </Dialog.Title>
                <form className="pb-1">
                  <input
                    value={symbolBefore}
                    onChange={(e) => setSymbolBefore(e.target.value)}
                    type="text"
                    placeholder="$"
                    className="text-l focus:ring-offset- w-full rounded-md bg-zinc-200 p-2 placeholder:text-zinc-500 focus:outline-none focus:ring-1 focus:ring-white focus:ring-offset-2 focus:ring-offset-zinc-700"
                  />
                </form>
                <Dialog.Description className="pb-4 font-sans text-base font-light">
                  Add symbol before counter number
                </Dialog.Description>
                <form className="pb-1">
                  <input
                    value={symbolAfter}
                    onChange={(e) => setSymbolAfter(e.target.value)}
                    type="text"
                    placeholder="%"
                    className="text-l focus:ring-offset- w-full rounded-md bg-zinc-200 p-2 placeholder:text-zinc-500 focus:outline-none focus:ring-1 focus:ring-white focus:ring-offset-2 focus:ring-offset-zinc-700"
                  />
                </form>
                <Dialog.Description className="pb-5 font-sans text-base font-light">
                  Add symbol after counter number
                </Dialog.Description>
                <button
                  onClick={() => {
                    setIsDialogOpen(false);
                    dispatch(addSymbolBefore(symbolBefore));
                    dispatch(addSymbolAfter(symbolAfter));
                  }}
                  className="rounded-md bg-black p-2 font-sans text-2xl font-medium text-zinc-400 hover:text-cyan-300"
                >
                  Save Settings
                </button>
              </Dialog.Panel>
            </Dialog>
          </div>
        );
      case DIALOGS.reset:
        return (
          <div
            className={`${
              isDialogOpen &&
              "fixed top-0 left-0 z-10 h-full w-full bg-black/50"
            }`}
          >
            <Dialog
              open={isDialogOpen}
              onClose={() => {
                setIsDialogOpen(false);
              }}
              className={`${robotoFlex.variable} ${robotoSerif.variable} ${robotoMono.variable} absolute left-1/2 top-1/2 z-10 w-3/4 -translate-x-1/2 -translate-y-1/2 md:w-auto`}
            >
              <Dialog.Panel className="flex flex-col rounded-md bg-zinc-500 p-5 text-black transition-all">
                <Dialog.Title
                  as="h3"
                  className="pb-4 font-sans text-2xl font-medium"
                >
                  Reset Counter
                </Dialog.Title>
                <Dialog.Description className="pb-5 font-sans text-base font-light">
                  Are you sure you want to reset the counter?
                </Dialog.Description>
                <div className="flex justify-end gap-5">
                  <button
                    onClick={() => {
                      setIsDialogOpen(false);
                    }}
                    className="rounded-md bg-black p-2 font-sans text-2xl font-medium text-zinc-400 hover:text-zinc-200"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => {
                      setIsDialogOpen(false);
                      dispatch(reset());
                      dispatch(addSymbolBefore(""));
                      dispatch(addSymbolAfter(""));
                    }}
                    className="rounded-md bg-red-800 p-2 font-sans text-2xl font-medium text-red-300 hover:text-red-100"
                  >
                    Reset
                  </button>
                </div>
              </Dialog.Panel>
            </Dialog>
          </div>
        );
    }
  };

  return (
    <div className="w-full">
      <h2 className="my-8 break-words font-serif text-4xl font-semibold">
        Tally Counter
      </h2>
      <div className="relative flex h-[544px] w-full flex-col justify-center rounded-md bg-black text-zinc-700">
        <Menu as="div" className="absolute top-0 right-0">
          <Menu.Button
            className={`cursor-pointer px-7 pt-7 text-4xl hover:text-zinc-400`}
          >
            <FontAwesomeIcon icon={faEllipsisVertical} />
          </Menu.Button>
          <Menu.Items className="absolute right-0 mt-2 flex w-max flex-col rounded-md bg-zinc-500 text-base text-black transition-all">
            {MENU_ITEMS.map((item) => (
              <Menu.Item
                key={item.title}
                className="m-1 max-w-full rounded-md py-1 px-2 text-start capitalize hover:bg-zinc-900 hover:text-zinc-500"
              >
                <button
                  onClick={() => {
                    setDialog(item.dialog);
                  }}
                >
                  {item.title}
                </button>
              </Menu.Item>
            ))}
          </Menu.Items>
        </Menu>
        <DialogSwitch />
        <div className="flex h-[400px] w-full flex-grow items-center justify-center border-b-4 border-solid border-zinc-700 text-[180px]">
          <span>{result}</span>
        </div>
        <div className="flex h-[144px] w-full items-center justify-evenly text-6xl lg:text-8xl">
          <button
            onClick={() => dispatch(decrement())}
            className="h-full w-full border-r-4 border-solid border-zinc-700 hover:text-zinc-400"
          >
            <FontAwesomeIcon icon={faMinus} />
          </button>
          <button
            onClick={() => dispatch(increment())}
            className="h-full w-full hover:text-zinc-400"
          >
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
      </div>
    </div>
  );
}
