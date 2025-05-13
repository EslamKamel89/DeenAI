export function pr<T>(
  value: T,
  title: string = "",
  options: { encode: boolean } = {
    encode: false,
  },
): T {
  console.log("\n\n");
  console.log(` ======${title}====== `);
  if (options.encode) {
    console.log(JSON.stringify(value));
  } else {
    console.log(value);
  }
  console.log("\n\n");
  return value;
}

export const deepEqual = (obj1: any, obj2: any): boolean => {
  if (obj1 === obj2) return true;

  if (
    typeof obj1 !== "object" ||
    obj1 === null ||
    typeof obj2 !== "object" ||
    obj2 === null
  ) {
    return false;
  }

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) return false;

  for (const key of keys1) {
    if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
      return false;
    }
  }

  return true;
};

export const getUserNameInitials = (
  username: string | null | undefined,
): string => {
  if (!username || username?.trim()) return "GT";
  const nameParts = username.trim().split(" ");
  if (nameParts.length === 1) {
    return (
      nameParts[0].charAt(0).toUpperCase() +
      (nameParts[0].length > 1 ? nameParts[0].charAt(1).toUpperCase() : "")
    );
  }
  return (
    nameParts[0].charAt(0).toUpperCase() +
    nameParts[nameParts.length - 1].charAt(0).toUpperCase()
  );
};
