function truncateString(str, num) {
  // If the given length is equal or greater than the length of the given string. Just return the given string.
  if (num >= str.length) return str;
  // Truncate the string then return it
  return str.slice(0, num) + "...";
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);
