"use client";

import { useSession } from "next-auth/react";
import { useMemo } from "react";
import { FullConversationType } from "../types";
import { User } from "@prisma/client";

const useOtherUser = (
  conversation:
    | FullConversationType
    | {
        users: User[];
      }
) => {
  try {
    const session = useSession();
    console.log("this is session");
    console.log(session);
    const otherUser = useMemo(() => {
      const currentUserEmail = session?.data?.user?.email;

      const otherUser = conversation.users?.filter(
        (user) => user.email !== currentUserEmail
      );

      return otherUser[0];
    }, [session?.data?.user?.email, conversation?.users]);

    return otherUser;
  } catch (e: any) {
    console.log("hello");
    console.log(e.message);
  }
};

export default useOtherUser;
