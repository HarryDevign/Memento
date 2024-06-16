"use client"

import React from "react";
import { SignedIn, UserButton } from "@clerk/nextjs";

import { Button } from "../../../components/ui/button";
import { ModeToggle } from "../../../components/shared/ModeToggle";
import { Calendar } from "../../../components/ui/calendar";
import { DropdownMenuCheckboxes } from "../../../components/shared/Dropdown";

const page = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  return (
    <section>
      <div className="flex gap-5">
        <Button>Button</Button>
        <Button variant={"secondary"}>Button</Button>
        <Button variant={"destructive"}>Button</Button>
        <Button variant={"outline"}>Button</Button>
        <Button variant={"ghost"}>Button</Button>
        <Button variant={"link"}>Button</Button>
      </div>
      <ModeToggle />
      <DropdownMenuCheckboxes />
    </section>
  );
};

export default page;
