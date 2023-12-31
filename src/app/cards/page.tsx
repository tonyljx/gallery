"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { z } from "zod";
type Props = {};
import localizedFormat from "dayjs/plugin/localizedFormat";
import TagForm from "@/components/tony/memory-tab/tag-form";
import DateForm from "@/components/tony/memory-tab/date-form";
import { CardSchema, TCard, cardSchemaArray } from "@/schema/card";

dayjs.extend(localizedFormat);

const cardSets = [
  {
    header: "cardset1 header1",
    content: `This is a card{currentIdx} Great work... It can be applied to entire
          page like when page rendered the animation begin on textboxes and
          buttons ... Can you do more tutorials on animation Great work... It
          can be applied to entire page like when page rendered the animation
          begin on textboxes and buttons ... Can you do more tutorials on
          animation Great work... It can be applied to entire page like when
          page rendered the animation begin on textboxes and buttons ... Can
          you do more tutorials on animation This is a card{currentIdx} Great
          work... It can be applied to entire page like when page rendered the
          animation begin on textboxes and buttons ... Can you do more
          tutorials on animation Great work... It can be applied to entire
          page like when page rendered the animation begin on textboxes and
          buttons ... Can you do more tutorials on animation Great work... It
          can be applied to entire page like when page rendered the animation
          begin on textboxes and buttons ... Can you do more tutorials on
          animation This is a card
          `,
    answer: `Yes. Free to use for personal and commercial projects. No
    attribution required. <pre class="my-6 p-4 bg-gray-800 text-gray-100 rounded-md shadow-inner"><code>console.log("hello world");</code></pre>`,
    tags: ["ai", "gpt", "react"],
    date: dayjs().format("ll"),
  },
  {
    header: "cardset1 header2",
    content: `<h2 class="pb-2 text-3xl font-semibold tracking-tight first:mt-0" level="2">hello</h2><p>this is jiongxinliang</p><blockquote class="mt-6 border-l-2 pl-6 italic"><p>dwadwa</p></blockquote><p>dwadaw</p> <p><em>VueJs</em></p><p><em>NextjsCharka</em></p><p><s>dwadawdwa</s></p><p>This is 1996</p>`,
    answer: `This is from 1998 说唱领袖.`,
    tags: ["backend", "java"],
    date: dayjs().format("ll"),
  },
];

export default function Page({}: Props) {
  // useEffect(() => {
  //   const fetchData = async () => {
  //     fetch("/api/hello")
  //       .then((res) => res.json())
  //       .then((data: TCard[]) => {
  //         console.log(data);

  //         const validUser = cardSchemaArray.safeParse(data);
  //         if (!validUser.success) {
  //           console.log(validUser.error);
  //           return;
  //         }
  //         console.log(validUser.data);
  //       });
  //   };
  //   fetchData();
  // }, []);

  return (
    <div className="flex max-w-[1200px] flex-col items-center">
      <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Card Set
      </h2>

      {/* <NormalCard cardSets={cardSets} /> */}

      {/* tabs */}
      <Tabs defaultValue="tag" className="mt-10 w-[500px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="tag">Tag</TabsTrigger>
          <TabsTrigger value="password">Date</TabsTrigger>
        </TabsList>
        <TabsContent value="tag">
          <Card>
            <CardHeader>
              <CardTitle>Tag Memo</CardTitle>
              <CardDescription>
                Usful for remembering a set of related tag things
              </CardDescription>
            </CardHeader>
            <CardContent>
              {/* form */}
              <TagForm />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="password">
          <Card>
            <CardHeader>
              <CardTitle>Date Memo</CardTitle>
              <CardDescription>
                Usful for remembering a set of related date things when
                preparing for an exam, or studying a topic
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              {/* date form */}
              <DateForm />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
