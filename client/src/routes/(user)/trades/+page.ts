import { liveQuery } from "dexie";
import { db } from '$lib/db'

export const load = () => {
  const friends = liveQuery(
    () => db.friends.toArray()
  );

  return {friends}
}