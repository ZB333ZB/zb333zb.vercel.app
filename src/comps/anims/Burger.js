import { Switch } from "@headlessui/react";
import { useSelector, useDispatch } from "react-redux";
import { enable, disable, selectState } from "./burgerSlice";

export function Burger() {
  const enabled = useSelector(selectState);
  const dispatch = useDispatch();

  return (
    <Switch
      checked={enabled}
      onChange={() => dispatch(enabled ? disable() : enable())}
      className="flex h-6 w-6 cursor-pointer flex-col items-center justify-around hover:text-zinc-200 md:hidden"
    >
      <span
        className={`${
          enabled && "translate-x-1 translate-y-2 rotate-45"
        } h-0.5 w-6 bg-current transition-all ease-in-out`}
      ></span>
      <span
        className={`${
          enabled ? "-translate-x-12 bg-transparent" : "bg-current"
        } h-0.5 w-6 transition-all ease-in-out`}
      ></span>
      <span
        className={`${
          enabled && "translate-x-1 -translate-y-2 -rotate-45"
        } h-0.5 w-6 bg-current transition-all ease-in-out`}
      ></span>
    </Switch>
  );
}
