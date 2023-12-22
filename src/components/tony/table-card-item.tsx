"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronDown,
  ChevronUp,
  Tag,
  X,
} from "lucide-react";
import { Badge } from "../ui/badge";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
// import { ICardProps } from "@/schema/card";
import { TCard } from "./table/data/schema";

export default function TableCard({ cardItem }: { cardItem: TCard }) {
  const [collapsible, setCollapsible] = useState(false);

  const markup = { __html: cardItem?.front };

  const answerMarkup = { __html: cardItem?.back };

  return (
    <div className="flex max-w-4xl flex-col justify-center space-y-3 p-6">
      {/* card */}
      <Card className="mb-10">
        <CardHeader className="scroll-m-20 pb-2 text-center text-3xl font-semibold tracking-tight first:mt-0">
          {cardItem?.title}
        </CardHeader>
        <CardContent className="space-y-3">
          <div
            className="mb-3 min-w-[450px]"
            dangerouslySetInnerHTML={markup}
          ></div>

          <Collapsible>
            <div className="flex items-center justify-center space-x-4 px-4">
              {/* <h4 className="text-lg font-semibold">A</h4> */}
              <CollapsibleTrigger asChild>
                <Button
                  onClick={() => setCollapsible(!collapsible)}
                  variant="outline"
                  size="sm"
                  className="w-9 p-0"
                >
                  {!collapsible ? (
                    <ChevronDown className="h-4 w-4" />
                  ) : (
                    <ChevronUp className="h-4 w-4" />
                  )}
                </Button>
              </CollapsibleTrigger>
            </div>
            <CollapsibleContent>
              <div dangerouslySetInnerHTML={answerMarkup}></div>
            </CollapsibleContent>
          </Collapsible>

          {/* <Separator />  */}
        </CardContent>

        <CardFooter className="border-t pt-3">
          <div className=" flex w-full items-center  justify-between gap-2 ">
            <span className="text-sm font-semibold text-muted-foreground">
              {cardItem?.created_date}
            </span>
            <div className="flex items-center gap-2">
              <Tag className="mr-2 h-5 w-5 text-violet-500" />
              {cardItem?.tags?.map((item) => (
                <Badge
                  key={item}
                  variant="outline"
                  className="flex items-center bg-violet-600 text-sm text-slate-100"
                >
                  <span>{item}</span>
                  {/* <X className="ml-1 h-4 w-4 cursor-pointer   transition-all duration-150 hover:scale-110" /> */}
                </Badge>
              ))}
            </div>
          </div>
        </CardFooter>
      </Card>

      <div className="  flex justify-between gap-3">
        <div className="flex items-center gap-3 font-semibold">
          <Button className="bg-rose-500 font-semibold">Not Remember</Button>
          <Button className="bg-amber-500 font-semibold">
            Hardly Remember
          </Button>
          <Button className="bg-sky-500 font-semibold">Mostly Remember</Button>
          <Button className="bg-teal-500 font-semibold">100%</Button>

          {/* <Button
            variant="outline"
            className="transition-all duration-150 hover:scale-110"
          >
            <Check className="text-green-500" />
          </Button>

          <Button
            variant="outline"
            className="transition-all duration-150 hover:scale-110"
          >
            <X className="text-red-500" />
          </Button> */}
        </div>
      </div>
    </div>
  );
}
